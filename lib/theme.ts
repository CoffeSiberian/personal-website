export const THEME = {
	colors: {
		bg: "#fafaf9",
		surface: "#ffffff",
		text: {
			primary: "#1c1917",
			secondary: "#57534e",
			muted: "#78716c",
			faint: "#a8a29e",
		},
		border: {
			default: "rgba(168,162,158,0.15)",
			light: "rgba(168,162,158,0.08)",
		},
		accent: "#44403c",
		green: "#22c55e",
	},
	fonts: {
		display: "var(--font-dm-serif), Georgia, serif",
		body: "var(--font-dm-sans), system-ui, sans-serif",
	},
	radius: { sm: 6, md: 10, lg: 14, full: 9999 },
	techColors: {
		React: {
			bg: "rgba(14,165,233,0.08)",
			text: "#0284c7",
			border: "rgba(14,165,233,0.2)",
		},
		TypeScript: {
			bg: "rgba(59,130,246,0.08)",
			text: "#2563eb",
			border: "rgba(59,130,246,0.2)",
		},
		JavaScript: {
			bg: "rgba(234,179,8,0.08)",
			text: "#a16207",
			border: "rgba(234,179,8,0.2)",
		},
		Rust: {
			bg: "rgba(249,115,22,0.08)",
			text: "#c2410c",
			border: "rgba(249,115,22,0.2)",
		},
		Python: {
			bg: "rgba(16,185,129,0.08)",
			text: "#047857",
			border: "rgba(16,185,129,0.2)",
		},
		NodeJS: {
			bg: "rgba(34,197,94,0.08)",
			text: "#15803d",
			border: "rgba(34,197,94,0.2)",
		},
		MariaDB: {
			bg: "rgba(139,92,246,0.08)",
			text: "#7c3aed",
			border: "rgba(139,92,246,0.2)",
		},
	} as Record<string, { bg: string; text: string; border: string }>,
};
