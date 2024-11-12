import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/home/home.component').then((m) => m.HomeComponent)
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
    }
];
