import { MotionConfig, motion } from 'motion/react';
import { IdentityCardIcon, LicenseIcon, MoneySavingJarIcon } from 'hugeicons-react';

const REQUIREMENTS = [
	{
		title: '1. Licencia de conducir vigente',
		text: 'Aceptamos licencias nacionales hondureñas y licencias internacionales o extranjeras al día.',
		icon: LicenseIcon,
	},
	{
		title: '2. Identidad (DNI) o Pasaporte',
		text: 'Documento de identidad o pasaporte original vigente para validación rápida en minutos.',
		icon: IdentityCardIcon,
	},
	{
		title: '3. Depósito en garantía',
		text: 'Depósito accesible y 100% reembolsable al entregar la unidad, en efectivo o transferencia.',
		icon: MoneySavingJarIcon,
	},
];

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
								Renta Fácil y Sin Burocracia
							</p>
							<h3 className="text-headline-lg text-balance font-bold tracking-tight text-on-surface">
								Requisitos de Renta Simples
							</h3>
						</div>

						<motion.div
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: '-60px' }}
							className="grid grid-cols-1 gap-4 md:grid-cols-3"
						>
							{REQUIREMENTS.map((req) => (
								<motion.div
									key={req.title}
									variants={item}
									className="flex items-start gap-4 rounded-2xl bg-surface-container-low/60 p-4"
								>
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary">
										<req.icon size={22} />
									</div>
									<div>
										<h4 className="mb-1 text-[16px] font-bold text-on-surface">{req.title}</h4>
										<p className="text-body-sm leading-relaxed text-on-surface-variant">{req.text}</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}