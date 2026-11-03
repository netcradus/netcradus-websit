import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Globe3D({ size = 420 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = size;
    const height = size;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 280;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main Rotating Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const radius = 95;

    // 2. Inner Dark Occlusion Sphere (gives 3D depth by hiding back lines)
    const innerGeo = new THREE.SphereGeometry(radius - 0.5, 36, 36);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x050811,
      transparent: true,
      opacity: 0.9,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    globeGroup.add(innerSphere);

    // 3. Wireframe Globe (Latitude & Longitude Grid)
    const sphereGeo = new THREE.SphereGeometry(radius, 24, 24);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xff6b1a,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireframeGlobe = new THREE.Mesh(sphereGeo, wireframeMat);
    globeGroup.add(wireframeGlobe);

    // 4. Dotted Nodes on Sphere Surface
    const nodeCount = 180;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);

    const colorOrange = new THREE.Color(0xff6b1a);
    const colorWhite = new THREE.Color(0xffffff);
    const colorCyan = new THREE.Color(0x00f0ff);

    const nodeCoords = [];

    for (let i = 0; i < nodeCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      nodeCoords.push(new THREE.Vector3(x, y, z));

      // Color variation (75% orange, 25% white)
      const rand = Math.random();
      let c = colorOrange;
      if (rand > 0.75) c = colorWhite;
      else if (rand > 0.7) c = colorCyan;

      nodeColors[i * 3] = c.r;
      nodeColors[i * 3 + 1] = c.g;
      nodeColors[i * 3 + 2] = c.b;
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    nodeGeo.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

    // Custom glowing circle texture for node dots
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, "rgba(255, 255, 255, 1)");
    grad.addColorStop(0.4, "rgba(255, 107, 26, 0.8)");
    grad.addColorStop(1, "rgba(255, 107, 26, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();

    const particleTexture = new THREE.CanvasTexture(canvas);

    const nodeMat = new THREE.PointsMaterial({
      size: 6.5,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nodes = new THREE.Points(nodeGeo, nodeMat);
    globeGroup.add(nodes);

    // 5. Network Arc Lines connecting nearby nodes
    const linePositions = [];
    const lineColors = [];

    const maxDist = 42;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodeCoords[i].distanceTo(nodeCoords[j]);
        if (dist < maxDist) {
          linePositions.push(
            nodeCoords[i].x, nodeCoords[i].y, nodeCoords[i].z,
            nodeCoords[j].x, nodeCoords[j].y, nodeCoords[j].z
          );

          // Line gradient color blending
          const isWhiteLine = Math.random() > 0.75;
          const lc = isWhiteLine ? colorWhite : colorOrange;

          lineColors.push(lc.r, lc.g, lc.b, lc.r, lc.g, lc.b);
        }
      }
    }

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    linesGeo.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));

    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const networkLines = new THREE.LineSegments(linesGeo, linesMat);
    globeGroup.add(networkLines);

    // 6. Glowing Orbital Ring Line
    const ringGeo = new THREE.RingGeometry(radius + 12, radius + 14, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff6b00,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
    orbitalRing.rotation.x = Math.PI / 3;
    globeGroup.add(orbitalRing);

    // 7. Outer Latitude Ring Accent 2
    const ringGeo2 = new THREE.RingGeometry(radius + 22, radius + 23, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xff6b1a,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const orbitalRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    orbitalRing2.rotation.x = -Math.PI / 4;
    orbitalRing2.rotation.y = Math.PI / 6;
    globeGroup.add(orbitalRing2);

    // 8. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth continuous Y-axis rotation (~24s per full turn)
      globeGroup.rotation.y = elapsedTime * 0.26;
      globeGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.08;

      orbitalRing.rotation.z = elapsedTime * 0.15;
      orbitalRing2.rotation.z = -elapsedTime * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      innerGeo.dispose();
      innerMat.dispose();
      sphereGeo.dispose();
      wireframeMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleTexture.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      className="relative flex items-center justify-center pointer-events-none"
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}
