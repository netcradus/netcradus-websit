import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberCore3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 🔥 FORCE DARK STYLE ALWAYS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    const keyLight = new THREE.DirectionalLight(0xffe0c8, 2.8);
    keyLight.position.set(4, 6, 5);

    const fillLight = new THREE.DirectionalLight(0x8090aa, 0.5);
    fillLight.position.set(-4, 2, 3);

    const rimLight = new THREE.PointLight(0xe8400a, 4.0, 15);
    rimLight.position.set(0, -2, -5);

    const accentLight = new THREE.PointLight(0xff5520, 2.5, 12);
    accentLight.position.set(3, 3, -2);

    const frontFill = new THREE.PointLight(0xffffff, 0.5, 15);
    frontFill.position.set(0, 0, 6);

    scene.add(ambientLight, keyLight, fillLight, rimLight, accentLight, frontFill);

    // 🔥 GLOW TEXTURE
    const makeGlowTex = () => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext('2d');
      const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      g.addColorStop(0, 'rgba(255,85,32,0.9)');
      g.addColorStop(0.4, 'rgba(232,64,10,0.4)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 256, 256);
      return new THREE.CanvasTexture(c);
    };

    const glowTex = makeGlowTex();

    const group = new THREE.Group();
    scene.add(group);

    // 🔥 CORE
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xff6030 })
    );
    group.add(core);

    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0.9
      })
    );
    glow.scale.set(3, 3, 1);
    group.add(glow);

    // 🔥 MIDDLE SPHERE
    const mid = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.85, 5),
      new THREE.MeshPhysicalMaterial({
        color: 0x1c1c30,
        metalness: 0.95,
        roughness: 0.1,
        clearcoat: 1
      })
    );
    group.add(mid);

    // 🔥 WIREFRAME
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        color: 0xe8400a,
        wireframe: true,
        transparent: true,
        opacity: 0.22
      })
    );
    group.add(wire);

    // 🔥 RINGS
    const rings = [];
    [1.4, 1.65, 1.95].forEach((r, i) => {
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.02 - i * 0.005, 24, 128),
        new THREE.MeshStandardMaterial({
          color: 0xe8400a,
          emissive: 0xe8400a,
          emissiveIntensity: 2.5,
          transparent: true,
          opacity: [0.9, 0.7, 0.5][i]
        })
      );
      group.add(mesh);
      rings.push(mesh);
    });

    // 🔥 PARTICLES
    const count = 600;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 1.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    const particles = new THREE.Points(
      new THREE.BufferGeometry().setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      ),
      new THREE.PointsMaterial({
        size: 0.02,
        color: 0xff5520,
        transparent: true,
        opacity: 0.6
      })
    );

    group.add(particles);

    // 🔥 ANIMATION
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      core.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
      glow.scale.setScalar(3 + Math.sin(t * 2) * 0.3);

      mid.rotation.y += 0.002;
      wire.rotation.y -= 0.001;

      rings.forEach((r, i) => {
        r.rotation.z += 0.002 * (i + 1);
      });

      renderer.render(scene, camera);
    };

    animate();

    // 🔥 RESIZE
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[500px]" />;
};

export default CyberCore3D;