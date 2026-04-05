"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { THEME } from "@/lib/theme";

const NAV_ITEMS = [
	{ href: "/", label: "Inicio" },
	{ href: "/proyectos", label: "Proyectos" },
	{ href: "/blog", label: "Blog" },
	{ href: "/sobre-mi", label: "Sobre Mí" },
];

export const Navbar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	const isActive = (href: string) =>
		href === "/" ? pathname === "/" : pathname.startsWith(href);

	const linkStyle = (href: string): React.CSSProperties => ({
		background: isActive(href) ? "rgba(120,113,108,0.1)" : "transparent",
		border: "none",
		borderRadius: 8,
		padding: "10px 14px",
		fontSize: 14,
		fontWeight: 500,
		color: isActive(href) ? THEME.colors.accent : THEME.colors.text.faint,
		fontFamily: THEME.fonts.body,
		transition: "all 0.2s",
		textDecoration: "none",
		display: "block",
	});

	return (
		<>
			<nav
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 50,
					backdropFilter: "blur(16px)",
					WebkitBackdropFilter: "blur(16px)",
					backgroundColor: "rgba(250, 250, 249, 0.85)",
					borderBottom: `1px solid ${THEME.colors.border.light}`,
				}}
			>
				<div
					style={{
						maxWidth: 1100,
						margin: "0 auto",
						padding: "0 24px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						height: 60,
					}}
				>
					<Link
						href="/"
						style={{
							fontFamily: THEME.fonts.display,
							fontSize: 20,
							fontWeight: 400,
							color: THEME.colors.text.muted,
							letterSpacing: "-0.02em",
							textDecoration: "none",
						}}
					>
						{SITE_CONFIG.name}
					</Link>

					<div className="nav-links-desktop">
						{NAV_ITEMS.map(({ href, label }) => (
							<Link key={href} href={href} style={linkStyle(href)}>
								{label}
							</Link>
						))}
					</div>

					<button
						className="nav-hamburger"
						onClick={() => setIsOpen((o) => !o)}
						aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
						aria-expanded={isOpen}
						style={{ color: THEME.colors.text.muted }}
					>
						{isOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</nav>

			{isOpen && (
				<>
					<div
						className="nav-mobile-backdrop"
						onClick={() => setIsOpen(false)}
					/>
					<div className="nav-mobile-menu">
						{NAV_ITEMS.map(({ href, label }) => (
							<Link key={href} href={href} style={linkStyle(href)}>
								{label}
							</Link>
						))}
					</div>
				</>
			)}
		</>
	);
};
