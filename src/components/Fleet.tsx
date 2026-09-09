import { Fragment } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { CallIcon } from 'hugeicons-react';

const WHATSAPP_URL = 'https://wa.me/50489611945';

const FLEET = [
	{
		category: 'Sedanes',
		price: '$44.99',
		model: 'Toyota Corolla o similar',
		image: '/corolla.webp',
		alt: 'Sedán, Toyota Corolla',
		waText: 'Hola GoAutos, quiero reservar categoría Sedanes',
		featured: true,
	},
	{
		category: 'Económicos',
		price: '$34.99',
		model: 'Hyundai i10 o similar',
		image: '/i10.webp',
		alt: 'Auto económico, Hyundai i10',
		waText: 'Hola GoAutos, quiero reservar categoría Económicos',
	},
	{
		category: 'Ejecutivas',
		price: '$64.99',
		model: 'Honda CR-V o similar',
		image: '/crv.png',
		alt: 'Auto ejecutivo, Honda CR-V',
		waText: 'Hola GoAutos, quiero reservar categoría Ejecutivas',
	},
	{
		category: 'Todo Terreno (4x4)',
		price: '$110.00',
		model: 'Toyota Prado o similar',
		image: '/prado.webp',
		alt: 'Todo terreno 4x4, Toyota Prado',
		waText: 'Hola GoAutos, quiero reservar categoría Todo Terreno (4x4)',
	},
	{
		category: 'Pick-ups',
		price: '$74.99',
		model: 'Toyota Hilux o similar',
		image: '/hilux.png',
		alt: 'Pick-up, Toyota Hilux',
		waText: 'Hola GoAutos, quiero reservar categoría Pick-ups',
	},
];

const container = {
	show: {
		transition: { staggerChildren: 0.05 },
	},
};

const card = {
	hidden: { opacity: 0, y: 22 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
	},
};

export default function Fleet() {
	return (
		<MotionConfig reducedMotion="user">
			<section id="flota" className="w-full bg-background py-16 md:py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mx-auto mb-10 max-w-2xl text-center">
						<p className="mb-1 text-body-sm font-semibold tracking-wide text-secondary uppercase">
							Disponibilidad Inmediata
						</p>
						<h2 className="text-headline-xl-mobile text-balance font-bold tracking-tight text-on-surface md:text-headline-xl">
							Flota de Renta en La Ceiba
						</h2>
						<p className="mt-2 text-body-md text-on-surface-variant">
							Unidades limpias, acondicionadas y con entrega directa en el aeropuerto o muelle.
						</p>
					</div>

					<motion.div
						variants={container}
						initial="hidden"
						animate="show"
						className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
					>
						{FLEET.map((car) => (
							<motion.article
								key={car.category}
								variants={card}
								className={
									car.featured
										? 'col-span-1 flex flex-col rounded-lg border border-secondary/40 bg-surface-container-low p-6 shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-md sm:col-span-2 lg:flex-row lg:items-center'
										: 'flex min-h-[360px] flex-col items-center justify-between rounded-lg border border-surface-container bg-surface-container-lowest p-6 text-center shadow-sm transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-surface-container-high hover:shadow-md'
								}
							>
								{car.featured ? (
									<Fragment>
										<div className="flex grow flex-col items-center text-center lg:flex-none lg:items-start lg:text-left">
											<span className="mb-3 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-caption font-bold text-on-secondary">
												Más solicitada
											</span>
											<h3 className="mb-2 text-caption font-bold tracking-wider text-primary uppercase">
												{car.category.toUpperCase()}
											</h3>
											<div className="mb-3 flex items-baseline gap-1 text-secondary">
												<span className="text-headline-xl font-extrabold">{car.price}</span>
												<span className="text-caption font-semibold leading-tight text-secondary">
													<span className="block text-[10px] font-normal text-outline">Por Día</span>
												</span>
											</div>
											<p className="mb-5 text-body-sm font-medium text-on-surface-variant">{car.model}</p>
											<a
												href={`${WHATSAPP_URL}?text=${encodeURIComponent(car.waText)}`}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2.5 text-caption font-bold text-on-secondary shadow-sm transition-colors duration-200 hover:bg-secondary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
											>
												Reservar Ahora
											</a>
										</div>
										<div className="my-4 flex grow items-center justify-center lg:my-0 lg:flex-none">
											<img
												src={car.image}
												alt={car.alt}
												loading="lazy"
												className="max-h-44 w-auto object-contain lg:max-h-52"
											/>
										</div>
									</Fragment>
								) : (
									<Fragment>
										<div>
											<h3 className="mb-2 text-caption font-bold tracking-wider text-primary uppercase">
												{car.category.toUpperCase()}
											</h3>
											<div className="mb-3 flex items-baseline justify-center gap-1 text-secondary">
												<span className="text-headline-lg font-extrabold">{car.price}</span>
												<span className="text-caption font-semibold leading-tight text-secondary">
													<span className="block text-[10px] font-normal text-outline">Por Día</span>
												</span>
											</div>
										</div>

										<div className="my-4 flex h-32 w-full items-center justify-center">
											<img
												src={car.image}
												alt={car.alt}
												loading="lazy"
												className="max-h-28 w-auto object-contain"
											/>
										</div>

										<div className="w-full">
											<p className="mb-4 text-caption font-medium text-on-surface-variant">{car.model}</p>
											<a
												href={`${WHATSAPP_URL}?text=${encodeURIComponent(car.waText)}`}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex w-full max-w-[150px] items-center justify-center rounded-full border border-secondary px-4 py-2 text-caption font-bold text-secondary transition-colors duration-200 hover:bg-secondary hover:text-on-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
											>
												Reservar Ahora
											</a>
										</div>
									</Fragment>
								)}
							</motion.article>
						))}

						<motion.div
							variants={card}
							className="col-span-1 flex flex-col items-center justify-between gap-6 rounded-lg border border-surface-container bg-surface-container-lowest p-6 shadow-sm sm:col-span-2 sm:flex-row lg:col-span-3"
						>
							<div className="text-center sm:text-left">
								<h3 className="mb-1 text-headline-md font-bold tracking-tight text-on-surface">
									¿Necesitas más información?
								</h3>
								<p className="text-body-sm text-on-surface-variant">
									Escríbenos o llámanos 24/7 y te asistimos.
								</p>
							</div>
							<a
								href={WHATSAPP_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-caption font-bold text-on-secondary shadow-sm transition-colors duration-200 hover:bg-secondary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
							>
								<CallIcon size={16} />
								+504 8961-1945
							</a>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}