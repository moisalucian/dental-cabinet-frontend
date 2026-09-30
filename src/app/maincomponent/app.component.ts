import { AfterViewInit, Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NgwWowService } from 'ngx-wow';
import { filter } from 'rxjs/operators';
declare var SmoothScroll: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Edentall - Clinica Stomatologica';

  isLoading: boolean = true;

  constructor(
    private wowService: NgwWowService,
    private ngZone: NgZone,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initialize WOW only in browser
    if (isPlatformBrowser(this.platformId)) {
      this.wowService.init();
    }
  }

  addJsonLd() {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Clinica Edentall",
      "image": "assets/img/carousel/home-2.webp",
      "description": "Clinica Edentall Brașov: stomatologie generală, implant dentar, ortodonție și estetică dentară.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Strada Ștefan Baciu nr. 45",
        "addressLocality": "Brașov",
        "postalCode": "500170",
        "addressCountry": "RO"
      },
      "telephone": "+40770793767",
      "openingHours": "Mo-Fr 09:00-17:00"
    });
    this.document.head.appendChild(script);
  }

  ngOnInit() {
    this.addJsonLd();

    if (isPlatformBrowser(this.platformId)) {
      // Listen for the window load event to hide the preloader
      window.addEventListener('load', () => {
        this.isLoading = false; // Hide preloader after window has loaded
      });

      // Handle Safari's back-forward cache (bfcache)
      // This event fires when page is restored from cache
      window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
          // Page was restored from bfcache, hide preloader immediately
          this.isLoading = false;
        }
      });

      // Fallback: If document is already loaded (shouldn't happen in ngOnInit, but just in case)
      if (document.readyState === 'complete') {
        this.isLoading = false;
      }

      // Safety timeout: force hide preloader after maximum 3 seconds
      // This prevents the preloader from getting stuck indefinitely
      setTimeout(() => {
        if (this.isLoading) {
          console.warn('Preloader forced to hide after timeout');
          this.isLoading = false;
        }
      }, 3000);
    }

    // Listen for navigation end events to hide preloader after route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        this.isLoading = false;
      }, 100);
    });
  }


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize SmoothScroll
      const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 600,
        speedAsDuration: true
      });
    }
  }
}
