import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'despre-noi',
        loadComponent: () =>
            import('./components/despre-noi/despre-noi.component').then((m) => m.DespreNoiComponent)
    },
    {
        path: 'servicii',
        loadComponent: () =>
            import('./components/servicii/servicii.component').then((m) => m.ServiciiComponent)
    },
    {
        path: 'servicii/:slug',
        loadComponent: () =>
            import('./components/servicii-detalii/servicii-detalii.component').then((m) => m.ServiciiDetaliiComponent)
    },
    {
        path: 'blog',
        loadComponent: () =>
            import('./components/blog/blog.component').then((m) => m.BlogComponent)
    },
    {
        path: 'blog/:slug',
        loadComponent: () =>
            import('./components/blog-detalii/blog-detalii.component').then((m) => m.BlogDetaliiComponent)
    },
    {
        path: 'echipa',
        loadComponent: () =>
            import('./components/echipa/echipa.component').then((m) => m.EchipaComponent)
    },
    {
        path: 'galerie',
        loadComponent: () =>
            import('./components/galerie/galerie.component').then((m) => m.GalerieComponent)
    },
    {
        path: 'tarife',
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
        loadComponent: () =>
            import('./components/contact/contact.component').then((m) => m.ContactComponent)
    },
    {
        path: 'intrebari-frecvente',
        loadComponent: () =>
            import('./components/intrebari-frecvente/intrebari-frecvente.component').then((m) => m.IntrebariFrecventeComponent)
    },
    {
        path: 'not-found',
        loadComponent: () =>
            import('./components/not-found/not-found.component').then((m) => m.NotFoundComponent)
    }
];
