"use client";

interface HoverFadeProps {
	children: React.ReactNode;
	onClick?: () => void;
	style?: React.CSSProperties;
}

export const HoverFade = ({
	children,
	onClick,
	style: extra = {},
}: HoverFadeProps) => (
	<div
		onClick={onClick}
		style={{
			transition: "opacity 0.2s",
			cursor: onClick ? "pointer" : "default",
			...extra,
		}}
		onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
		onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
	>
		{children}
	</div>
);
