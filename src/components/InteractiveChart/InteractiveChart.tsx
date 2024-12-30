import React, { useState } from "react";

interface DataPoint {
	x: number;
	y: number;
}

export const InteractiveChart: React.FC = () => {
	const [points, setPoints] = useState<DataPoint[]>([]);
	const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

	const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
		const svg = e.currentTarget;
		const rect = svg.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		if (points.length > 0) {
			const closest = points.reduce(
				(prev, curr, idx) => {
					const prevDist = Math.hypot(prev.x - x, prev.y - y);
					const currDist = Math.hypot(curr.x - x, curr.y - y);
					return currDist < prevDist
						? { point: curr, index: idx }
						: prev;
				},
				{ point: points[0], index: 0 },
			);

			if (Math.hypot(closest.point.x - x, closest.point.y - y) < 20) {
				setHoveredPoint(closest.index);
			} else {
				setHoveredPoint(null);
			}
		}
	};

	const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
		const svg = e.currentTarget;
		const rect = svg.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		setPoints([...points, { x, y }]);
	};

	return (
		<svg
			className='w-full h-64 bg-gray-100 rounded-lg'
			onMouseMove={handleMouseMove}
			onClick={handleClick}
		>
			{points.map((point, i) => (
				<React.Fragment key={i}>
					{i > 0 && (
						<line
							x1={points[i - 1].x}
							y1={points[i - 1].y}
							x2={point.x}
							y2={point.y}
							stroke='#4299e1'
							strokeWidth='2'
						/>
					)}
					<circle
						cx={point.x}
						cy={point.y}
						r={hoveredPoint === i ? 6 : 4}
						fill={hoveredPoint === i ? "#2b6cb0" : "#4299e1"}
						className='transition-all duration-200'
					/>
				</React.Fragment>
			))}
			{hoveredPoint !== null && points[hoveredPoint] && (
				<g>
					<rect
						x={points[hoveredPoint].x + 10}
						y={points[hoveredPoint].y - 30}
						width='100'
						height='25'
						rx='4'
						fill='white'
						stroke='#4299e1'
					/>
					<text
						x={points[hoveredPoint].x + 15}
						y={points[hoveredPoint].y - 12}
						fill='#2d3748'
						fontSize='12'
					>
						Point {hoveredPoint + 1}
					</text>
				</g>
			)}
		</svg>
	);
};
