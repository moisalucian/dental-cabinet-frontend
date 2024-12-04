import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class DespreNoiComponent implements OnInit,AfterViewInit {
  firstFourTeamMembers: any[] = [];

  constructor(
    private echipaComponent: EchipaComponent) {}

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
    }
}
