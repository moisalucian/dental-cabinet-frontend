import { CommonModule } from '@angular/common';
import { Component,AfterViewInit  } from '@angular/core';

declare var $: any;

declare global {
  interface JQuery {
    magnificPopup(options?: any): JQuery;
  }
}

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent implements AfterViewInit {
  galleryImages = [
    '/assets/img/galerie/galerie-1.webp',
    '/assets/img/galerie/galerie-2.webp',
    '/assets/img/galerie/galerie-3.webp',
    '/assets/img/galerie/galerie-4.webp',
    '/assets/img/galerie/galerie-5.webp',
    '/assets/img/galerie/galerie-6.webp',
    '/assets/img/galerie/galerie-7.webp',
    '/assets/img/galerie/galerie-8.webp',
    '/assets/img/galerie/galerie-9.webp',
    '/assets/img/galerie/galerie-10.webp',
    '/assets/img/galerie/galerie-11.webp',
    '/assets/img/galerie/galerie-12.webp'
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      $('.gallery-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
          verticalFit: true,
        },
        gallery: {
          enabled: true,
        },
        zoom: {
          enabled: true,
          duration: 300,
          opener: function(element: any) {
            return element.find('img');
          }
        }
      });
    }, 0);
  }
}