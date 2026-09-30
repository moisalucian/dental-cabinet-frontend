import { Routes } from '@angular/router';
import {
    resolveBlogDescription,
    resolveBlogTitle,
    resolveServiceDescription,
    resolveServiceTitle
} from './core/seo/seo-data';

export const routes: Routes = [
    {
        path: '',
        title: 'Clinica Edentall Brașov — stomatologie, implant, ortodonție',
        data: {
            description: 'Clinica Edentall Brașov: stomatologie generală, implant dentar, ortodonție și estetică dentară. Programează o consultație astăzi.'
        },
        loadComponent: () =>
            import('./components/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'despre-noi',
        title: 'Despre noi — Clinica Edentall Brașov',
        data: {
            description: 'Află mai multe despre Clinica Edentall Brașov, echipa noastră și abordarea față de îngrijirea stomatologică.'
        },
        loadComponent: () =>
            import('./components/despre-noi/despre-noi.component').then((m) => m.DespreNoiComponent)
    },
    {
        path: 'servicii',
        title: 'Servicii stomatologice — Clinica Edentall Brașov',
        data: {
            description: 'Descoperă gama completă de servicii stomatologice oferite de Clinica Edentall Brașov: profilaxie, ortodonție, protetică și multe altele.'
        },
        loadComponent: () =>
            import('./components/servicii/servicii.component').then((m) => m.ServiciiComponent)
    },
    {
        path: 'servicii/:slug',
        title: resolveServiceTitle,
        resolve: {
            description: resolveServiceDescription
        },
        loadComponent: () =>
            import('./components/servicii-detalii/servicii-detalii.component').then((m) => m.ServiciiDetaliiComponent)
    },
    {
        path: 'blog',
        title: 'Blog stomatologic — Clinica Edentall Brașov',
        data: {
            description: 'Articole despre sănătate orală, tratamente stomatologice și sfaturi de prevenție, semnate de Clinica Edentall Brașov.'
        },
        loadComponent: () =>
            import('./components/blog/blog.component').then((m) => m.BlogComponent)
    },
    {
        path: 'blog/:slug',
        title: resolveBlogTitle,
        resolve: {
            description: resolveBlogDescription
        },
        loadComponent: () =>
            import('./components/blog-detalii/blog-detalii.component').then((m) => m.BlogDetaliiComponent)
    },
    {
        path: 'echipa',
        title: 'Echipa noastră — Clinica Edentall Brașov',
        data: {
            description: 'Cunoaște echipa de medici stomatologi ai Clinicii Edentall Brașov, dedicată sănătății zâmbetului tău.'
        },
        loadComponent: () =>
            import('./components/echipa/echipa.component').then((m) => m.EchipaComponent)
    },
    {
        path: 'galerie',
        title: 'Galerie foto — Clinica Edentall Brașov',
        data: {
            description: 'Vezi cabinetul, echipamentele și atmosfera Clinicii Edentall Brașov în galeria noastră foto.'
        },
        loadComponent: () =>
            import('./components/galerie/galerie.component').then((m) => m.GalerieComponent)
    },
    {
        path: 'tarife',
        title: 'Tarife stomatologie Brașov — Clinica Edentall',
        data: {
            description: 'Consultă lista de tarife pentru serviciile stomatologice oferite de Clinica Edentall Brașov: profilaxie, ortodonție, implanturi și altele.'
        },
        loadComponent: () =>
            import('./components/tarife/tarife.component').then((m) => m.TarifeComponent)
    },
    // {
    //     path: 'promo',
    //     loadComponent: () =>
    //         import('./components/promo/promo.component').then((m) => m.PromoComponent)
    // },
    {
        path: 'contact',
        title: 'Contact și program — Clinica Edentall Brașov',
        data: {
            description: 'Contactează Clinica Edentall Brașov: adresă, telefon, e-mail și programul cabinetului stomatologic.'
        },
        loadComponent: () =>
            import('./components/contact/contact.component').then((m) => m.ContactComponent)
    },
    {
        path: 'intrebari-frecvente',
        title: 'Întrebări frecvente — Clinica Edentall Brașov',
        data: {
            description: 'Răspunsuri la cele mai frecvente întrebări despre serviciile și programările la Clinica Edentall Brașov.'
        },
        loadComponent: () =>
            import('./components/intrebari-frecvente/intrebari-frecvente.component').then((m) => m.IntrebariFrecventeComponent)
    },
    {
        path: 'not-found',
        title: 'Pagină negăsită — Clinica Edentall Brașov',
        data: {
            description: 'Pagina căutată nu a fost găsită. Explorează serviciile Clinicii Edentall Brașov.'
        },
        loadComponent: () =>
            import('./components/not-found/not-found.component').then((m) => m.NotFoundComponent)
    }
];
