interface Tecnology {
	id: number;
	name: string;
	image: string;
}

interface Proyect {
	id: number;
	title: string;
	description: string;
	image: string;
	url?: string;
	github?: string;
	tecnologies: Tecnology[];
}

// icons
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const ProyectCard = ({ proyect }: { proyect: Proyect }): JSX.Element => {
	return (
		<div className="flex max-w-md">
			<div
				style={{ backgroundColor: "var(--ifm-color-bg-cards)" }}
				className="card drop-shadow-xl"
			>
				<div className="card__header">
					<div className="flex flex-row gap-2">
						{proyect.tecnologies.map((tecnology) => (
							<div
								style={{ backgroundColor: "var(--ifm-color-primary-darkest)" }}
								className="badge"
								key={tecnology.id}
							>
								<div className="flex items-center gap-1">
									<span>{tecnology.name}</span>
									<img
										className="w-full max-w-5 rounded-sm"
										src={tecnology.image}
										alt={tecnology.name}
										title={tecnology.name}
										key={tecnology.name}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="card__body h-full">
					<h4>{proyect.title}</h4>
					<small>{proyect.description}</small>
				</div>
				<div className="card__image">
					<img src={proyect.image} alt="proyect image" />
				</div>
				<div className="button-group button-group--block">
					{proyect.github && (
						<a
							href={proyect.github}
							target="_blank"
							className="button button--info button--block flex justify-center rounded-none align-middle"
						>
							GitHub <IconBrandGithub />
						</a>
					)}
					{proyect.url && (
						<a
							href={proyect.url}
							target="_blank"
							className="button button--primary button--block flex justify-center rounded-none align-middle"
						>
							Visitar web <IconExternalLink />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

const HomeProyects = () => {
	const proyects: Proyect[] = [
		{
			id: 1,
			title: "Truck Tools",
			description:
				"Edita tus guardados en el juego Euro Truck Simulator 2 con esta simple aplicación de escritorio escrita en Rust.",
			image: "img/proyects/truck-tools.webp",
			github: "https://github.com/CoffeSiberian/truck-tools",
			tecnologies: [
				{
					id: 1,
					name: "React",
					image: "img/tecnologies/react.svg",
				},
				{
					id: 2,
					name: "TypeScript",
					image: "img/tecnologies/typescript.svg",
				},
				{
					id: 3,
					name: "Rust",
					image: "img/tecnologies/rust.svg",
				},
			],
		},
		{
			id: 2,
			title: "Los Andes React Site",
			description:
				"Es una aplicación web creada con la finalidad de facilitar una integración con empresas virtuales en TruckersMP.",
			image: "img/proyects/los-andes.webp",
			github: "https://github.com/CoffeSiberian/losandes-react-site",
			url: "https://andesvtc.com/",
			tecnologies: [
				{
					id: 1,
					name: "React",
					image: "img/tecnologies/react.svg",
				},
				{
					id: 2,
					name: "JavaScript",
					image: "img/tecnologies/javascript.svg",
				},
				{
					id: 3,
					name: "NodeJS",
					image: "img/tecnologies/nodejs.svg",
				},
			],
		},
		{
			id: 3,
			title: "Support System",
			description:
				"Es un sistema de soporte integrado con canales de Discord, con funcionalidades avanzadas para atender tickets de soporte a clientes o usuarios de tu servidor.",
			image: "img/proyects/support.webp",
			url: "https://support.siberiancoffe.dev/ticket/1267273453363396670",
			tecnologies: [
				{
					id: 1,
					name: "React",
					image: "img/tecnologies/react.svg",
				},
				{
					id: 2,
					name: "TypeScript",
					image: "img/tecnologies/typescript.svg",
				},
				{
					id: 3,
					name: "NodeJS",
					image: "img/tecnologies/nodejs.svg",
				},
				{
					id: 4,
					name: "Python",
					image: "img/tecnologies/python.svg",
				},
			],
		},
		{
			id: 4,
			title: "Pick Up PointReact",
			description:
				"Punto de venta digital para pequeñas y medianas pymes chilenas con capacidad de venta digital y retiros presenciales con un código QR generado luego de una venta. Con integración de ventas digitales utilizando Flow.cl.",
			image: "img/proyects/Pick-UpPoint.webp",
			github: "https://github.com/CoffeSiberian/Pick-UpPointReact/",
			url: "https://pick-up-point.vercel.app/",
			tecnologies: [
				{
					id: 1,
					name: "React",
					image: "img/tecnologies/react.svg",
				},
				{
					id: 2,
					name: "TypeScript",
					image: "img/tecnologies/typescript.svg",
				},
				{
					id: 3,
					name: "NodeJS",
					image: "img/tecnologies/nodejs.svg",
				},
				{
					id: 4,
					name: "MariaDB",
					image: "img/tecnologies/mariadb.svg",
				},
			],
		},
		{
			id: 5,
			title: "Download Spotify Music with YouTubeDL",
			description:
				"Aplicación concepto creada con el fin de aprender. Con la cual se puede descargar música indirectamente de Spotify haciendo uso de una librería llamada YDLP junto con una simple y fácil interfaz gráfica. Capaz de funcionar en distintos tipos de sistemas operativos gracias a PySide.",
			image: "img/proyects/Download-Spotify-Music.webp",
			github:
				"https://github.com/CoffeSiberian/Download-Spotify-Music-with-YouTubeDL/",
			tecnologies: [
				{
					id: 1,
					name: "Python",
					image: "img/tecnologies/python.svg",
				},
			],
		},
		{
			id: 6,
			title: "Discord Embed Builder",
			description:
				"Crea embeds para Discord utilizando un usuario BOT muy simple mas la interfaz web capaz de generar códigos temporales que pueden ser utilizados para restaurar, editar o copiar distintos embeds a los cuales se tengan acceso durante un tiempo determinado por el backend.",
			image: "img/proyects/discord-embeds.webp",
			url: "https://embeds.siberiancoffe.dev/",
			tecnologies: [
				{
					id: 1,
					name: "React",
					image: "img/tecnologies/react.svg",
				},
				{
					id: 2,
					name: "TypeScript",
					image: "img/tecnologies/typescript.svg",
				},
				{
					id: 3,
					name: "NodeJS",
					image: "img/tecnologies/nodejs.svg",
				},
				{
					id: 4,
					name: "Python",
					image: "img/tecnologies/python.svg",
				},
			],
		},
	];

	return (
		<div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
			{proyects.map((proyect) => (
				<ProyectCard proyect={proyect} key={proyect.id} />
			))}
		</div>
	);
};

export default HomeProyects;
