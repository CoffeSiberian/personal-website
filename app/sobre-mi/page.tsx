import type { Metadata } from "next";
import { AboutPage } from "@/components/features/AboutPage";

export const metadata: Metadata = {
	title: "Sobre Mí — Fernando Garrido",
	description: "Conoce más sobre Fernando Garrido, desarrollador full stack.",
};

export default function SobreMiPage() {
	return <AboutPage />;
}
