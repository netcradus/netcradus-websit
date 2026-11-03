import React, { useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";

export default function FullPageBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const { theme } = useTheme();

  // Coordinates refs
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, px: 0, py: 0 });
  const scrollRef = useRef({ y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseRef.current.targetX = clientX;
      mouseRef.current.targetY = clientY;
    };

    const handleScroll = () => {
      scrollRef.current.y = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Dynamic grid nodes for neural network matrix
    const nodeCount = 90;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 3.5), // span entire vertical height
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "rgba(0, 184, 255, 0.35)" : "rgba(124, 58, 237, 0.35)"
    }));

    // Glow background blobs
    const blobs = [
      { x: width * 0.2, y: height * 0.3, vx: 0.2, vy: 0.15, radius: 360, color: "rgba(0, 184, 255, 0.07)" },
      { x: width * 0.7, y: height * 0.2, vx: -0.15, vy: 0.2, radius: 400, color: "rgba(124, 58, 237, 0.06)" },
      { x: width * 0.5, y: height * 0.8, vx: 0.1, vy: -0.1, radius: 420, color: "rgba(255, 107, 0, 0.05)" }
    ];

    let verticalScanY = 0;

    const draw = (timestamp) => {
      ctx.clearRect(0, 0, width, height);

      // Mouse damping coords
      mouseRef.current.px += (mouseRef.current.targetX - mouseRef.current.px) * 0.05;
      mouseRef.current.py += (mouseRef.current.targetY - mouseRef.current.py) * 0.05;

      const isDark = theme === "dark";
      const baseBg = isDark ? "#0B1736" : "#F8FAFC";
      const secondaryBg = isDark ? "#060A17" : "#EEF5FF";

      // 1. Draw smooth primary-to-secondary background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, baseBg);
      bgGradient.addColorStop(1, secondaryBg);
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw static tech background grid lines
      ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.012)" : "rgba(11, 23, 54, 0.018)";
      ctx.lineWidth = 1;
      const gridSize = 120;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      const gridScrollY = -(scrollRef.current.y * 0.1) % gridSize;
      for (let y = gridScrollY; y < height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      // 3. Draw morphing background blobs
      blobs.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < 0 || b.x > width) b.vx *= -1;
        if (b.y < 0 || b.y > height) b.vy *= -1;

        const bx = b.x + (mouseRef.current.px - width / 2) * 0.05;
        const by = b.y - scrollRef.current.y * 0.15;

        const radGradient = ctx.createRadialGradient(bx, by, 5, bx, by, b.radius);
        radGradient.addColorStop(0, b.color);
        radGradient.addColorStop(1, "transparent");

        ctx.fillStyle = radGradient;
        ctx.beginPath();
        ctx.arc(bx, by, b.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Update & draw interconnected nodes
      nodes.forEach((node) => {
        // Basic coordinates updating
        node.x += node.vx;
        node.y += node.vy;

        // Boundary checks
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height * 3.5) node.vy *= -1;

        // Apply mouse interaction force field
        const nodeScreenY = node.y - scrollRef.current.y;
        const dx = node.x - mouseRef.current.px;
        const dy = nodeScreenY - mouseRef.current.py;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 160) {
          const force = (160 - distance) / 160;
          node.x += (dx / distance) * force * 3;
          node.y += (dy / distance) * force * 3;
        }

        // Draw node
        if (nodeScreenY >= 0 && nodeScreenY <= height) {
          ctx.fillStyle = node.color;
          ctx.beginPath();
          ctx.arc(node.x, nodeScreenY, node.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 5. Draw connecting web lines between nearby nodes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodeCount; i++) {
        const n1 = nodes[i];
        const n1ScreenY = n1.y - scrollRef.current.y;

        if (n1ScreenY < -100 || n1ScreenY > height + 100) continue;

        for (let j = i + 1; j < nodeCount; j++) {
          const n2 = nodes[j];
          const n2ScreenY = n2.y - scrollRef.current.y;

          const dx = n1.x - n2.x;
          const dy = n1ScreenY - n2ScreenY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (130 - dist) / 130;
            ctx.strokeStyle = isDark
              ? `rgba(0, 184, 255, ${alpha * 0.08})`
              : `rgba(124, 58, 237, ${alpha * 0.12})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1ScreenY);
            ctx.lineTo(n2.x, n2ScreenY);
            ctx.stroke();
          }
        }
      }

      // 6. Draw vertical sweep scanning line (Cyber Command scan effect)
      verticalScanY += 2;
      if (verticalScanY > height) verticalScanY = 0;
      
      const scanGradient = ctx.createLinearGradient(0, verticalScanY - 60, 0, verticalScanY);
      scanGradient.addColorStop(0, "transparent");
      scanGradient.addColorStop(0.5, isDark ? "rgba(0, 184, 255, 0.04)" : "rgba(124, 58, 237, 0.06)");
      scanGradient.addColorStop(1, isDark ? "rgba(0, 184, 255, 0.12)" : "rgba(124, 58, 237, 0.18)");

      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, verticalScanY - 60, width, 60);

      ctx.strokeStyle = isDark ? "rgba(0, 184, 255, 0.25)" : "rgba(124, 58, 237, 0.35)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, verticalScanY);
      ctx.lineTo(width, verticalScanY);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
