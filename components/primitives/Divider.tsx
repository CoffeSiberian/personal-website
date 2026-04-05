import { THEME } from "@/lib/theme";

interface DividerProps {
	maxWidth?: number;
}

export const Divider = ({ maxWidth = 1100 }: DividerProps) => (
	<div
		style={{
			height: 1,
			backgroundColor: THEME.colors.border.light,
			maxWidth,
			margin: "0 auto",
		}}
	/>
);
