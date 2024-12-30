import { Activity, Layers, MousePointer, Box } from "lucide-react";
import { ParticleSystem } from "./components/Canvas/ParticleSystem";
import { WaveAnimation } from "./components/SVG/WaveAnimation";
import { InteractiveChart } from "./components/InteractiveChart/InteractiveChart";
import { Scene } from "./components/3D/Scene";

function App() {
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section with Canvas Background */}
			<div className='relative h-screen flex items-center justify-center overflow-hidden'>
				<ParticleSystem />
				<div className='w-full relative z-10 text-center text-white flex flex-col items-center justify-center'>
					<h1 className='text-5xl font-bold mb-4'>Check me</h1>
				</div>
				<WaveAnimation />
			</div>

			<div className='max-w-6xl mx-auto px-4 py-16'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Interactive Features
				</h2>

				<div className='grid md:grid-cols-4 gap-8 mb-16'>
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<div className='flex items-center mb-4'>
							<Activity className='w-6 h-6 text-blue-500 mr-2' />
							<h3 className='text-xl font-semibold'>
								Particle System
							</h3>
						</div>
						<p className='text-gray-600'>
							Interactive particle system using HTML5 Canvas with
							smooth animations and physics.
						</p>
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<div className='flex items-center mb-4'>
							<Layers className='w-6 h-6 text-blue-500 mr-2' />
							<h3 className='text-xl font-semibold'>
								Wave Animation
							</h3>
						</div>
						<p className='text-gray-600'>
							Fluid SVG wave animation with dynamic path morphing
							and layered effects.
						</p>
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<div className='flex items-center mb-4'>
							<MousePointer className='w-6 h-6 text-blue-500 mr-2' />
							<h3 className='text-xl font-semibold'>
								Interactive Chart
							</h3>
						</div>
						<p className='text-gray-600'>
							Click to add points and hover to explore data in
							this interactive SVG chart.
						</p>
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<div className='flex items-center mb-4'>
							<Box className='w-6 h-6 text-blue-500 mr-2' />
							<h3 className='text-xl font-semibold'>3D Scene</h3>
						</div>
						<p className='text-gray-600'>
							Interactive 3D scene with Three.js featuring dynamic
							elements and controls.
						</p>
					</div>
				</div>

				{/* Interactive Demos */}
				<div className='space-y-8'>
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3 className='text-2xl font-semibold mb-4'>
							3D Interactive Scene
						</h3>
						<p className='text-gray-600 mb-4'>
							Interact with the 3D scene - drag to rotate, click
							the cube to scale:
						</p>
						<Scene />
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3 className='text-2xl font-semibold mb-4'>
							Interactive Chart Demo
						</h3>
						<p className='text-gray-600 mb-4'>
							Click anywhere on the chart to add points and hover
							to explore:
						</p>
						<InteractiveChart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
