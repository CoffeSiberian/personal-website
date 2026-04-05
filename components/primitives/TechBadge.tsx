import { THEME } from "@/lib/theme";

export const TechBadge = ({ name }: { name: string }) => {
	const s = THEME.techColors[name] || {
		bg: "rgba(168,162,158,0.08)",
		text: "#78716c",
		border: "rgba(168,162,158,0.2)",
	};
	return (
		<span
			style={{
				fontSize: 11,
				fontWeight: 600,
				fontFamily: THEME.fonts.body,
				padding: "3px 10px",
				borderRadius: THEME.radius.sm,
				backgroundColor: s.bg,
				color: s.text,
				border: `1px solid ${s.border}`,
				letterSpacing: "0.02em",
				whiteSpace: "nowrap",
			}}
		>
			{name}
		</span>
	);
};
