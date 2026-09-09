import { MotionConfig, motion } from 'motion/react';
import { ArrowRight01Icon, CheckmarkCircle01Icon } from 'hugeicons-react';
import { dict, useLang } from '../i18n';

const WHATSAPP_URL = 'https://wa.me/50489611945';

const AUCTIONS = [
	{ src: '/copart.png', alt: 'Copart' },
	{ src: '/iaai.png', alt: 'IAAI' },
	{ src: '/manheim.png', alt: 'Manheim' },
];

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

export default function ImportIntro() {
	const lang = useLang();
	const t = dict[lang];
	const intro = t.importIntro;

	return (
		<MotionConfig reducedMotion="user">
			<section className="relative w-full overflow-hidden border-y border-surface-container bg-background py-16 md:py-20">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: '-80px' }}
					className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
				>
					<motion.p variants={item} className="mb-4 text-body-sm font-semibold tracking-widest text-secondary uppercase">
						{intro.eyebrow}
					</motion.p>

					<motion.h2
						variants={item}
						className="mb-5 text-display-hero-mobile text-balance font-extrabold leading-[1.08] tracking-tight text-on-surface sm:text-display-hero"
					>
						{intro.title}
					</motion.h2>

					<motion.p variants={item} className="mb-8 max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
						{intro.subtitle}
					</motion.p>

					<motion.div variants={item} className="mb-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
						{intro.chips.map((chip) => (
							<span key={chip} className="inline-flex items-center gap-1.5 text-body-sm font-medium text-on-surface-variant">
								<CheckmarkCircle01Icon size={17} className="text-secondary" />
								{chip}
							</span>
						))}
					</motion.div>

					<motion.a
						variants={item}
						href={`${WHATSAPP_URL}?text=${encodeURIComponent(t.wa.importIntro)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-body-sm font-bold text-on-secondary shadow-sm transition-[transform,background-color] duration-200 ease-out hover:bg-secondary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:scale-[0.97]"
					>
						{intro.cta}
						<ArrowRight01Icon size={18} />
					</motion.a>

					<motion.div variants={item} className="mt-10 flex flex-col items-center">
						<span className="mb-4 text-body-sm font-medium tracking-wide text-on-surface-variant">
							{intro.logosCaption}
						</span>
						<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
							{AUCTIONS.map((brand) => (
								<img
									key={brand.alt}
									src={brand.src}
									alt={brand.alt}
									title={brand.alt}
									className="h-6 max-w-28 object-contain md:h-7 md:max-w-32"
								/>
							))}
						</div>
					</motion.div>
				</motion.div>
			</section>
		</MotionConfig>
	);
}