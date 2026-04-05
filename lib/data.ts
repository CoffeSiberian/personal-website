import { Briefcase, Code2, User, BookOpen } from "lucide-react";
import type { SiteConfig, AboutSection, Project, BlogPost } from "./types";

// ─── Edita aquí para cambiar la información personal ──────────────────────────

export const SITE_CONFIG: SiteConfig = {
	name: "Fernando Garrido",
	fullName: "Fernando Garrido",
	title: "Desarrollador Full Stack",
	email: "siberiancoffe@outlook.cl",
	photo: "https://avatars.githubusercontent.com/u/61036343?v=4",
	cvUrl: "https://cdn.siberiancoffe.dev/cv/fernando_garrido_cv.pdf",
	motto: "Nunca es tarde para aprender.",
	social: {
		github: "https://github.com/CoffeSiberian/",
		linkedin: "https://www.linkedin.com/in/fernandogarridodev/",
	},
	bio: "Soy un apasionado desarrollador full stack con experiencia en tecnologías como JavaScript, TypeScript, Python y Rust. He llevado a cabo diversos proyectos personales, desde la creación de interfaces de usuario interactivas hasta la implementación de servicios backend escalables, donde suelo destacar mi habilidad de abstracción y entendimiento técnico de bajo nivel, entregando resultados de calidad.",
};

// ─── Edita aquí para cambiar las secciones de "Sobre Mí" ──────────────────────

export const ABOUT_SECTIONS: AboutSection[] = [
	{
		id: "experience",
		title: "Experiencia",
		icon: Briefcase,
		content: [
			"Más de 6 años de experiencia dedicados al estudio, la práctica y la aplicación de conocimientos en una amplia variedad de proyectos, tanto de código abierto como de productos privados.",
			"Mi formación es principalmente autodidacta, aprovechando recursos en línea, documentación oficial y cursos. Este enfoque surgió como complemento a mi educación universitaria.",
		],
	},
	{
		id: "work",
		title: "Trabajo",
		icon: Code2,
		content: [
			"He trabajado en proyectos reales que van desde aplicaciones de escritorio hasta sitios web y bots con integración de APIs externas, enfocándome siempre en crear soluciones prácticas y funcionales.",
		],
	},
	{
		id: "community",
		title: "Comunidad",
		icon: User,
		content: [
			"He realizado charlas sobre software en una institución de educación media, con introducciones al sector tecnológico y demostraciones prácticas de la carrera de desarrollo de software.",
		],
	},
	{
		id: "philosophy",
		title: "Filosofía",
		icon: BookOpen,
		content: [
			"Mis proyectos suelen tener un doble propósito: aprender nuevas tecnologías y mantener un alto estándar de calidad en el desarrollo. Creo firmemente en la importancia de la mantenibilidad del software, asegurando que mis soluciones sean sostenibles y escalables a lo largo del tiempo.",
		],
	},
];

// ─── Para agregar un proyecto: copia un objeto y modifica los valores ──────────

export const PROJECTS: Project[] = [
	{
		id: "truck-tools",
		title: "Truck Tools",
		description:
			"Edita tus guardados en el juego Euro Truck Simulator 2 con esta simple aplicación de escritorio escrita en Rust.",
		github: "https://github.com/CoffeSiberian/truck-tools",
		techs: ["React", "TypeScript", "Rust"],
		featured: true,
	},
	{
		id: "los-andes",
		title: "Los Andes React Site",
		description:
			"Aplicación web creada para facilitar la integración con empresas virtuales en TruckersMP.",
		github: "https://github.com/CoffeSiberian/losandes-react-site",
		url: "https://andesvtc.com/",
		techs: ["React", "JavaScript", "NodeJS"],
		featured: true,
	},
	{
		id: "support-system",
		title: "Support System",
		description:
			"Sistema de soporte integrado con canales de Discord, con funcionalidades avanzadas para atender tickets de soporte.",
		url: "https://support.siberiancoffe.dev/ticket/1267273453363396670",
		techs: ["React", "TypeScript", "NodeJS", "Python"],
		featured: false,
	},
	{
		id: "pick-up-point",
		title: "Pick Up Point",
		description:
			"Punto de venta digital para pymes chilenas con venta digital y retiros presenciales con código QR. Integración con Flow.cl.",
		github: "https://github.com/CoffeSiberian/Pick-UpPointReact/",
		url: "https://pick-up-point.vercel.app/",
		techs: ["React", "TypeScript", "NodeJS", "MariaDB"],
		featured: true,
	},
	{
		id: "spotify-dl",
		title: "Download Spotify Music",
		description:
			"Aplicación concepto para descargar música indirectamente de Spotify usando YDLP con una interfaz gráfica multiplataforma vía PySide.",
		github:
			"https://github.com/CoffeSiberian/Download-Spotify-Music-with-YouTubeDL/",
		techs: ["Python"],
		featured: false,
	},
	{
		id: "discord-embeds",
		title: "Discord Embed Builder",
		description:
			"Crea embeds para Discord con un BOT simple y una interfaz web capaz de generar códigos temporales para restaurar, editar o copiar embeds.",
		url: "https://embeds.siberiancoffe.dev/",
		techs: ["React", "TypeScript", "NodeJS", "Python"],
		featured: false,
	},
];

// ─── Para agregar un blog post: agrega un objeto con content como array de párrafos

export const BLOG_POSTS: BlogPost[] = [
	{
		slug: "about",
		title: "¿Quién soy?",
		date: "2024-12-01",
		author: "Fernando Garrido",
		readTime: "3 min",
		excerpt:
			"Soy desarrollador con experiencia en tecnologías web y en diversas áreas que he explorado de forma autodidacta.",
		tags: [],
		content: [
			"Soy Fernando Garrido, también conocido como SiberianCoffe. Soy un apasionado de las tecnologías y la programación, con más de 6 años de experiencia dedicados al estudio, la práctica y la aplicación de mis conocimientos en una amplia variedad de proyectos.",
			"Mi formación es principalmente autodidacta, aprovechando recursos en línea, como documentación oficial y cursos (la mayoría gratuitos). Este enfoque surgió como complemento a mi educación universitaria, permitiéndome reforzar y ampliar mis habilidades técnicas.",
			"He trabajado en proyectos reales que van desde aplicaciones de escritorio hasta sitios web y bots con integración de APIs externas. En ellos, he resuelto tanto problemas técnicos como necesidades de los usuarios finales, enfocándome siempre en crear soluciones prácticas y funcionales.",
			"Además, he tenido la oportunidad de realizar pequeñas charlas sobre software en una institución de educación media. Estas charlas consistieron en introducciones al sector tecnológico y demostraciones prácticas de la carrera de desarrollo de software, dirigidas tanto a nuevos estudiantes como a personas de otras áreas.",
		],
	},
	// ── Para agregar más posts, copia esta estructura: ──
	// {
	//   slug: "mi-nuevo-post",
	//   title: "Título del Post",
	//   date: "2025-06-15",
	//   author: "Fernando Garrido",
	//   readTime: "5 min",
	//   excerpt: "Un resumen corto...",
	//   tags: ["React", "Programacion"],
	//   content: ["Párrafo 1.", "Párrafo 2."],
	// },
];
