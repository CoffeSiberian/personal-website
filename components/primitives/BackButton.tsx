"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { THEME } from "@/lib/theme";

export const BackButton = () => {
	const router = useRouter();
	return (
		<button
			onClick={() => router.back()}
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 6,
				background: "none",
				border: "none",
				cursor: "pointer",
				fontFamily: THEME.fonts.body,
				fontSize: 13,
				color: THEME.colors.text.faint,
				padding: 0,
				marginBottom: 32,
				transition: "color 0.2s",
			}}
			onMouseEnter={(e) =>
				(e.currentTarget.style.color = THEME.colors.text.secondary)
			}
			onMouseLeave={(e) =>
				(e.currentTarget.style.color = THEME.colors.text.faint)
			}
		>
			<ArrowLeft size={14} /> Volver
		</button>
	);
};
