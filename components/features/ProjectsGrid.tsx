import { PageContainer } from "@/components/primitives/PageContainer";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/types";

interface ProjectsGridProps {
	projects: Project[];
	showHeader?: boolean;
}

export const ProjectsGrid = ({
	projects,
	showHeader = true,
}: ProjectsGridProps) => (
	<PageContainer>
		{showHeader && <SectionHeader label="Portafolio" title="Proyectos" />}
		<div
			style={{
				display: "grid",
				gridTemplateColumns:
					"repeat(auto-fill, minmax(var(--grid-min-col), 1fr))",
				gap: 20,
			}}
		>
			{projects.map((p) => (
				<ProjectCard key={p.id} project={p} />
			))}
		</div>
	</PageContainer>
);
