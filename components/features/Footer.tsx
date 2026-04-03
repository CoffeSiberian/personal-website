import { SITE_CONFIG } from "@/lib/data";
import { THEME } from "@/lib/theme";
import { SocialLinks } from "@/components/primitives/SocialLinks";

export const Footer = () => (
	<footer
		style={{
			padding: "40px 24px",
			borderTop: `1px solid ${THEME.colors.border.light}`,
			maxWidth: 1100,
			margin: "0 auto",
		}}
	>
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				flexWrap: "wrap",
				gap: 16,
			}}
		>
			<span
				style={{
					fontFamily: THEME.fonts.body,
					fontSize: 13,
					color: THEME.colors.text.faint,
				}}
			>
				© {new Date().getFullYear()} {SITE_CONFIG.fullName}
			</span>
			<SocialLinks />
		</div>
	</footer>
);
