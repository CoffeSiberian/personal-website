import { Calendar, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { THEME } from "@/lib/theme";
import { PageContainer } from "@/components/primitives/PageContainer";
import { BackButton } from "@/components/primitives/BackButton";
import { TagBadge } from "@/components/primitives/TagBadge";
import { Paragraph } from "@/components/primitives/Paragraph";

const PostMeta = ({
	icon: Icon,
	children,
}: {
	icon: LucideIcon;
	children: React.ReactNode;
}) => (
	<span
		style={{
			display: "flex",
			alignItems: "center",
			gap: 5,
			fontFamily: THEME.fonts.body,
			fontSize: 13,
			color: THEME.colors.text.faint,
		}}
	>
		<Icon size={13} />
		{children}
	</span>
);

export const BlogDetail = ({ slug }: { slug: string | undefined }) => {
	const post = BLOG_POSTS.find((p) => p.slug === slug);
	if (!post) {
		return (
			<PageContainer maxWidth={720}>
				<BackButton />
				<p
					style={{
						fontFamily: THEME.fonts.body,
						color: THEME.colors.text.muted,
					}}
				>
					Post no encontrado.
				</p>
			</PageContainer>
		);
	}
	return (
		<PageContainer maxWidth={720}>
			<BackButton />
			<article>
				<header style={{ marginBottom: 40 }}>
					<h1
						style={{
							fontFamily: THEME.fonts.display,
							fontSize: 36,
							fontWeight: 400,
							color: THEME.colors.text.primary,
							letterSpacing: "-0.02em",
							lineHeight: 1.2,
							margin: "0 0 16px",
						}}
					>
						{post.title}
					</h1>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 16,
							flexWrap: "wrap",
						}}
					>
						<PostMeta icon={Calendar}>
							{new Date(post.date).toLocaleDateString("es-CL", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</PostMeta>
						{post.readTime && <PostMeta icon={Clock}>{post.readTime}</PostMeta>}
					</div>
					{post.tags.length > 0 && (
						<div style={{ display: "flex", gap: 6, marginTop: 14 }}>
							{post.tags.map((tag) => (
								<TagBadge key={tag}>{tag}</TagBadge>
							))}
						</div>
					)}
				</header>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 20,
					}}
				>
					{post.content.map((p, i) => (
						<Paragraph key={i} size={15}>
							{p}
						</Paragraph>
					))}
				</div>
			</article>
		</PageContainer>
	);
};
