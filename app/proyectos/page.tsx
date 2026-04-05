import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/features/ProjectsGrid";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
	title: "Proyectos — Fernando Garrido",
	description: "Proyectos de desarrollo de Fernando Garrido (SiberianCoffe).",
};

export default function ProyectosPage() {
	return <ProjectsGrid projects={PROJECTS} />;
}
