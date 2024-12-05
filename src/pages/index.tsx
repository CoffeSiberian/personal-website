import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomeProyects from "@site/src/components/proyects/";
import Heading from "@theme/Heading";

// icons
import { IoMail } from "react-icons/io5";
import {
	FaLinkedin,
	FaGithub,
	FaCircleInfo,
	FaRegNewspaper,
} from "react-icons/fa6";

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
						target="_blank"
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
					<div className="flex justify-center gap-3">
						<Link
							className="transition delay-0 duration-200 hover:opacity-55"
							style={{
								color: "inherit",
							}}
							to="https://www.linkedin.com/in/fernandogarridodev/"
						>
							<FaLinkedin size={45} />
						</Link>
						<Link
							className="transition delay-0 duration-200 hover:opacity-55"
							style={{
								color: "inherit",
							}}
							to="https://github.com/CoffeSiberian/"
						>
							<FaGithub size={45} />
						</Link>
					</div>
					<div>
						<Link
							className="flex items-center justify-center gap-3 transition delay-0 duration-200 hover:opacity-55"
							style={{
								color: "inherit",
							}}
							to="mailto:siberiancoffe@outlook.cl"
						>
							<IoMail size={45} />
							<div className="text-lg font-semibold">
								siberiancoffe@outlook.cl
							</div>
						</Link>
					</div>
				</div>
				<div className="flex flex-col items-center gap-3">
					<Heading as="h1" className="hero__title">
						Desarrollador Full Stack
					</Heading>
					<p className="hero__subtitle max-w-3xl font-semibold">
						Soy un apasionado desarrollador full stack con experiencia en
						tecnologías como <b>JavaScript, TypeScript, Python y Rust</b>. He
						llevado a cabo diversos proyectos personales, desde la creación de
						interfaces de usuario interactivas hasta la implementación de
						servicios backend escalables, donde suelo destacar mi habilidad de
						abstracción y entendimiento técnico de bajo nivel, que es donde más
						especialidad tengo, entregando resultados de <b>calidad</b>.
					</p>
					<div className={"flex flex-col-reverse gap-3 md:flex-row"}>
						<Link
							className="button button--lg button--success flex items-center justify-center gap-1"
							to="https://cdn.siberiancoffe.dev/cv/fernando_garrido_cv.pdf"
						>
							Ver CV
							<FaRegNewspaper />
						</Link>
						<Link
							className="button button--lg button--warning flex items-center justify-center gap-1"
							to="/blog/about"
						>
							Sobre Mi
							<FaCircleInfo />
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
