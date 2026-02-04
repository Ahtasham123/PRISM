import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number | null>(null);
  const speedRef = useRef(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const starCount = window.innerWidth < 768 ? 100 : 200;
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: (Math.random() - 0.5) * canvas.width,
      y: (Math.random() - 0.5) * canvas.height,
      z: Math.random() * 1000,
      size: Math.random() * 2 + 0.5,
    }));

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 8, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Move star toward viewer
        star.z -= speedRef.current * 2;

        // Reset star if it passes viewer
        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * canvas.width;
          star.y = (Math.random() - 0.5) * canvas.height;
          star.z = 1000;
        }

        // Project 3D position to 2D
        const scale = 1000 / star.z;
        const x = centerX + star.x * scale;
        const y = centerY + star.y * scale;
        const size = star.size * scale;

        // Draw star
        const opacity = Math.min(1, (1000 - star.z) / 500);
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.5, size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        // Draw streak for fast-moving stars
        if (star.z < 300) {
          const streakLength = (300 - star.z) / 10;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(
            centerX + star.x * (1000 / (star.z + streakLength)),
            centerY + star.y * (1000 / (star.z + streakLength))
          );
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
          ctx.lineWidth = size * 0.5;
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: '#050508' }}
    />
  );
}
