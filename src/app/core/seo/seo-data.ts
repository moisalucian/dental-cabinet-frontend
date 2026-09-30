import { ActivatedRouteSnapshot } from '@angular/router';

/**
 * Lightweight SEO lookup tables for dynamic routes (`servicii/:slug`, `blog/:slug`).
 * Kept separate from the components' own content arrays to avoid touching their logic;
 * only title/description strings are duplicated here.
 */
export const SERVICE_SEO: Record<string, { title: string; description: string }> = {
  'profilaxie-dentara': {
    title: 'Profilaxie dentară Brașov — Clinica Edentall',
    description: 'Detartraj, periaj profesional și consultanță personalizată pentru prevenția afecțiunilor dentare, la Clinica Edentall Brașov.'
  },
  'stomatologie-generala': {
    title: 'Stomatologie generală Brașov — Clinica Edentall',
    description: 'Tratamente complete pentru sănătatea dentară a întregii familii, de la consultații de rutină la afecțiuni comune, la Clinica Edentall Brașov.'
  },
  'endodontie': {
    title: 'Endodonție, tratament de canal — Clinica Edentall Brașov',
    description: 'Tratamente de canal moderne și minim invazive pentru salvarea dinților afectați de infecții profunde, la Clinica Edentall Brașov.'
  },
  'parodontologie': {
    title: 'Parodontologie Brașov — Clinica Edentall',
    description: 'Tratarea și prevenirea afecțiunilor gingivale și parodontale pentru menținerea sănătății structurii de susținere a dinților, la Clinica Edentall.'
  },
  'ortodontie': {
    title: 'Ortodonție Brașov, aparat dentar — Clinica Edentall',
    description: 'Corectarea alinierii dinților și maxilarelor cu aparate dentare moderne, pentru un zâmbet armonios, la Clinica Edentall Brașov.'
  },
  'protetica-dentara': {
    title: 'Protetică dentară Brașov — Clinica Edentall',
    description: 'Coroane, punți și proteze dentare personalizate pentru redarea funcționalității și esteticii danturii, la Clinica Edentall Brașov.'
  },
  'estetica-dentara': {
    title: 'Estetică dentară Brașov — Clinica Edentall',
    description: 'Fațete dentare, albiri profesionale și remodelări personalizate pentru transformarea zâmbetului tău, la Clinica Edentall Brașov.'
  },
  'chirurgie-dentara': {
    title: 'Chirurgie dentară, implanturi — Clinica Edentall Brașov',
    description: 'Soluții chirurgicale pentru cazuri complexe: extracții, implanturi dentare și tratamente pentru afecțiuni maxilare, la Clinica Edentall Brașov.'
  },
  'stomatologie-copii': {
    title: 'Stomatologie pentru copii Brașov — Clinica Edentall',
    description: 'Îngrijire dentară blândă și prietenoasă pentru cei mici, de la prevenție la tratamente, la Clinica Edentall Brașov.'
  }
};

export const BLOG_SEO: Record<string, { title: string; description: string }> = {
  'importanta-consultatiilor-dentare': {
    title: 'Importanța consultațiilor dentare regulate — Blog Edentall',
    description: 'Consultațiile dentare regulate te ajută să previi afecțiunile grave și să menții sănătatea orală. Află de ce contează, pe blogul Edentall.'
  },
  'beneficii-albire-profesionala': {
    title: 'Beneficiile albirii dentare profesionale — Blog Edentall',
    description: 'Descoperă cum albirea profesională îți poate îmbunătăți estetica și încrederea în sine, pe blogul Clinicii Edentall.'
  },
  'ghid-implanturi-dentare': {
    title: 'Ghid complet pentru implanturile dentare — Blog Edentall',
    description: 'Află ce implică procesul unui implant dentar și cum îți poate transforma zâmbetul, pe blogul Clinicii Edentall.'
  },
  'rolul-fluorului-prevenirea-cariilor': {
    title: 'Rolul fluorului în prevenirea cariilor — Blog Edentall',
    description: 'Cum ajută fluorul la întărirea smalțului și la protejarea dinților împotriva cariilor, pe blogul Clinicii Edentall.'
  },
  'sensibilitatea-dentara-cauze-tratamente': {
    title: 'Sensibilitatea dentară: cauze și tratamente — Blog Edentall',
    description: 'Identifică motivele sensibilității dentare și metodele de reducere a disconfortului, pe blogul Clinicii Edentall.'
  },
  'avantajele-protezarii-dentare': {
    title: 'Avantajele protezării dentare — Blog Edentall',
    description: 'Protezarea dentară îți redă funcționalitatea și estetica zâmbetului pierdut. Află mai multe pe blogul Clinicii Edentall.'
  },
  'pasi-igiena-orala-corecta': {
    title: 'Pași pentru o igienă orală corectă — Blog Edentall',
    description: 'Sfaturi practice pentru periaj, folosirea aței dentare și menținerea unui zâmbet sănătos, pe blogul Clinicii Edentall.'
  },
  'alimentatie-sanatate-orala': {
    title: 'Rolul alimentației în sănătatea orală — Blog Edentall',
    description: 'Descoperă cum o dietă echilibrată poate proteja dinții de carii și bolile gingivale, pe blogul Clinicii Edentall.'
  },
  'importanta-ingrijirii-dentare-copii': {
    title: 'Îngrijirea dentară la copii — Blog Edentall',
    description: 'Cum să educi copiii să aibă grijă de dinții lor și să previi cariile, pe blogul Clinicii Edentall.'
  },
  'pregatire-vizita-dentist-copii': {
    title: 'Pregătirea copilului pentru prima vizită la dentist — Blog Edentall',
    description: 'Sfaturi practice pentru a transforma prima vizită la dentist într-o experiență pozitivă pentru copilul tău.'
  }
};

const DEFAULT_SERVICE_TITLE = 'Servicii stomatologice — Clinica Edentall Brașov';
const DEFAULT_SERVICE_DESCRIPTION = 'Descoperă serviciile stomatologice oferite de Clinica Edentall Brașov: profilaxie, ortodonție, implanturi și multe altele.';
const DEFAULT_BLOG_TITLE = 'Blog stomatologic — Clinica Edentall Brașov';
const DEFAULT_BLOG_DESCRIPTION = 'Articole despre sănătate orală, tratamente stomatologice și sfaturi de prevenție, semnate de Clinica Edentall Brașov.';

export function resolveServiceTitle(route: ActivatedRouteSnapshot): string {
  const slug = route.paramMap.get('slug') ?? '';
  return SERVICE_SEO[slug]?.title ?? DEFAULT_SERVICE_TITLE;
}

export function resolveServiceDescription(route: ActivatedRouteSnapshot): string {
  const slug = route.paramMap.get('slug') ?? '';
  return SERVICE_SEO[slug]?.description ?? DEFAULT_SERVICE_DESCRIPTION;
}

export function resolveBlogTitle(route: ActivatedRouteSnapshot): string {
  const slug = route.paramMap.get('slug') ?? '';
  return BLOG_SEO[slug]?.title ?? DEFAULT_BLOG_TITLE;
}

export function resolveBlogDescription(route: ActivatedRouteSnapshot): string {
  const slug = route.paramMap.get('slug') ?? '';
  return BLOG_SEO[slug]?.description ?? DEFAULT_BLOG_DESCRIPTION;
}
