import { THEME } from "@/lib/theme";

interface SectionTitleProps {
	children: React.ReactNode;
	size?: number;
}

export const SectionTitle = ({ children, size = 32 }: SectionTitleProps) => (
	<h2
		style={{
			fontFamily: THEME.fonts.display,
			fontSize: size,
			fontWeight: 400,
			color: THEME.colors.text.primary,
			letterSpacing: "-0.02em",
			margin: 0,
		}}
	>
		{children}
	</h2>
);
