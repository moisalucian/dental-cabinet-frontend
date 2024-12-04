import { CommonModule } from '@angular/common';
import { Component,AfterViewInit  } from '@angular/core';

import $ from 'jquery';

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

  ngAfterViewInit() {
    // Initialize Magnific Popup for gallery items
    $('.gallery-items').magnificPopup({
      delegate: 'a',  // Target <a> tags inside the .gallery-items container
      type: 'image',  // The type of content to be displayed (image)
      closeOnContentClick: false, // Don't close when content is clicked
      closeBtnInside: false, // Hide close button inside content
      mainClass: 'mfp-with-zoom', // Add zoom effect class
      image: {
        verticalFit: true, // Make sure the image fits vertically within the window
      },
      gallery: {
        enabled: true, // Enable gallery mode (for next/prev image navigation)
      },
      zoom: {
        enabled: true, // Enable zoom feature
        duration: 300, // Duration of the zoom animation
        opener: function(element: JQuery<HTMLElement>) {  // Explicitly typing 'element'
          return element.find('img'); // Use the image inside the <a> tag
        }
      }
    });
  }
}