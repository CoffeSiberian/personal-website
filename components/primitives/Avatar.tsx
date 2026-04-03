import { THEME } from "@/lib/theme";

interface AvatarProps {
	src: string;
	alt: string;
	size?: number;
}

export const Avatar = ({ src, alt, size = 140 }: AvatarProps) => (
	<div style={{ position: "relative" }}>
		<div
			style={{
				width: size,
				height: size,
				borderRadius: "50%",
				overflow: "hidden",
				border: `3px solid ${THEME.colors.border.default}`,
			}}
		>
			<img
				src={src}
				alt={alt}
				style={{ width: "100%", height: "100%", objectFit: "cover" }}
			/>
		</div>
		<div
			style={{
				position: "absolute",
				bottom: size * 0.03,
				right: size * 0.03,
				width: size * 0.11,
				height: size * 0.11,
				borderRadius: "50%",
				backgroundColor: THEME.colors.green,
				border: `3px solid ${THEME.colors.bg}`,
			}}
		/>
	</div>
);
