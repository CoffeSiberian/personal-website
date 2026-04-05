import { THEME } from "@/lib/theme";

export const TagBadge = ({ children }: { children: React.ReactNode }) => (
	<span
		style={{
			fontSize: 11,
			fontWeight: 500,
			fontFamily: THEME.fonts.body,
			color: THEME.colors.text.faint,
			padding: "2px 8px",
			borderRadius: 4,
			backgroundColor: "rgba(168,162,158,0.1)",
		}}
	>
		{children}
	</span>
);
