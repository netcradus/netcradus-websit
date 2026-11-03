import React, { useEffect, useRef } from 'react';

export default function CyberMeshBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for dynamic interactive connections
    let mouse = { x: width / 2, y: height / 2, radius: 180 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 1. Constellation Nodes
    const numNodes = Math.min(Math.floor((width * height) / 18000), 55);
    const nodes = Array.from({ length: numNodes }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1.5,
      pulse: Math.random() * Math.PI * 2,
    }));

    // 2. Shield Keyhole Nodes
    const shieldNodes = [
      { xRatio: 0.18, yRatio: 0.42, radius: 46 },
      { xRatio: 0.68, yRatio: 0.32, radius: 54 },
      { xRatio: 0.82, yRatio: 0.82, radius: 42 },
      { xRatio: 0.28, yRatio: 0.22, radius: 34 },
    ];

    // 3. Binary Digital Matrix Rain Streams
    const binaryChars = ['0', '1', '01', '10', '101', '010'];
    const numBinary = 35;
    const binaryStreams = Array.from({ length: numBinary }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 0.8 + 0.3,
      char: binaryChars[Math.floor(Math.random() * binaryChars.length)],
      opacity: Math.random() * 0.35 + 0.15,
      fontSize: Math.floor(Math.random() * 4) + 10,
    }));

    // 4. Energy Pulses along lines
    const pulses = Array.from({ length: 12 }).map(() => ({
      from: Math.floor(Math.random() * nodes.length),
      to: Math.floor(Math.random() * nodes.length),
      progress: Math.random(),
      speed: Math.random() * 0.008 + 0.003,
    }));

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Deep Dark Blue Base Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#040814');
      bgGrad.addColorStop(0.5, '#070b19');
      bgGrad.addColorStop(1, '#050711');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Binary Stream Rain
      binaryStreams.forEach((stream) => {
        stream.y -= stream.speed;
        if (stream.y < -20) {
          stream.y = height + 20;
          stream.x = Math.random() * width;
        }
        ctx.fillStyle = `rgba(0, 240, 255, ${stream.opacity})`;
        ctx.font = `${stream.fontSize}px monospace`;
        ctx.fillText(stream.char, stream.x, stream.y);
      });

      // Update & Draw Constellation Nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.pulse += 0.03;
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#00f0ff';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Connect Constellation Lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Mouse interaction line
        const mdx = nodes[i].x - mouse.x;
        const mdy = nodes[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius) {
          const malpha = (1 - mdist / mouse.radius) * 0.6;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(249, 131, 46, ${malpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      // Energy Pulses along lines
      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.from = Math.floor(Math.random() * nodes.length);
          p.to = Math.floor(Math.random() * nodes.length);
        }
        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        if (n1 && n2) {
          const px = n1.x + (n2.x - n1.x) * p.progress;
          const py = n1.y + (n2.y - n1.y) * p.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#ff6b00';
          ctx.shadowColor = '#ff6b00';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw Glowing Shield Keyhole Nodes
      shieldNodes.forEach((s) => {
        const sx = s.xRatio * width;
        const sy = s.yRatio * height;

        // Outer pulsing ring
        const ringRadius = s.radius + Math.sin(time * 2) * 6;
        ctx.beginPath();
        ctx.arc(sx, sy, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 12;
        ctx.stroke();

        // Inner ring
        ctx.beginPath();
        ctx.arc(sx, sy, s.radius * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.6)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Shield Keyhole Icon
        ctx.save();
        ctx.translate(sx, sy);
        const scale = s.radius / 45;
        ctx.scale(scale, scale);

        // Shield shape
        ctx.beginPath();
        ctx.moveTo(0, -18);
        ctx.quadraticCurveTo(15, -18, 18, -10);
        ctx.quadraticCurveTo(18, 10, 0, 22);
        ctx.quadraticCurveTo(-18, 10, -18, -10);
        ctx.quadraticCurveTo(-15, -18, 0, -18);
        ctx.closePath();
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(0, 240, 255, 0.12)';
        ctx.fill();
        ctx.stroke();

        // Keyhole
        ctx.beginPath();
        ctx.arc(0, -3, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = '#00f0ff';
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(-2.5, 0);
        ctx.lineTo(2.5, 0);
        ctx.lineTo(3.5, 9);
        ctx.lineTo(-3.5, 9);
        ctx.closePath();
        ctx.fillStyle = '#00f0ff';
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Video Stream */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      >
        <source src="/videos/cybersecurity.mp4" type="video/mp4" />
        <source src="/img/Netcradus cyber security.mp4" type="video/mp4" />
        <source src="/videos/banner bg video.mp4" type="video/mp4" />
      </video>

      {/* 3D WebGL / Canvas Cyber Mesh & Shield Animation Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 opacity-80" />

      {/* Dark Vignette Overlay for High Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070b]/90 via-[#07070b]/75 to-[#07070b]/95 z-20" />
    </div>
  );
}
