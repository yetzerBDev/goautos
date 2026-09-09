import { useSyncExternalStore } from 'react';

export type Lang = 'es' | 'en';

const LS_KEY = 'goautos:lang';

let lang: Lang = 'es';
const listeners = new Set<() => void>();

function readInitial(): Lang {
	if (typeof window === 'undefined') return 'es';
	const stored = window.localStorage.getItem(LS_KEY);
	if (stored === 'en' || stored === 'es') return stored;
	return window.navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
}

if (typeof window !== 'undefined') {
	lang = readInitial();
	document.documentElement.lang = lang;
}

export function setLang(next: Lang) {
	lang = next;
	try {
		window.localStorage.setItem(LS_KEY, next);
	} catch {
		// storage no disponible
	}
	document.documentElement.lang = next;
	listeners.forEach((l) => l());
}

export function getLang(): Lang {
	return lang;
}

function subscribe(listener: () => void) {
	listeners.add(listener);
	return () => {
		listeners.delete(listener);
	};
}

const getSnapshot = () => lang;
const getServerSnapshot = (): Lang => 'es';

export function useLang(): Lang {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export const es = {
	nav: {
		renta: 'Renta',
		importacion: 'Importación',
		ubicacion: 'Ubicación',
		cta: 'WhatsApp',
		langLabel: 'Cambiar idioma',
	},
	hero: {
		badge: 'La Ceiba, Honduras · Plaza Sicilian',
		title: 'Encuentra Tu Auto Ideal',
		subtitle:
			'Renta ejecutiva en La Ceiba e importación directa desde subastas en EE. UU. Sin complicaciones ni depósitos abusivos.',
		fields: [
			{
				key: 'servicio',
				label: 'Servicio',
				placeholder: 'Renta o Venta',
				options: ['Renta de Auto', 'Venta de Auto', 'Importación de Subasta'],
			},
			{
				key: 'marca',
				label: 'Marca',
				placeholder: 'Cualquier Marca',
				options: ['Todas las Marcas', 'Toyota', 'Honda', 'Kia', 'Suzuki', 'Mercedes-Benz', 'BMW', 'Fiat'],
			},
			{
				key: 'modelo',
				label: 'Modelo',
				placeholder: 'Cualquier Modelo',
				options: ['Cualquier Modelo', 'Compacto', 'Sedán', 'SUV', 'Camioneta', 'Deportivo'],
			},
			{
				key: 'presupuesto',
				label: 'Presupuesto',
				placeholder: 'Todos los Precios',
				options: ['Todos los Precios', 'Hasta $50 / día', '$50 - $70 / día', '$70 - $100 / día', 'Más de $100 / día'],
			},
		],
		messageIntro: 'Hola GoAutos, busco:',
		searchAriaFilled: 'Buscar en WhatsApp con mis selecciones',
		searchAria: 'Buscar en WhatsApp',
		imgAlt: 'Auto destacado de la flota GoAutos',
		trust: ['Sin tarjeta obligatoria', 'Facturación Fiscal CAI', 'Entrega Aeropuerto y Ferry'],
	},
	fleet: {
		eyebrow: 'Disponibilidad Inmediata',
		title: 'Flota de Renta en La Ceiba',
		subtitle: 'Unidades limpias, acondicionadas y con entrega directa en el aeropuerto o muelle.',
		perDay: 'Por Día',
		featuredBadge: 'Más solicitada',
		book: 'Reservar Ahora',
		moreInfo: '¿Necesitas más información?',
		moreInfoText: 'Escríbenos o llámanos 24/7 y te asistimos.',
		catSedanes: 'Sedanes',
		catEconomicos: 'Económicos',
		catEjecutivas: 'Ejecutivas',
		catTodoTerreno: 'Todo Terreno (4x4)',
		catPickups: 'Pick-ups',
		modelCorolla: 'Toyota Corolla o similar',
		modelI10: 'Hyundai i10 o similar',
		modelCrv: 'Honda CR-V o similar',
		modelPrado: 'Toyota Prado o similar',
		modelHilux: 'Toyota Hilux o similar',
	},
	promo: {
		badge: 'Promoción Especial Activa',
		title: '¡Renta 3 Días y el 4º Día es completamente gratis!',
		body: 'Disfruta tus vacaciones en La Ceiba e Islas de la Bahía con la mejor tarifa. Alquila cualquier vehículo de nuestra flota por 3 días y te regalamos el cuarto día adicional sin costo alguno.',
		cta: 'Aprovechar Promo por WhatsApp',
		note: 'Válido para reservas con entrega en La Ceiba y terminales',
	},
	requirements: {
		eyebrow: 'Renta Fácil y Sin Burocracia',
		title: 'Requisitos de Renta Simples',
		items: [
			{
				title: '1. Licencia de conducir vigente',
				text: 'Aceptamos licencias nacionales hondureñas y licencias internacionales o extranjeras al día.',
			},
			{
				title: '2. Identidad (DNI) o Pasaporte',
				text: 'Documento de identidad o pasaporte original vigente para validación rápida en minutos.',
			},
			{
				title: '3. Depósito en garantía',
				text: 'Depósito accesible y 100% reembolsable al entregar la unidad, en efectivo o transferencia.',
			},
		],
	},
	importIntro: {
		eyebrow: 'Importación desde EE. UU.',
		title: 'Renta en La Ceiba, o tráelo desde las subastas de EE. UU.',
		subtitle:
			'Compramos en subastas de EE. UU. al mejor precio, verificamos el historial Carfax y te entregamos el vehículo con placas y factura CAI.',
		chips: ['Precios de subasta', 'Carfax verificado', 'Factura CAI y placas'],
		cta: 'Cotizar mi Auto en WhatsApp',
		logosCaption: 'Compramos en las mejores subastas de EE. UU.',
	},
	importProcess: {
		eyebrow: 'Importación desde EE. UU.',
		title: 'Cómo Funciona',
		subtitle: 'Importar tu vehículo desde EE. UU. con GoAutos es rápido y seguro.',
		steps: [
			{
				title: 'Elige tu Auto',
				text: 'Selecciona tu vehículo en Copart, IAAI o Manheim según tus preferencias.',
			},
			{
				title: 'Inspección & Puja',
				text: 'Revisamos historial Carfax y compramos al mejor precio acordado.',
			},
			{
				title: 'Flete y SAR',
				text: 'Transporte marítimo seguro y desaduanaje legal con factura CAI.',
			},
			{
				title: 'Recibe tus Llaves',
				text: 'Revisión mecánica integral y entrega listo para rodar con placas.',
			},
		],
		cta: 'Cotizar Vehículo de Subasta',
	},
	testimonials: {
		eyebrow: 'Testimonios',
		title: 'Lo que dicen nuestros clientes',
		subtitle: 'Personas reales. Experiencias reales.',
		prevLabel: 'Testimonios anteriores',
		nextLabel: 'Testimonios siguientes',
		items: [
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
		],
	},
	location: {
		eyebrow: 'Sede Presencial',
		title: 'Plaza Sicilian en La Ceiba',
		address: 'Boulevard 15 de Septiembre, La Ceiba, Honduras.',
		note: 'A solo 20 minutos del Aeropuerto Guillermo Anderson y 15 minutos del Muelle de Cabotaje para ferries a Roatán y Utila.',
		mapsCta: 'Ver en Google Maps',
		mapAria: 'Mapa de la ubicación de GoAutos',
	},
	footer: {
		tagline:
			'Renta ejecutiva e importación directa desde subastas en EE. UU. Sin complicaciones ni depósitos abusivos en La Ceiba, Honduras.',
		links: 'Enlaces',
		contact: 'Contacto',
		address: 'Plaza Sicilian, Boulevard 15 de Septiembre, La Ceiba, Honduras',
		whatsapp: 'WhatsApp: +504 8961-1945',
		copyright: '© 2026 GoAutos. Facturación autorizada SAR CAI.',
		developedBy: 'Desarrollado por',
	},
	wa: {
		fleet: (cat: string) => `Hola GoAutos, quiero reservar categoría ${cat}`,
		promo: 'Hola GoAutos, quiero aprovechar la Promo de Renta 3 días y el 4to gratis',
		importIntro: 'Hola GoAutos, quiero cotizar un vehículo importado desde subasta',
		importProcess: 'Hola GoAutos, tengo un lote de subasta para cotizar',
	},
};

export type Dict = typeof es;

export const en: Dict = {
	nav: {
		renta: 'Rentals',
		importacion: 'Import',
		ubicacion: 'Location',
		cta: 'WhatsApp',
		langLabel: 'Change language',
	},
	hero: {
		badge: 'La Ceiba, Honduras · Plaza Sicilian',
		title: 'Find Your Ideal Car',
		subtitle:
			'Executive car rentals in La Ceiba and direct import from US auctions. No hassles, no abusive deposits.',
		fields: [
			{
				key: 'servicio',
				label: 'Service',
				placeholder: 'Rent or Sale',
				options: ['Car Rental', 'Car Sale', 'Auction Import'],
			},
			{
				key: 'marca',
				label: 'Brand',
				placeholder: 'Any Brand',
				options: ['All Brands', 'Toyota', 'Honda', 'Kia', 'Suzuki', 'Mercedes-Benz', 'BMW', 'Fiat'],
			},
			{
				key: 'modelo',
				label: 'Model',
				placeholder: 'Any Model',
				options: ['Any Model', 'Compact', 'Sedan', 'SUV', 'Truck', 'Sports'],
			},
			{
				key: 'presupuesto',
				label: 'Budget',
				placeholder: 'All Prices',
				options: ['All Prices', 'Up to $50 / day', '$50 - $70 / day', '$70 - $100 / day', '$100+ / day'],
			},
		],
		messageIntro: 'Hello GoAutos, I am looking for:',
		searchAriaFilled: 'Search on WhatsApp with my selections',
		searchAria: 'Search on WhatsApp',
		imgAlt: 'Featured car from the GoAutos fleet',
		trust: ['No card required', 'CAI tax invoice', 'Airport & Ferry delivery'],
	},
	fleet: {
		eyebrow: 'Immediate Availability',
		title: 'Rental Fleet in La Ceiba',
		subtitle: 'Clean, fully equipped vehicles with direct airport or dock delivery.',
		perDay: 'Per Day',
		featuredBadge: 'Most requested',
		book: 'Book Now',
		moreInfo: 'Need more information?',
		moreInfoText: 'Write or call us 24/7 and we will assist you.',
		catSedanes: 'Sedans',
		catEconomicos: 'Economy',
		catEjecutivas: 'Executive',
		catTodoTerreno: 'SUV (4x4)',
		catPickups: 'Pickups',
		modelCorolla: 'Toyota Corolla or similar',
		modelI10: 'Hyundai i10 or similar',
		modelCrv: 'Honda CR-V or similar',
		modelPrado: 'Toyota Prado or similar',
		modelHilux: 'Toyota Hilux or similar',
	},
	promo: {
		badge: 'Special Promotion Active',
		title: 'Rent 3 Days and Get the 4th Day Completely Free!',
		body: 'Enjoy your vacation in La Ceiba and the Bay Islands with the best rate. Rent any vehicle from our fleet for 3 days and we give you the 4th additional day at no cost.',
		cta: 'Claim Promo on WhatsApp',
		note: 'Valid for bookings delivered in La Ceiba and terminals',
	},
	requirements: {
		eyebrow: 'Easy Rental, No Red Tape',
		title: 'Simple Rental Requirements',
		items: [
			{
				title: '1. Valid driver’s license',
				text: 'We accept current Honduran national licenses and international or foreign licenses.',
			},
			{
				title: '2. ID (DNI) or Passport',
				text: 'Original valid ID or passport for quick validation in minutes.',
			},
			{
				title: '3. Security deposit',
				text: 'Accessible deposit, 100% refundable upon returning the vehicle, cash or bank transfer.',
			},
		],
	},
	importIntro: {
		eyebrow: 'Import from the USA',
		title: 'Rent in La Ceiba, or bring it from US auctions.',
		subtitle:
			'We buy from US auctions at the best price, verify the Carfax history and deliver your vehicle with plates and CAI invoice.',
		chips: ['Auction prices', 'Verified Carfax', 'CAI invoice & plates'],
		cta: 'Get a Quote on WhatsApp',
		logosCaption: 'We buy from the best US auctions',
	},
	importProcess: {
		eyebrow: 'Import from the USA',
		title: 'How It Works',
		subtitle: 'Importing your vehicle from the USA with GoAutos is fast and safe.',
		steps: [
			{
				title: 'Pick Your Car',
				text: 'Choose your vehicle on Copart, IAAI or Manheim based on your preferences.',
			},
			{
				title: 'Inspection & Bid',
				text: 'We review the Carfax history and buy at the best agreed price.',
			},
			{
				title: 'Shipping & SAR',
				text: 'Safe ocean shipping and legal customs clearance with CAI invoice.',
			},
			{
				title: 'Get Your Keys',
				text: 'Full mechanical inspection and delivery ready to drive with plates.',
			},
		],
		cta: 'Get an Auction Vehicle Quote',
	},
	testimonials: {
		eyebrow: 'Testimonials',
		title: 'What our customers say',
		subtitle: 'Real people. Real experiences.',
		prevLabel: 'Previous testimonials',
		nextLabel: 'Next testimonials',
		items: [
			{
				text: 'The booking process was fast and transparent. The vehicle was spotless with punctual airport delivery to catch the ferry.',
				name: 'Sarah J.',
				city: 'San Pedro Sula, HN',
				initials: 'SJ',
			},
			{
				text: 'Excellent prices, friendly service and no fine print or hidden fees. My go-to choice every time I travel to La Ceiba.',
				name: 'James T.',
				city: 'La Ceiba, HN',
				initials: 'JT',
			},
			{
				text: 'We imported a family SUV with full support through shipping and customs. Zero hassle, photos at every step and delivery with plates.',
				name: 'Priya K.',
				city: 'Tegucigalpa, HN',
				initials: 'PK',
			},
		],
	},
	location: {
		eyebrow: 'Physical Location',
		title: 'Plaza Sicilian in La Ceiba',
		address: 'Boulevard 15 de Septiembre, La Ceiba, Honduras.',
		note: 'Just 20 minutes from Guillermo Anderson Airport and 15 minutes from the cabotage dock for ferries to Roatán and Utila.',
		mapsCta: 'View on Google Maps',
		mapAria: 'Map of GoAutos location',
	},
	footer: {
		tagline:
			'Executive car rentals and direct import from US auctions. No hassles, no abusive deposits in La Ceiba, Honduras.',
		links: 'Links',
		contact: 'Contact',
		address: 'Plaza Sicilian, Boulevard 15 de Septiembre, La Ceiba, Honduras',
		whatsapp: 'WhatsApp: +504 8961-1945',
		copyright: '© 2026 GoAutos. Authorized SAR CAI invoicing.',
		developedBy: 'Developed by',
	},
	wa: {
		fleet: (cat: string) => `Hello GoAutos, I want to book the ${cat} category`,
		promo: 'Hello GoAutos, I want to claim the 3-day rental promo with the 4th day free',
		importIntro: 'Hello GoAutos, I want a quote for a vehicle imported from auction',
		importProcess: 'Hello GoAutos, I have an auction lot to get a quote',
	},
};

export const dict: Record<Lang, Dict> = { es, en };