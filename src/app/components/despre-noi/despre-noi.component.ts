import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { EchipaComponent } from '../echipa/echipa.component';

declare var $: any;

@Component({
  selector: 'app-despre-noi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './despre-noi.component.html',
  styleUrls: ['./despre-noi.component.scss'],
  providers: [EchipaComponent]
})
export class DespreNoiComponent implements OnInit, AfterViewInit, OnDestroy {
  firstFourTeamMembers: any[] = [];

  constructor(private echipaComponent: EchipaComponent) {}

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

    // Initialize Parallaxie on the '.parallaxie' class
    this.initializeParallaxie();
    window.addEventListener('resize', this.initializeParallaxie.bind(this)); // Handle window resize
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.initializeParallaxie.bind(this)); // Cleanup event listener
  }

  private initializeParallaxie() {
    const $parallaxie = $('.parallaxie');

    // Only apply the Parallaxie effect if the screen is above the tablet breakpoint (768px)
    if ($parallaxie.length && window.innerWidth > 768) {
      if (window.innerWidth > 991) {
        // Initialize Parallaxie on desktop
        $parallaxie.parallaxie({
          speed: 0.55,
          offset: 0,
        });
      } else {
        // Optionally, you can initialize a different effect or behavior for tablet screens
        $parallaxie.parallaxie({
          speed: 0.3,
          offset: 0,
        });
      }
    }
  }
}