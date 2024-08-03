interface Tecnology {
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

const ProyectCard = ({ proyect }: { proyect: Proyect }): JSX.Element => {
	return (
		<div className="card-demo flex max-w-md">
			<div className="card">
				<div className="card__header">
					<div className="flex flex-row gap-2">
						{proyect.tecnologies.map((tecnology) => (
							<div
								style={{ backgroundColor: "var(--ifm-color-primary-darkest)" }}
								className="badge"
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
				"Edita tus guardados en el juego Euro Truck Simulator 2 con esta simple aplicación de escritorio escrita en Rust",
			image: "img/proyects/truck-tools.webp",
			github: "https://github.com/CoffeSiberian/truck-tools",
			tecnologies: [
				{
					name: "React",
					image: "img/tecnologies/react.svg",
				},
				{
					name: "TypeScript",
					image: "img/tecnologies/typescript.svg",
				},
				{
					name: "Rust",
					image: "img/tecnologies/rust.svg",
				},
			],
		},
		{
			id: 2,
			title: "Los Andes React Site",
			description:
				"Es una aplicación web creada con la finalidad de facilitar una integración con empresas virtuales en TruckersMP",
			image: "img/proyects/los-andes.webp",
			github: "https://github.com/CoffeSiberian/losandes-react-site",
			url: "https://andesvtc.com/",
			tecnologies: [
				{
					name: "React",
					image: "img/tecnologies/react.svg",
				},
				{
					name: "JavaScript",
					image: "img/tecnologies/javascript.svg",
				},
				{
					name: "NodeJS",
					image: "img/tecnologies/nodejs.svg",
				},
			],
		},
		{
			id: 3,
			title: "Support System",
			description:
				"Es un sistema de soporte integrado con canales de Discord, con funcionalidades avanzadas para atender tickets de soporte a clientes o usuarios de tu servidor",
			image: "img/proyects/support.webp",
			tecnologies: [
				{
					name: "React",
					image: "img/tecnologies/react.svg",
				},
				{
					name: "TypeScript",
					image: "img/tecnologies/typescript.svg",
				},
				{
					name: "NodeJS",
					image: "img/tecnologies/nodejs.svg",
				},
				{
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
