import { THEME } from "@/lib/theme";
import { Paragraph } from "@/components/primitives/Paragraph";
import type { AboutSection } from "@/lib/types";

export const AboutBlock = ({ section }: { section: AboutSection }) => {
	const Icon = section.icon;
	return (
		<div style={{ marginBottom: 36 }}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 10,
					marginBottom: 14,
				}}
			>
				<div
					style={{
						width: 32,
						height: 32,
						borderRadius: THEME.radius.sm,
						backgroundColor: "rgba(168,162,158,0.08)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Icon size={16} color={THEME.colors.text.muted} />
				</div>
				<h3
					style={{
						fontFamily: THEME.fonts.display,
						fontSize: 18,
						fontWeight: 400,
						color: THEME.colors.text.primary,
						margin: 0,
					}}
				>
					{section.title}
				</h3>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 12,
					paddingLeft: 42,
				}}
			>
				{section.content.map((text, i) => (
					<Paragraph key={i} size={14}>
						{text}
					</Paragraph>
				))}
			</div>
		</div>
	);
};
