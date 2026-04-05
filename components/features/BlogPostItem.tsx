"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HoverFade } from "@/components/primitives/HoverFade";
import { TagBadge } from "@/components/primitives/TagBadge";
import { THEME } from "@/lib/theme";
import type { BlogPost } from "@/lib/types";

interface BlogPostItemProps {
	post: BlogPost;
	isLast: boolean;
}

export const BlogPostItem = ({ post, isLast }: BlogPostItemProps) => {
	return (
		<div>
			<Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
				<HoverFade style={{ padding: "24px 0" }} className="post-item-row">
					<div style={{ flex: 1 }}>
						<h3
							style={{
								fontFamily: THEME.fonts.display,
								fontSize: 20,
								fontWeight: 400,
								color: THEME.colors.text.primary,
								margin: "0 0 6px",
							}}
						>
							{post.title}
						</h3>
						<p
							style={{
								fontFamily: THEME.fonts.body,
								fontSize: 14,
								color: THEME.colors.text.muted,
								lineHeight: 1.5,
								margin: 0,
							}}
						>
							{post.excerpt}
						</p>
						{post.tags.length > 0 && (
							<div style={{ display: "flex", gap: 6, marginTop: 10 }}>
								{post.tags.map((tag) => (
									<TagBadge key={tag}>{tag}</TagBadge>
								))}
							</div>
						)}
					</div>
					<div className="post-item-meta">
						<span
							style={{
								fontFamily: THEME.fonts.body,
								fontSize: 13,
								color: THEME.colors.text.faint,
								fontVariantNumeric: "tabular-nums",
							}}
						>
							{new Date(post.date).toLocaleDateString("es-CL", {
								year: "numeric",
								month: "short",
							})}
						</span>
						<ArrowRight size={14} color={THEME.colors.text.faint} />
					</div>
				</HoverFade>
			</Link>
			{!isLast && (
				<div
					style={{
						height: 1,
						backgroundColor: THEME.colors.border.light,
					}}
				/>
			)}
		</div>
	);
};
