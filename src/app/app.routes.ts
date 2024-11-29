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
        path: 'tarife',
        loadComponent: () =>
            import('./components/tarife/tarife.component').then((m) => m.TarifeComponent)
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./components/contact/contact.component').then((m) => m.ContactComponent)
    },
    {
        path: 'termeni-si-conditii',
        loadComponent: () =>
            import('./components/termeni-si-conditii/termeni-si-conditii.component').then((m) => m.TermeniSiConditiiComponent)
    },
    {
        path: 'confidentialitate',
        loadComponent: () =>
            import('./components/confidentialitate/confidentialitate.component').then((m) => m.ConfidentialitateComponent)
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
