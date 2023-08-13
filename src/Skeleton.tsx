import React, { CSSProperties } from 'react';
import './Skeleton.css';
//TODO: complete
function Skeleton({
	count,
	height,
	width,
	display,
	className = '',
	parentStyle,
	style,
}: {
	count: number;
	height: string;
	width?: string;
	display?: string;
	className?: string;
	parentStyle?: CSSProperties;
	style?: CSSProperties;
}) {
	return (
		<div
			style={{
				...parentStyle,
			}}
		>
			{Array(count)
				.fill(1)
				.map((_, i) => {
					return (
						<span
							key={i}
							className={className ?? undefined}
							style={{
								animation: 'shine 3s infinite ease-in-out',
								borderRadius: '1vh',
								backgroundRepeat: 'no-repeat',
								margin: '1vh',
								marginBottom: '3vh',
								height,
								width,
								display: display ?? 'block',
								backgroundImage: `linear-gradient(100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 80%), linear-gradient(#f1f1f1 ${height}, transparent 0)`,
								backgroundSize: `3vw ${height}, ${width ?? '100%'} ${height}`,
								backgroundPosition: `0 0,0 0,${width ?? '100%'} 0`,
								...style,
							}}
						></span>
					);
				})}
		</div>
	);
}

export default Skeleton;
