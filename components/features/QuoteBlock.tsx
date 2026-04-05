import { Quote } from "lucide-react";
import { THEME } from "@/lib/theme";

export const QuoteBlock = ({ text }: { text: string }) => (
	<div
		style={{
			marginTop: 32,
			padding: 28,
			borderRadius: THEME.radius.lg,
			backgroundColor: "rgba(168,162,158,0.05)",
			border: `1px solid ${THEME.colors.border.default}`,
			display: "flex",
			alignItems: "flex-start",
			gap: 14,
		}}
	>
		<Quote
			size={20}
			color={THEME.colors.text.faint}
			style={{ flexShrink: 0, marginTop: 2 }}
		/>
		<p
			style={{
				fontFamily: THEME.fonts.display,
				fontSize: 16,
				color: THEME.colors.accent,
				fontStyle: "italic",
				margin: 0,
				lineHeight: 1.6,
			}}
		>
			{text}
		</p>
	</div>
);
