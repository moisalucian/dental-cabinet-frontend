import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import {NgwWowService} from 'ngx-wow';
import { filter } from 'rxjs/operators';
declare var SmoothScroll: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'Edentall - Clinica Stomatologica';

  isLoading: boolean = true;

  constructor(private wowService: NgwWowService, private router: Router){
    this.wowService.init();
  }

  ngOnInit() {
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

    // Listen for navigation end events to hide preloader after route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        this.isLoading = false;
      }, 100);
    });

    // Safety timeout: force hide preloader after maximum 3 seconds
    // This prevents the preloader from getting stuck indefinitely
    setTimeout(() => {
      if (this.isLoading) {
        console.warn('Preloader forced to hide after timeout');
        this.isLoading = false;
      }
    }, 3000);
  }

  ngAfterViewInit() {
    // Initialize SmoothScroll
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 600,
      speedAsDuration: true
    });
  }
}
