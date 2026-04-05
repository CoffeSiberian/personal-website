import type { Metadata } from "next";
import { BlogDetail } from "@/components/features/BlogDetail";
import { BLOG_POSTS } from "@/lib/data";

export async function generateStaticParams() {
	return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = BLOG_POSTS.find((p) => p.slug === slug);
	return {
		title: post ? `${post.title} — Fernando Garrido` : "Post no encontrado",
		description: post?.excerpt,
	};
}

export default async function BlogDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	return <BlogDetail slug={slug} />;
}
