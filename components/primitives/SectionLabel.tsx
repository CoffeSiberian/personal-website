import { THEME } from "@/lib/theme";

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
	<p
		style={{
			fontFamily: THEME.fonts.body,
			fontSize: 12,
			fontWeight: 600,
			textTransform: "uppercase",
			letterSpacing: "0.1em",
			color: THEME.colors.text.faint,
			margin: 0,
		}}
	>
		{children}
	</p>
);
