import { MotionConfig, motion } from 'motion/react';
import { ArrowRight01Icon, FireIcon } from 'hugeicons-react';
import { dict, useLang } from '../i18n';

const WHATSAPP_URL = 'https://wa.me/50489611945';

export default function Promo() {
	const lang = useLang();
	const t = dict[lang];
	const promo = t.promo;

	return (
		<MotionConfig reducedMotion="user">
			<section className="w-full bg-background py-12 md:py-16">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 24, scale: 0.985 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: true, margin: '-80px' }}
						transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
						className="relative overflow-hidden rounded-3xl bg-secondary p-8 text-on-secondary shadow-lg sm:p-12"
					>
						<div
							aria-hidden="true"
							className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_70%)]"
						/>
						<div
							aria-hidden="true"
							className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(87,26,0,0.22)_0%,rgba(87,26,0,0)_70%)]"
						/>

						<div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-center">
							<div className="max-w-2xl text-center lg:text-left">
								<div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-surface-container-lowest/15 px-4 py-1.5 text-caption font-bold tracking-wider uppercase">
									<FireIcon size={16} />
									<span>{promo.badge}</span>
								</div>
								<h2 className="mb-3 text-headline-xl-mobile text-balance font-extrabold leading-tight tracking-tight md:text-headline-xl">
									{promo.title}
								</h2>
								<p className="text-body-md leading-relaxed text-on-secondary/90">{promo.body}</p>
							</div>

							<div className="flex shrink-0 flex-col items-center gap-3 sm:items-end">
								<a
									href={`${WHATSAPP_URL}?text=${encodeURIComponent(t.wa.promo)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-full bg-surface-container-lowest px-6 py-3 text-body-sm font-bold text-secondary shadow-sm transition-[transform,background-color] duration-200 ease-out hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary active:scale-[0.97]"
								>
									{promo.cta}
									<ArrowRight01Icon size={18} />
								</a>
								<span className="text-center text-caption text-on-secondary/80 sm:text-right">{promo.note}</span>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}