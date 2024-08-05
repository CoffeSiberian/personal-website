import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomeProyects from "@site/src/components/proyects/";
import Heading from "@theme/Heading";

// icons
import { IconMail, IconFileText } from "@tabler/icons-react";

const HomePageHeader = (): JSX.Element => {
	return (
		<header
			className={
				"hero hero--primary relative overflow-hidden p-8 text-center md:p-16"
			}
		>
			<div className="flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row">
				<div className="flex flex-col gap-5">
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
					<p className="text-2xl">
						<b>Fernando Garrido</b>
					</p>
				</div>
				<div className="flex flex-col items-center gap-3">
					<Heading as="h1" className="hero__title">
						Desarrollador Full Stack
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
					<div className={"flex flex-col-reverse gap-3 md:flex-row"}>
						<Link
							className="button button--lg button--info flex items-center justify-center gap-1"
							to="mailto:siberiancoffe@outlook.cl"
						>
							Contacto
							<IconMail />
						</Link>
						<Link className="button button--lg button--success flex items-center justify-center gap-1">
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
	return (
		<Layout>
			<HomePageHeader />
			<main className="p-3">
				<h2 className="text-center text-3xl">Proyectos</h2>
				<HomeProyects />
			</main>
		</Layout>
	);
};

export default Home;
