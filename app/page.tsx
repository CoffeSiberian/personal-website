import { Hero } from "@/components/features/Hero";
import { ProjectsGrid } from "@/components/features/ProjectsGrid";
import { BlogList } from "@/components/features/BlogList";
import { Divider } from "@/components/primitives/Divider";
import { PROJECTS } from "@/lib/data";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Divider />
			<ProjectsGrid projects={PROJECTS.filter((p) => p.featured)} />
			<Divider />
			<BlogList />
		</>
	);
}
