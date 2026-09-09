import { useEffect, useRef } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { CallIcon, Location01Icon } from 'hugeicons-react';
import 'leaflet/dist/leaflet.css';

const COORDS = { lat: 15.781139, lng: -86.788972 };
const MAPS_URL = 'https://maps.app.goo.gl/WrxMLEjtuG43kY8c9';
const PHONE_URL = 'tel:+50489611945';

const PIN_GLYPH =
	'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#ffffff"/><circle cx="12" cy="9" r="2.6" fill="#a73a00"/></svg>';

const container = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.07 },
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

export default function Location() {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = mapRef.current;
		if (!el) return;

		let cancelled = false;

		import('leaflet').then(({ default: L }) => {
			if (cancelled) return;

			const map = L.map(el, {
				center: [COORDS.lat, COORDS.lng],
				zoom: 17,
				scrollWheelZoom: false,
			});

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '© OpenStreetMap contributors',
			}).addTo(map);

			const icon = L.divIcon({
				className: '',
				html: `<div class="goautos-marker"><span class="goautos-ping"></span><span class="goautos-pin"><span class="goautos-pin-glyph">${PIN_GLYPH}</span></span></div>`,
				iconSize: [46, 46],
				iconAnchor: [23, 46],
			});

			L.marker([COORDS.lat, COORDS.lng], { icon }).addTo(map);
		});

		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<MotionConfig reducedMotion="user">
			<section id="contacto" className="w-full border-t border-surface-container bg-background py-16 md:py-24">
				<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-14">
					<motion.div
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: '-80px' }}
						className="lg:col-span-6"
					>
						<motion.p
							variants={item}
							className="mb-2 text-body-sm font-semibold tracking-widest text-secondary uppercase"
						>
							Sede Presencial
						</motion.p>

						<motion.h2
							variants={item}
							className="mb-3 text-headline-xl-mobile text-balance font-extrabold tracking-tight text-on-surface md:text-headline-xl"
						>
							Plaza Sicilian en La Ceiba
						</motion.h2>

						<motion.p variants={item} className="mb-2 text-body-lg text-on-surface">
							Boulevard 15 de Septiembre, La Ceiba, Honduras.
						</motion.p>

						<motion.p variants={item} className="mb-8 max-w-md text-body-md leading-relaxed text-on-surface-variant">
							A solo 20 minutos del Aeropuerto Guillermo Anderson y 15 minutos del Muelle de Cabotaje para ferries
							a Roatán y Útila.
						</motion.p>

						<motion.div variants={item} className="flex flex-wrap items-center gap-3">
							<a
								href={MAPS_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-body-sm font-semibold text-on-primary shadow-sm transition-[transform,background-color] duration-200 ease-out hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:scale-[0.97]"
							>
								<Location01Icon size={18} />
								Ver en Google Maps
							</a>
							<a
								href={PHONE_URL}
								className="inline-flex items-center gap-2 rounded-full bg-surface-container-low px-5 py-3 text-body-sm font-semibold text-on-surface transition-colors duration-200 ease-out hover:bg-surface-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:scale-[0.97]"
							>
								<CallIcon size={18} />
								+504 8961-1945
							</a>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.98 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: '-60px' }}
						transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
						className="relative z-0 isolate overflow-hidden rounded-2xl border border-surface-container bg-surface-container-low shadow-sm lg:col-span-6"
					>
						<div ref={mapRef} className="h-72 w-full sm:h-80 lg:h-[26rem]" aria-label="Mapa de la ubicación de GoAutos" />
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}