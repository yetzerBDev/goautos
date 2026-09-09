import { MotionConfig, motion } from 'motion/react';
import { IdentityCardIcon, LicenseIcon, MoneySavingJarIcon } from 'hugeicons-react';
import { dict, useLang } from '../i18n';

const ICONS = [LicenseIcon, IdentityCardIcon, MoneySavingJarIcon];

const container = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.08, delayChildren: 0.15 },
	},
};

const item = {
	hidden: { opacity: 0, y: 18 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
	},
};

export default function Requirements() {
	const lang = useLang();
	const t = dict[lang];
	const req = t.requirements;

	return (
		<MotionConfig reducedMotion="user">
			<section className="w-full bg-background pt-8 pb-16 md:pb-20">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-80px' }}
						transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
						className="rounded-3xl border border-surface-container bg-surface-container-lowest p-6 shadow-sm sm:p-10"
					>
						<div className="mx-auto mb-8 max-w-2xl text-center">
							<p className="mb-1 text-body-sm font-semibold tracking-wide text-secondary uppercase">
								{req.eyebrow}
							</p>
							<h3 className="text-headline-lg text-balance font-bold tracking-tight text-on-surface">
								{req.title}
							</h3>
						</div>

						<motion.div
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: '-60px' }}
							className="grid grid-cols-1 gap-4 md:grid-cols-3"
						>
							{req.items.map((rq, i) => {
								const Icon = ICONS[i];
								return (
									<motion.div
										key={rq.title}
										variants={item}
										className="flex items-start gap-4 rounded-2xl bg-surface-container-low/60 p-4"
									>
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary">
											<Icon size={22} />
										</div>
										<div>
											<h4 className="mb-1 text-[16px] font-bold text-on-surface">{rq.title}</h4>
											<p className="text-body-sm leading-relaxed text-on-surface-variant">{rq.text}</p>
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}