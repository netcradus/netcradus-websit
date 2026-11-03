import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const DottedGlobe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Responsive
    const resize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    // 🌐 Globe geometry
    const radius = 1.8;
    const geometry = new THREE.SphereGeometry(radius, 64, 64);

    // Detect dark/light mode
    const isDark = document.documentElement.classList.contains("dark");

    const material = new THREE.PointsMaterial({
      color: isDark ? "#ff4d00" : "#ff6a00",
      size: 0.03,
      transparent: true,
      opacity: 0.9,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ✨ Glow effect
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? "#ff3c00" : "#ff7a00",
      transparent: true,
      opacity: 0.08,
    });

    const glowMesh = new THREE.Mesh(
      new THREE.SphereGeometry(radius + 0.2, 32, 32),
      glowMaterial
    );
    scene.add(glowMesh);

    // 🔄 Orbiting particles (cyber feel)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 300;

    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = (radius + 0.4) * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (radius + 0.4) * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = (radius + 0.4) * Math.cos(phi);
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: isDark ? "#ff7a00" : "#ff3c00",
      size: 0.02,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 🎬 Animation
    const animate = () => {
      requestAnimationFrame(animate);

      points.rotation.y += 0.002;
      glowMesh.rotation.y += 0.002;

      particles.rotation.y -= 0.0015;
      particles.rotation.x += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <div className="w-full h-[320px] md:h-[420px]" ref={mountRef} />;
};

export default DottedGlobe;