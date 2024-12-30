import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, BufferGeometry, Float32BufferAttribute } from "three";
import { range } from "../../utils/math";

export const FloatingParticles = () => {
	const pointsRef = useRef<Points>(null);

	const particleCount = 1000;
	const positions = new Float32Array(particleCount * 3);

	for (let i = 0; i < particleCount; i++) {
		positions[i * 3] = range(-5, 5);
		positions[i * 3 + 1] = range(-5, 5);
		positions[i * 3 + 2] = range(-5, 5);
	}

	const geometry = new BufferGeometry();
	geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));

	useFrame((_, delta) => {
		if (pointsRef.current) {
			pointsRef.current.rotation.x += delta * 0.1;
			pointsRef.current.rotation.y += delta * 0.05;
		}
	});

	return (
		<points ref={pointsRef}>
			<bufferGeometry attach='geometry' {...geometry} />
			<pointsMaterial
				attach='material'
				size={0.05}
				sizeAttenuation
				color='#4299e1'
				transparent
				opacity={0.8}
			/>
		</points>
	);
};
