import { useRef } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { ArrowLeft01Icon, ArrowRight01Icon, StarIcon } from 'hugeicons-react';

const TESTIMONIALS = [
	{
		text: 'El proceso de reserva fue rápido y transparente. El vehículo estaba impecable y con entrega puntual en el aeropuerto para tomar el ferry.',
		name: 'Sarah J.',
		city: 'San Pedro Sula, HN',
		initials: 'SJ',
	},
	{
		text: 'Excelentes precios, trato amable y sin letras pequeñas ni cobros ocultos. Mi opción definitiva para alquilar cada vez que viajo a La Ceiba.',
		name: 'James T.',
		city: 'La Ceiba, HN',
		initials: 'JT',
	},
	{
		text: 'Importamos una camioneta familiar con total asesoría en flete y desaduanaje. Cero complicaciones, fotos en cada etapa y entrega con placas.',
		name: 'Priya K.',
		city: 'Tegucigalpa, HN',
		initials: 'PK',
	},
];

const container = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.08 },
	},
};

const item = {
	hidden: { opacity: 0, y: 18 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
	},
};

export default function Testimonials() {
	const trackRef = useRef<HTMLDivElement>(null);

	const scroll = (dir: 'prev' | 'next') => {
		const el = trackRef.current;
		if (!el) return;
		const amount = Math.min(el.clientWidth * 0.6, 360);
		el.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
	};

	return (
		<MotionConfig reducedMotion="user">
			<section className="w-full overflow-hidden bg-background py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: '-80px' }}
						className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center md:mb-12"
					>
						<motion.p
							variants={item}
							className="mb-2 text-body-sm font-semibold tracking-widest text-secondary uppercase"
						>
							Testimonios
						</motion.p>
						<motion.h2
							variants={item}
							className="mb-2 text-headline-xl text-balance font-extrabold tracking-tight text-on-surface"
						>
							Lo que dicen nuestros clientes
						</motion.h2>
						<motion.p variants={item} className="text-body-md text-on-surface-variant">
							Personas reales. Experiencias reales.
						</motion.p>

						<motion.div variants={item} className="mt-7 flex items-center gap-3">
							<button
								type="button"
								onClick={() => scroll('prev')}
								aria-label="Testimonios anteriores"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface transition-colors duration-150 ease-out hover:bg-surface-container hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:scale-[0.97]"
							>
								<ArrowLeft01Icon size={18} />
							</button>
							<button
								type="button"
								onClick={() => scroll('next')}
								aria-label="Testimonios siguientes"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface transition-colors duration-150 ease-out hover:bg-surface-container hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:scale-[0.97]"
							>
								<ArrowRight01Icon size={18} />
							</button>
						</motion.div>
					</motion.div>

					<motion.div
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: '-60px' }}
						ref={trackRef}
						className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scrollbar-hidden px-6 pb-2"
					>
						{TESTIMONIALS.map((t) => (
							<motion.figure
								key={t.name}
								variants={item}
								className="flex w-[min(360px,82vw)] shrink-0 snap-start flex-col rounded-2xl border border-surface-container bg-surface-container-lowest p-6 shadow-sm"
							>
								<div className="mb-4 flex items-center gap-1 text-secondary">
									{Array.from({ length: 5 }).map((_, i) => (
										<StarIcon key={i} size={18} />
									))}
								</div>
								<blockquote className="mb-6 flex-1 text-body-md leading-relaxed text-on-surface-variant">
									<p>“{t.text}”</p>
								</blockquote>
								<figcaption className="flex items-center gap-3">
									<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-container text-body-sm font-bold text-secondary">
										{t.initials}
									</span>
									<span className="flex flex-col leading-tight">
										<span className="text-body-sm font-semibold text-on-surface">{t.name}</span>
										<span className="text-caption text-outline">{t.city}</span>
									</span>
								</figcaption>
							</motion.figure>
						))}
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}