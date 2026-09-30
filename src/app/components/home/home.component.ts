import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EchipaComponent } from '../echipa/echipa.component';
import 'magnific-popup';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PromoComponent } from '../promo/promo.component';
declare var $: any;
declare var Swiper: any;
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, PromoComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [EchipaComponent]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  // Define the width breakpoints
  private desktopBreakpoint = 991;
  private tabletBreakpoint = 768;

  firstFourTeamMembers: any[] = [];

  constructor(
    private echipaComponent: EchipaComponent
  ) { }

  ngOnInit(): void {
    this.firstFourTeamMembers = this.echipaComponent.teamMembers.slice(0, 4);
  }

  ngAfterViewInit() {
    // Initialize Magnific Popup on the '.popup-video' class
    $('.popup-video').magnificPopup({
      type: 'iframe', // Use iframe type for YouTube video
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com',
            id: 'v=',
            src: 'https://www.youtube.com/embed/%id%?autohide=1&showinfo=0' // Embed URL format
          }
        }
      }
    });

    this.initializeParallaxie();
    window.addEventListener('resize', this.initializeParallaxie.bind(this)); // Handle window resize

    // Initialize Swiper after the view has been rendered
    const testimonialSlider = new Swiper('.testimonial-slider .swiper', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
        }
      }
    });

    // Initialize Bootstrap Carousel
    const myCarousel = document.querySelector('#carouselExampleCaptions');
    if (myCarousel) {
      new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        ride: 'carousel'
      });
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.initializeParallaxie.bind(this)); // Cleanup event listener
  }

  private initializeParallaxie() {
    const $parallaxie = $('.parallaxie');

    // Only apply the Parallaxie effect if the screen is above the tablet breakpoint (768px)
    if ($parallaxie.length && window.innerWidth > this.tabletBreakpoint) {
      if (window.innerWidth > this.desktopBreakpoint) {
        // Initialize Parallaxie on desktop
        $parallaxie.parallaxie({
          speed: 0.55,
          offset: 0,
        });
      } else {
        // Optionally, you can initialize a different effect or behavior for tablet screens
        // This can be customized depending on your needs
        $parallaxie.parallaxie({
          speed: 0.3,
          offset: 0,
        });
      }
    }
  }
}