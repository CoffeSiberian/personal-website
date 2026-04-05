import { THEME } from "@/lib/theme";

interface ParagraphProps {
	children: React.ReactNode;
	size?: number;
}

export const Paragraph = ({ children, size = 15 }: ParagraphProps) => (
	<p
		style={{
			fontFamily: THEME.fonts.body,
			fontSize: size,
			lineHeight: 1.8,
			color: THEME.colors.text.secondary,
			margin: 0,
		}}
	>
		{children}
	</p>
);
