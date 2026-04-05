"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/primitives/BrandIcons";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { TechBadge } from "@/components/primitives/TechBadge";
import { THEME } from "@/lib/theme";
import type { Project } from "@/lib/types";

export const ProjectCard = ({ project }: { project: Project }) => (
	<Card
		style={{
			border: `1px solid ${THEME.colors.border.default}`,
			borderRadius: THEME.radius.lg,
			backgroundColor: THEME.colors.surface,
			overflow: "hidden",
			transition: "all 0.3s ease",
			boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
			display: "flex",
			flexDirection: "column",
		}}
		onMouseEnter={(e) => {
			e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
			e.currentTarget.style.transform = "translateY(-2px)";
		}}
		onMouseLeave={(e) => {
			e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
			e.currentTarget.style.transform = "translateY(0)";
		}}
	>
		<CardHeader style={{ padding: "24px 24px 12px" }}>
			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "space-between",
					gap: 12,
				}}
			>
				<CardTitle
					style={{
						fontFamily: THEME.fonts.display,
						fontSize: 18,
						fontWeight: 400,
						color: THEME.colors.text.primary,
						letterSpacing: "-0.01em",
					}}
				>
					{project.title}
				</CardTitle>
				<div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: THEME.colors.text.faint }}
						>
							<GithubIcon size={16} />
						</a>
					)}
					{project.url && (
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: THEME.colors.text.faint }}
						>
							<ExternalLink size={16} />
						</a>
					)}
				</div>
			</div>
		</CardHeader>
		<CardContent style={{ padding: "0 24px 16px", flex: 1 }}>
			<p
				style={{
					fontFamily: THEME.fonts.body,
					fontSize: 14,
					lineHeight: 1.6,
					color: THEME.colors.text.muted,
					margin: 0,
				}}
			>
				{project.description}
			</p>
		</CardContent>
		<CardFooter
			style={{
				padding: "0 24px 20px",
				display: "flex",
				flexWrap: "wrap",
				gap: 6,
			}}
		>
			{project.techs.map((t) => (
				<TechBadge key={t} name={t} />
			))}
		</CardFooter>
	</Card>
);
