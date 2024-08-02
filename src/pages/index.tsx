import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

// icons
import { IconMail, IconFileText } from "@tabler/icons-react";

const HomePageHeader = (): JSX.Element => {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row">
				<a
					className="max-w-xs rounded-full"
					href="https://github.com/CoffeSiberian"
				>
					<img
						className="rounded-full"
						alt="SiberianCoffe Profile"
						src="https://avatars.githubusercontent.com/u/61036343?v=4"
					/>
				</a>
				<div className="flex flex-col items-center gap-3">
					<Heading as="h1" className="hero__title">
						{siteConfig.title}
					</Heading>
					<p className="hero__subtitle max-w-3xl">
						Soy un apasionado desarrollador full stack con experiencia en
						tecnologías como JavaScript, TypeScript, Python y Rust. He llevado a
						cabo diversos proyectos personales, desde la creación de interfaces
						de usuario interactivas hasta la implementación de servicios backend
						escalables, donde suelo destacar mi habilidad de abstracción y
						entendimiento técnico de bajo nivel, que es donde más especialidad
						tengo, entregando resultados de calidad.
					</p>
					<div className={clsx(styles.buttons, "gap-3")}>
						<Link
							className="button button--lg button--info flex items-center gap-1"
							to="mailto:siberiancoffe@outlook.cl"
						>
							Contacto
							<IconMail />
						</Link>
						<Link className="button button--lg button--success flex items-center gap-1">
							Descargar CV
							<IconFileText />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

const Home = (): JSX.Element => {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout title={siteConfig.title}>
			<HomePageHeader />
			<main></main>
		</Layout>
	);
};

export default Home;
