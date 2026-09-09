import { FavouriteIcon, CallIcon, ChatIcon, Facebook01Icon, InstagramIcon, Location01Icon, Mail01Icon } from 'hugeicons-react';
import { dict, useLang } from '../i18n';

const WHATSAPP_URL = 'https://wa.me/50489611945';

const SOCIALS = [
	{ label: 'Instagram', href: 'https://www.instagram.com/goautos.hn/', icon: InstagramIcon },
	{ label: 'Facebook', href: 'https://www.facebook.com/goautosbroker/', icon: Facebook01Icon },
];

export default function Footer() {
	const lang = useLang();
	const t = dict[lang];
	const f = t.footer;

	const NAV_LINKS = [
		{ label: t.nav.renta, href: '#flota' },
		{ label: t.nav.importacion, href: '#importacion' },
		{ label: t.nav.ubicacion, href: '#contacto' },
	];

	return (
		<footer className="w-full border-t border-surface-container bg-surface-container-lowest">
			<div className="mx-auto max-w-7xl px-6 pt-14 pb-8">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
					<div className="md:col-span-6">
						<a href="#" aria-label="GoAutos inicio" className="inline-flex items-center gap-2">
							<img src="/logo.png" alt="GoAutos Honduras" className="h-8 w-auto object-contain" />
						</a>
						<p className="mt-4 max-w-sm text-body-md leading-relaxed text-on-surface-variant">{f.tagline}</p>
					</div>

					<div className="md:col-span-3">
						<h3 className="mb-4 text-label-sm font-semibold tracking-widest text-on-surface uppercase">
							{f.links}
						</h3>
						<ul className="space-y-2.5">
							{NAV_LINKS.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="text-body-md text-on-surface-variant transition-colors duration-150 ease-out hover:text-secondary"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="md:col-span-3">
						<h3 className="mb-4 text-label-sm font-semibold tracking-widest text-on-surface uppercase">
							{f.contact}
						</h3>
						<ul className="space-y-3">
							<li className="flex items-start gap-2 text-body-md text-on-surface-variant">
								<Location01Icon size={17} className="mt-0.5 shrink-0 text-secondary" />
								<span>{f.address}</span>
							</li>
							<li>
								<a
									href={WHATSAPP_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-body-md text-on-surface-variant transition-colors duration-150 ease-out hover:text-secondary"
								>
									<ChatIcon size={17} className="shrink-0 text-secondary" />
									{f.whatsapp}
								</a>
							</li>
							<li>
								<a
									href="mailto:inversionesgoautos@gmail.com"
									className="inline-flex items-center gap-2 text-body-md text-on-surface-variant transition-colors duration-150 ease-out hover:text-secondary"
								>
									<Mail01Icon size={17} className="shrink-0 text-secondary" />
									inversionesgoautos@gmail.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 flex flex-col items-center gap-6 border-t border-surface-container pt-6">
					<div className="flex items-center gap-3">
						{SOCIALS.map((s) => (
							<a
								key={s.label}
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={s.label}
								className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-surface-container-low text-on-surface transition-colors duration-150 ease-out hover:border-secondary hover:bg-surface-container hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
							>
								<s.icon size={18} />
							</a>
						))}
					</div>

					<div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
						<p className="text-caption text-on-surface-variant">{f.copyright}</p>
						<p className="inline-flex items-center gap-1.5 text-caption text-on-surface-variant">
							{f.developedBy}
							<a
								href="https://kibo.company"
								target="_blank"
								rel="noopener noreferrer"
								className="font-semibold text-on-surface transition-colors duration-150 ease-out hover:text-secondary"
							>
								Kibo Honduras
							</a>
							<FavouriteIcon size={13} className="text-secondary" />
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}