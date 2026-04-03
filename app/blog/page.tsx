import type { Metadata } from "next";
import { BlogList } from "@/components/features/BlogList";

export const metadata: Metadata = {
	title: "Blog — Fernando Garrido",
	description: "Artículos y reflexiones de Fernando Garrido.",
};

export default function BlogPage() {
	return <BlogList />;
}
