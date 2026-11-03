import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const HeroVisual = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 100);
    camera.position.set(0, 15, 30);
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    if (!mountRef.current.contains(renderer.domElement)) {
        mountRef.current.appendChild(renderer.domElement);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    // Front Light explicitly for the shield!
    const frontLight = new THREE.PointLight(0xffffff, 2.0, 50);
    frontLight.position.set(0, 5, 20);
    scene.add(frontLight);

    const spotLight = new THREE.SpotLight(0x00ffff, 3); // Reduced cyan spotlight
    spotLight.position.set(0, 5, 0);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    spotLight.decay = 2;
    spotLight.distance = 50;
    scene.add(spotLight);

    // Theme Observer Hook using "data-theme"
    const updateTheme = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      // Sync background exact colors with CSS root
      scene.background = new THREE.Color(isDark ? 0x0a0a0a : 0xfaf8f5);
      // Keep lighting steady so dark objects don't wash out in Light Mode!
      ambientLight.intensity = isDark ? 0.3 : 0.6;
      dirLight.intensity = isDark ? 1.5 : 2.0;
      frontLight.intensity = isDark ? 2.0 : 2.5;
    };
    
    // Check initial
    updateTheme();
    
    // Watch for data-theme attribute on HTML tag
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // GLOW MATERIALS (Cyan & Orange)
    const cyanGlowMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const orangeGlowMaterial = new THREE.MeshBasicMaterial({ color: 0xff5520 }); // Brand Accent Bright

    // 1. BASE (Rounded Squircle)
    const baseWidth = 12;
    const baseHeight = 2.5;
    const baseDepth = 12;
    const baseGeometry = new RoundedBoxGeometry(baseWidth, baseHeight, baseDepth, 6, 1.5);
    
    // Dark plastic material
    const baseMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x11161d,
      metalness: 0.5,
      roughness: 0.3,
      clearcoat: 0.5,
      clearcoatRoughness: 0.2,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -2;
    scene.add(base);

    // Base glowing slit - Using Brand Orange
    const slitGeometry = new THREE.BoxGeometry(baseWidth + 0.5, 0.2, baseDepth + 0.5);
    const baseSlit = new THREE.Mesh(slitGeometry, orangeGlowMaterial);
    baseSlit.position.y = -2.8;
    scene.add(baseSlit);

    // 2. TUBE RING (Torus)
    const ringRadius = 5.5;
    const tubeRadius = 0.8;
    const ringGeometry = new THREE.TorusGeometry(ringRadius, tubeRadius, 32, 100);
    
    // Rubber Material for back half
    const rubberMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      metalness: 0.3,
      roughness: 0.8,
    });
    
    // Glass Material for front half
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 1,
      metalness: 0.1,
      roughness: 0.1,
      ior: 1.5,
      thickness: 1.0,
      transparent: true,
    });

    const ring = new THREE.Mesh(ringGeometry, rubberMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 1;
    scene.add(ring);

    // Inner glowing tube (liquid) - Using Brand Orange
    const liquidGeometry = new THREE.TorusGeometry(ringRadius, tubeRadius * 0.4, 16, 100, Math.PI); // half circle
    const liquid = new THREE.Mesh(liquidGeometry, orangeGlowMaterial);
    liquid.rotation.x = Math.PI / 2;
    liquid.position.y = 1;
    scene.add(liquid);

    // 3. SHIELD (Thick Extruded Shape)
    const shieldShape = new THREE.Shape();
    shieldShape.moveTo(0, 4);
    shieldShape.lineTo(3, 3);
    shieldShape.lineTo(3, -1);
    shieldShape.quadraticCurveTo(3, -3, 0, -5);
    shieldShape.quadraticCurveTo(-3, -3, -3, -1);
    shieldShape.lineTo(-3, 3);
    shieldShape.lineTo(0, 4);

    const extrudeSettings = {
      depth: 1.5,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.3,
      bevelThickness: 0.3
    };

    const shieldGeometry = new THREE.ExtrudeGeometry(shieldShape, extrudeSettings);
    // Center geometry
    shieldGeometry.computeBoundingBox();
    const centerOffset = -0.5 * (shieldGeometry.boundingBox.max.z - shieldGeometry.boundingBox.min.z);
    shieldGeometry.translate(0, 0, centerOffset);

    const shieldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x181e25,
      metalness: 0.3,
      roughness: 0.5,
      clearcoat: 0.5,
    });

    const shield = new THREE.Mesh(shieldGeometry, shieldMaterial);
    shield.position.y = 5.5;
    scene.add(shield);

    // 4. Glowing Exact Ethereum Logo - Reduced Brightness Cyan
    const ethGroup = new THREE.Group();
    ethGroup.position.z = 0.6; // Slightly in front of shield
    
    // Top Diamond
    const ethTopShape = new THREE.Shape();
    ethTopShape.moveTo(0, 1.8);
    ethTopShape.lineTo(0.9, 0);
    ethTopShape.lineTo(0, -0.6);
    ethTopShape.lineTo(-0.9, 0);
    ethTopShape.lineTo(0, 1.8);
    const topGeom = new THREE.ExtrudeGeometry(ethTopShape, { depth: 0.2, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05 });
    
    // Bottom Triangle
    const ethBotShape = new THREE.Shape();
    ethBotShape.moveTo(0, -0.9);
    ethBotShape.lineTo(0.7, -0.3);
    ethBotShape.lineTo(0, -1.8);
    ethBotShape.lineTo(-0.7, -0.3);
    ethBotShape.lineTo(0, -0.9);
    const botGeom = new THREE.ExtrudeGeometry(ethBotShape, { depth: 0.2, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05 });

    const topEth = new THREE.Mesh(topGeom, cyanGlowMaterial);
    const botEth = new THREE.Mesh(botGeom, cyanGlowMaterial);
    ethGroup.add(topEth);
    ethGroup.add(botEth);
    
    shield.add(ethGroup);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 0.4, 0.85); // Reduced Bloom
    bloomPass.threshold = 0.2;
    bloomPass.strength = 0.5; // Halved intense glow
    bloomPass.radius = 0.2;
    composer.addPass(bloomPass);

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Float the shield
      shield.position.y = 6 + Math.sin(elapsedTime * 2) * 0.5;
      
      // Rotate the glowing liquid inside the tube
      liquid.rotation.z = -elapsedTime * 0.5;

      // Slowly rotate the whole scene slightly for 3D effect
      scene.rotation.y = Math.sin(elapsedTime * 0.5) * 0.1;

      // Render with bloom
      composer.render();
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      composer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      // Tilt the base/scene based on mouse
      scene.rotation.x = y * 0.5;
      scene.rotation.y = x * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (observer) observer.disconnect();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // dispose memory
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none">
      {/* 3D Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 z-10 w-full h-full pointer-events-auto" />
      
      {/* Keeping some of the floating UI Cards outside the canvas for UI clarity */}
      <div className="absolute inset-0 z-20 pointer-events-none">
         {/* ... User's UI cards can go back here if needed, keeping simple for rendering test */}
         <div 
            className="glass-main absolute"
            style={{ top: '80px', left: '20px', width: '280px', padding: '20px' }}
          >
              <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent-bright animate-pulse" />
                  <span className="text-[10px] font-bold text-zinc-300 uppercase">ACIS THREAT MONITOR</span>
              </div>
              <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-accent-bright">99.8%</span>
                  <span className="text-[9px] font-semibold text-zinc-400 uppercase">Accuracy</span>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HeroVisual;
