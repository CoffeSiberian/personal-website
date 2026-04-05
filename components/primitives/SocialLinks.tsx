"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/primitives/BrandIcons";
import { SITE_CONFIG } from "@/lib/data";
import { THEME } from "@/lib/theme";

interface SocialLinksProps {
	size?: number;
	gap?: number;
	color?: string;
}

export const SocialLinks = ({
	size = 16,
	gap = 16,
	color,
}: SocialLinksProps) => (
	<div style={{ display: "flex", gap, alignItems: "center" }}>
		{[
			{ icon: GithubIcon, href: SITE_CONFIG.social.github },
			{ icon: LinkedinIcon, href: SITE_CONFIG.social.linkedin },
			{ icon: Mail, href: `mailto:${SITE_CONFIG.email}` },
		].map(({ icon: Icon, href }) => (
			<a
				key={href}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				style={{
					color: color || THEME.colors.text.faint,
					transition: "opacity 0.2s",
				}}
				onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
				onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
			>
				<Icon size={size} />
			</a>
		))}
	</div>
);
