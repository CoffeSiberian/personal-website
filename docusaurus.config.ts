import { themes as prismThemes } from "prism-react-renderer";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "SiberianCoffe - Full Stack Developer",
	tagline: "Desarrollador Full Stack",
	favicon: "img/favicon.ico",

	url: "https://siberiancoffe.dev/",
	baseUrl: "/",

	organizationName: "SiberianCoffe", // Usually your GitHub org/user name.
	projectName: "personal-website", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "es",
		locales: ["es"],
	},

	plugins: [tailwindPlugin],

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl:
						"https://github.com/CoffeSiberian/personal-website/tree/main/docs/",
				},
				blog: {
					showReadingTime: true,
					editUrl:
						"https://github.com/CoffeSiberian/personal-website/tree/main/blog/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: "img/proyects/los-andes.webp",
		navbar: {
			title: "SiberianCoffe",
			logo: {
				alt: "site logo",
				src: "img/logo.svg",
			},
			items: [
				{ to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/CoffeSiberian/",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [],
			copyright: `Nunca es tarde para aprender.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
