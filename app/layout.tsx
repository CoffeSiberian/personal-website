import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/features/Navbar";
import { Footer } from "@/components/features/Footer";
import { THEME } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
	variable: "--font-dm-serif",
	weight: ["400"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Fernando Garrido — Desarrollador Full Stack",
	description:
		"Portafolio personal de Fernando Garrido (SiberianCoffe), desarrollador full stack.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="es"
			className={`${geistSans.variable} ${geistMono.variable} ${dmSerifDisplay.variable} ${dmSans.variable} h-full antialiased`}
		>
			<body className="flex min-h-full flex-col">
				<div
					style={{
						minHeight: "100vh",
						backgroundColor: THEME.colors.bg,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Navbar />
					<main style={{ flex: 1, paddingTop: "var(--navbar-height)" }}>
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
