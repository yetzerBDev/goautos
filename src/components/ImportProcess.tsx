import { MotionConfig, motion } from 'motion/react';
import { ArrowRight01Icon, AuctionIcon, File01Icon, Key01Icon, Location01Icon } from 'hugeicons-react';
import { dict, useLang } from '../i18n';

const WHATSAPP_URL = 'https://wa.me/50489611945';

const ICONS = [Location01Icon, AuctionIcon, File01Icon, Key01Icon];

const container = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.1, delayChildren: 0.35 },
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
	},
};

export default function ImportProcess() {
	const lang = useLang();
	const t = dict[lang];
	const ip = t.importProcess;

	return (
		<MotionConfig reducedMotion="user">
			<section id="importacion" className="w-full border-y border-surface-container bg-background py-16 md:py-20">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-80px' }}
						transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
						className="mx-auto mb-12 max-w-2xl text-center"
					>
						<p className="mb-1 text-body-sm font-semibold tracking-wide text-secondary uppercase">
							{ip.eyebrow}
						</p>
						<h2 className="mb-2 text-headline-xl-mobile text-balance font-extrabold tracking-tight text-on-surface md:text-headline-xl">
							{ip.title}
						</h2>
						<p className="text-body-md text-on-surface-variant">{ip.subtitle}</p>
					</motion.div>

					<div className="relative mx-auto max-w-5xl">
						<motion.div
							aria-hidden="true"
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
							className="absolute top-10 right-[12%] left-[12%] hidden h-px origin-left border-t-2 border-dashed border-surface-container md:block"
						/>

						<motion.div
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: '-60px' }}
							className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4"
						>
							{ip.steps.map((step, i) => {
								const Icon = ICONS[i];
								return (
									<motion.div key={step.title} variants={item} className="flex flex-col items-center text-center">
										<div className="relative mb-4">
											<div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface-container-low text-secondary shadow-sm">
												<Icon size={32} />
											</div>
											<span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-on-secondary shadow-sm">
												{i + 1}
											</span>
										</div>
										<h3 className="mb-1 text-[16px] font-bold text-on-surface">{step.title}</h3>
										<p className="max-w-[210px] text-body-sm leading-relaxed text-on-surface-variant">{step.text}</p>
									</motion.div>
								);
							})}
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-40px' }}
						transition={{ duration: 0.45, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
						className="mt-12 text-center"
					>
						<a
							href={`${WHATSAPP_URL}?text=${encodeURIComponent(t.wa.importProcess)}`}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-body-sm font-semibold text-on-secondary shadow-sm transition-[transform,background-color] duration-200 ease-out hover:bg-secondary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:scale-[0.97]"
						>
							{ip.cta}
							<ArrowRight01Icon size={18} />
						</a>
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}