import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent {
  galleryImages = [
    '/assets/img/galerie/galerie-1.png',
    '/assets/img/galerie/galerie-2.png',
    '/assets/img/galerie/galerie-3.png',
    '/assets/img/galerie/galerie-4.png',
    '/assets/img/galerie/galerie-5.png',
    '/assets/img/galerie/galerie-6.png',
    '/assets/img/galerie/galerie-7.png',
    '/assets/img/galerie/galerie-8.png',
    '/assets/img/galerie/galerie-9.png',
    '/assets/img/galerie/galerie-10.png',
    '/assets/img/galerie/galerie-11.png',
    '/assets/img/galerie/galerie-12.png'
  ];
}