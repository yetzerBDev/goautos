import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { ArrowRight01Icon, Cancel01Icon, Menu01Icon } from 'hugeicons-react';

const NAV_LINKS = [
	{ label: 'Renta', href: '#flota' },
	{ label: 'Importación', href: '#importacion' },
	{ label: 'Ubicación', href: '#contacto' },
];

const WHATSAPP_URL = 'https://wa.me/50489611945';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		if (!open) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [open]);

	return (
		<MotionConfig reducedMotion="user">
			<header
				className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
					scrolled || open
						? 'border-b border-surface-container/80 bg-surface-container-lowest/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl'
						: 'border-b border-transparent bg-transparent'
				}`}
			>
				<div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
					<a
						href="#top"
						aria-label="GoAutos, ir al inicio"
						className="flex min-w-0 shrink-0 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
					>
						<motion.img
							src="/logo.png"
							alt="GoAutos"
							className="h-7 w-auto object-contain"
							whileTap={{ scale: 0.94 }}
							transition={{ duration: 0.12 }}
						/>
					</a>

					<nav
						aria-label="Principal"
						className="hidden items-center gap-7 md:flex"
					>
						{NAV_LINKS.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="group relative text-[13px] font-medium text-on-surface-variant transition-colors duration-200 hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
							>
								{link.label}
								<span
									aria-hidden="true"
									className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-secondary transition-transform duration-200 ease-out group-hover:scale-x-100"
								/>
							</a>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<a
							href={WHATSAPP_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-on-primary shadow-sm transition-colors duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest sm:inline-flex"
						>
							WhatsApp
							<ArrowRight01Icon size={16} />
						</a>

						<motion.button
							type="button"
							onClick={() => setOpen((v) => !v)}
							aria-expanded={open}
							aria-controls="mobile-menu"
							aria-haspopup="true"
							aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
							whileTap={{ scale: 0.92 }}
							transition={{ duration: 0.12 }}
							className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-container bg-surface-container-lowest text-on-surface transition-colors duration-200 hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary md:hidden"
						>
							<AnimatePresence mode="wait" initial={false}>
								<motion.span
									key={open ? 'close' : 'open'}
									initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
									animate={{ opacity: 1, scale: 1, rotate: 0 }}
									exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
									transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
									className="flex"
								>
									{open ? <Cancel01Icon size={20} /> : <Menu01Icon size={20} />}
								</motion.span>
							</AnimatePresence>
						</motion.button>
					</div>
				</div>

				<AnimatePresence>
					{open && (
						<motion.div
							id="mobile-menu"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.24, ease: [0.32, 0.72, 0, 1] }}
							className="overflow-hidden border-t border-surface-container bg-surface-container-lowest/95 backdrop-blur-xl md:hidden"
						>
							<nav aria-label="Principal móvil" className="mx-auto max-w-7xl px-6 pt-2 pb-6">
								<ul className="flex flex-col">
									{NAV_LINKS.map((link, i) => (
										<motion.li
											key={link.href}
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0 }}
											transition={{
												delay: 0.05 * i,
												duration: 0.2,
												ease: [0.23, 1, 0.32, 1],
											}}
										>
											<a
												href={link.href}
												onClick={() => setOpen(false)}
												className="block rounded-lg px-2 py-3 text-[15px] font-medium text-on-surface-variant transition-colors duration-200 hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
											>
												{link.label}
											</a>
										</motion.li>
									))}
								</ul>
								<motion.a
									href={WHATSAPP_URL}
									target="_blank"
									rel="noopener noreferrer"
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0 }}
									transition={{
										delay: 0.05 * NAV_LINKS.length,
										duration: 0.2,
										ease: [0.23, 1, 0.32, 1],
									}}
									className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-on-primary transition-colors duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary sm:hidden"
								>
									WhatsApp
									<ArrowRight01Icon size={16} />
								</motion.a>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		</MotionConfig>
	);
}