import { Fragment, useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import {
	ArrowDown01Icon,
	CheckmarkCircle01Icon,
	Location01Icon,
	Search01Icon,
} from 'hugeicons-react';
import { dict, useLang } from '../i18n';

const WHATSAPP_URL = 'https://wa.me/50489611945';

const container = {
	show: {
		transition: { staggerChildren: 0.07, delayChildren: 0.05 },
	},
};

const item = {
	hidden: { opacity: 0, y: 16 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
	},
};

export default function Hero() {
	const lang = useLang();
	const t = dict[lang];
	const FIELDS = t.hero.fields;
	const TRUST_ITEMS = t.hero.trust;

	const [openKey, setOpenKey] = useState<string | null>(null);
	const [values, setValues] = useState<Record<string, string>>({});
	const barRef = useRef<HTMLDivElement>(null);

	const selectedCount = Object.keys(values).length;
	const message = [
		t.hero.messageIntro,
		values.servicio?.toLowerCase() ?? FIELDS[0].placeholder.toLowerCase(),
		values.marca ?? FIELDS[1].placeholder,
		values.modelo ?? FIELDS[2].placeholder,
		values.presupuesto ?? FIELDS[3].placeholder,
	].join(', ');
	const searchHref = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpenKey(null);
		};
		const onPointerDown = (e: PointerEvent) => {
			if (barRef.current && !barRef.current.contains(e.target as Node)) setOpenKey(null);
		};
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('pointerdown', onPointerDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('pointerdown', onPointerDown);
		};
	}, []);

	return (
		<MotionConfig reducedMotion="user">
			<section className="relative w-full overflow-hidden border-b border-surface-container bg-background">
				<div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:pt-32 pb-10 text-center">
					<motion.div variants={container} initial="hidden" animate="show" className="flex w-full flex-col items-center">
						<motion.div
							variants={item}
							className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-surface-container-low px-4 py-1 text-caption font-semibold tracking-wider text-secondary uppercase"
						>
							<Location01Icon size={16} />
							<span>{t.hero.badge}</span>
						</motion.div>

						<motion.h1
							variants={item}
							className="mx-auto max-w-4xl text-display-hero-mobile sm:text-display-hero text-balance font-extrabold tracking-tight leading-[1.08] text-on-surface"
						>
							{t.hero.title}
						</motion.h1>

						<motion.p
							variants={item}
							className="mx-auto mt-4 mb-9 max-w-2xl text-body-lg leading-relaxed text-on-surface-variant"
						>
							{t.hero.subtitle}
						</motion.p>

						<motion.div variants={item} className="mb-9 w-full max-w-4xl">
							<div
								ref={barRef}
								className="flex flex-col items-stretch gap-1 rounded-[1.75rem] border border-surface-container bg-surface-container-lowest p-1.5 shadow-lg md:flex-row md:items-center md:rounded-full"
							>
								{FIELDS.map((field, i) => {
									const isOpen = openKey === field.key;
									const value = values[field.key] ?? '';
									return (
										<Fragment key={field.key}>
											<div className="relative flex-1 md:min-w-[140px]">
												<button
													type="button"
													aria-haspopup="listbox"
													aria-expanded={isOpen}
													onClick={() => setOpenKey(isOpen ? null : field.key)}
													className={`flex w-full items-center justify-between gap-2 rounded-full px-4 py-2.5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary hover:bg-surface-container-low ${
														isOpen ? 'bg-surface-container-low' : ''
													}`}
												>
													<span className="flex min-w-0 flex-col items-start gap-0.5">
														<span className="text-caption font-bold tracking-wider text-outline uppercase">
															{field.label}
														</span>
														<span className={`truncate text-[13px] font-semibold ${value ? 'text-on-surface' : 'text-on-surface-variant'}`}>
															{value || field.placeholder}
														</span>
													</span>
													<motion.span
														animate={{ rotate: isOpen ? 180 : 0 }}
														transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
														className="flex shrink-0 text-outline"
													>
														<ArrowDown01Icon size={17} />
													</motion.span>
												</button>

												<AnimatePresence>
													{isOpen && (
														<motion.div
															role="listbox"
															aria-label={field.label}
															initial={{ opacity: 0, scale: 0.96, y: -6 }}
															animate={{ opacity: 1, scale: 1, y: 0 }}
															exit={{ opacity: 0, scale: 0.96, y: -6 }}
															transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
															className="absolute top-full right-0 left-0 z-30 mt-2 overflow-hidden rounded-2xl border border-surface-container bg-surface-container-lowest shadow-xl"
														>
															<ul className="scrollbar-hidden max-h-64 overflow-auto overscroll-contain py-1.5">
																{field.options.map((option) => {
																	const selected = value === option;
useEffect(() => {
		setValues({});
		setOpenKey(null);
	}, [lang]);

	return (
																		<li key={option}>
																			<button
																				type="button"
																				role="option"
																				aria-selected={selected}
																				onClick={() => {
																					setValues((v) => ({ ...v, [field.key]: option }));
																					setOpenKey(null);
																				}}
																				className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors duration-100 hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
																					selected ? 'font-semibold text-on-surface' : 'text-on-surface-variant'
																				}`}
																			>
																				<span className="truncate">{option}</span>
																				{selected && <CheckmarkCircle01Icon size={16} className="shrink-0 text-secondary" />}
																			</button>
																		</li>
																	);
																})}
															</ul>
														</motion.div>
													)}
												</AnimatePresence>
											</div>

											{i < FIELDS.length - 1 && (
												<span aria-hidden="true" className="hidden h-8 w-px shrink-0 self-center bg-surface-container md:block" />
											)}
										</Fragment>
									);
								})}

								<a
									href={searchHref}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={selectedCount > 0 ? t.hero.searchAriaFilled : t.hero.searchAria}
									className="ml-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-md transition-colors duration-200 hover:bg-secondary-container active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
								>
									<Search01Icon size={22} />
								</a>
							</div>
						</motion.div>

						<motion.div variants={item} className="mb-2 w-full max-w-3xl">
							<motion.img
								initial={{ opacity: 0, scale: 0.96, y: 10 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
								src="/hero_image.png"
								alt={t.hero.imgAlt}
								className="mx-auto h-auto max-h-[340px] w-full object-contain drop-shadow-[0_28px_44px_rgba(11,28,48,0.18)]"
							/>
						</motion.div>

						<motion.div
							variants={item}
							className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-6 text-body-sm text-outline"
						>
							{TRUST_ITEMS.map((trust) => (
								<span key={trust} className="inline-flex items-center gap-1.5">
									<CheckmarkCircle01Icon size={18} className="text-secondary" />
									{trust}
								</span>
							))}
						</motion.div>
					</motion.div>
				</div>
			</section>
		</MotionConfig>
	);
}