import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { InteractiveCube } from "./InteractiveCube";
import { FloatingParticles } from "./FloatingParticles";

export const Scene = () => {
	return (
		<div className='h-[400px] w-full bg-gray-900 rounded-lg overflow-hidden'>
			<Canvas camera={{ position: [0, 0, 5] }}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<InteractiveCube />
				<FloatingParticles />
				<OrbitControls enableZoom={false} />
			</Canvas>
		</div>
	);
};
