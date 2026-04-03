"use client";

import Link from "next/link";
import { FileText, Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/primitives/BrandIcons";
import { SITE_CONFIG } from "@/lib/data";
import { THEME } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/primitives/Avatar";
import { Paragraph } from "@/components/primitives/Paragraph";
import { IconButton } from "@/components/primitives/IconButton";

export const Hero = () => {
	return (
		<section
			style={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "120px 24px 80px",
			}}
		>
			<div
				style={{
					maxWidth: 680,
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					gap: 32,
				}}
			>
				<Avatar src={SITE_CONFIG.photo} alt={SITE_CONFIG.fullName} />

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 12,
					}}
				>
					<h1
						style={{
							fontFamily: THEME.fonts.display,
							fontSize: 42,
							fontWeight: 400,
							color: THEME.colors.text.primary,
							letterSpacing: "-0.03em",
							lineHeight: 1.1,
							margin: 0,
						}}
					>
						{SITE_CONFIG.fullName}
					</h1>
					<p
						style={{
							fontFamily: THEME.fonts.body,
							fontSize: 16,
							color: THEME.colors.text.muted,
							fontWeight: 500,
							letterSpacing: "0.05em",
							textTransform: "uppercase",
							margin: 0,
						}}
					>
						{SITE_CONFIG.title}
					</p>
				</div>

				<Paragraph size={16}>{SITE_CONFIG.bio}</Paragraph>

				<div
					style={{
						display: "flex",
						gap: 12,
						flexWrap: "wrap",
						justifyContent: "center",
					}}
				>
					<a
						href={SITE_CONFIG.cvUrl}
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: "none" }}
					>
						<Button
							style={{
								backgroundColor: THEME.colors.accent,
								color: THEME.colors.bg,
								borderRadius: THEME.radius.md,
								padding: "10px 20px",
								fontSize: 13,
								fontWeight: 600,
								fontFamily: THEME.fonts.body,
								display: "flex",
								alignItems: "center",
								gap: 6,
								border: "none",
								cursor: "pointer",
							}}
						>
							<FileText size={15} /> Ver CV
						</Button>
					</a>
					<div style={{ display: "flex", gap: 8 }}>
						<IconButton icon={GithubIcon} href={SITE_CONFIG.social.github} />
						<IconButton
							icon={LinkedinIcon}
							href={SITE_CONFIG.social.linkedin}
						/>
						<IconButton icon={Mail} href={`mailto:${SITE_CONFIG.email}`} />
					</div>
				</div>

				<Link
					href="/proyectos"
					style={{
						marginTop: 24,
						opacity: 0.3,
						transition: "opacity 0.2s",
						padding: 8,
						display: "inline-flex",
					}}
					onMouseEnter={(e) =>
						((e.currentTarget as HTMLElement).style.opacity = "0.6")
					}
					onMouseLeave={(e) =>
						((e.currentTarget as HTMLElement).style.opacity = "0.3")
					}
				>
					<ChevronDown size={20} color={THEME.colors.text.muted} />
				</Link>
			</div>
		</section>
	);
};
