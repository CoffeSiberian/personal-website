"use client";

import { useMemo } from "react";
import { BLOG_POSTS } from "@/lib/data";
import { THEME } from "@/lib/theme";
import { PageContainer } from "@/components/primitives/PageContainer";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { BlogPostItem } from "./BlogPostItem";

interface BlogListProps {
	showHeader?: boolean;
}

export const BlogList = ({ showHeader = true }: BlogListProps) => {
	const sorted = useMemo(
		() =>
			[...BLOG_POSTS].sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
			),
		[]
	);
	return (
		<PageContainer maxWidth={800}>
			{showHeader && <SectionHeader label="Escritos" title="Blog" />}
			{sorted.length > 0 ? (
				<div style={{ display: "flex", flexDirection: "column" }}>
					{sorted.map((post, i) => (
						<BlogPostItem
							key={post.slug}
							post={post}
							isLast={i === sorted.length - 1}
						/>
					))}
				</div>
			) : (
				<p
					style={{
						fontFamily: THEME.fonts.body,
						fontSize: 14,
						color: THEME.colors.text.faint,
						textAlign: "center",
						padding: "40px 0",
					}}
				>
					Próximamente...
				</p>
			)}
		</PageContainer>
	);
};
