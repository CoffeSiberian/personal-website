export interface SiteConfig {
	name: string;
	fullName: string;
	title: string;
	email: string;
	photo: string;
	cvUrl: string;
	motto: string;
	social: {
		github: string;
		linkedin: string;
	};
	bio: string;
}

export interface AboutSection {
	id: string;
	title: string;
	icon: React.ComponentType<{ size?: number; color?: string }>;
	content: string[];
}

export interface Project {
	id: string;
	title: string;
	description: string;
	github?: string;
	url?: string;
	techs: string[];
	featured: boolean;
}

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	author: string;
	readTime?: string;
	excerpt: string;
	tags: string[];
	content: string[];
}
