import React, { useEffect, useRef } from "react";
import { createParticle, Particle } from "./particles";

export const ParticleSystem: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const particles = useRef<Particle[]>([]);
	const animationFrameId = useRef<number>();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const initParticles = () => {
			particles.current = Array.from({ length: 100 }, () =>
				createParticle(canvas.width, canvas.height),
			);
		};

		const animate = () => {
			ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			particles.current.forEach((particle) => {
				particle.x += particle.vx;
				particle.y += particle.vy;

				if (particle.x < 0 || particle.x > canvas.width)
					particle.vx *= -1;
				if (particle.y < 0 || particle.y > canvas.height)
					particle.vy *= -1;

				ctx.beginPath();
				ctx.arc(
					particle.x,
					particle.y,
					particle.radius,
					0,
					Math.PI * 2,
				);
				ctx.fillStyle = particle.color;
				ctx.fill();
			});

			animationFrameId.current = requestAnimationFrame(animate);
		};

		const handleResize = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
			initParticles();
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		animate();

		return () => {
			window.removeEventListener("resize", handleResize);
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current);
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className='w-full h-full absolute top-0 left-0'
			style={{ background: "black" }}
		/>
	);
};
