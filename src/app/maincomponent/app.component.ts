import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import {NgwWowService} from 'ngx-wow';
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

  constructor(private wowService: NgwWowService){
    this.wowService.init();
  }

  ngOnInit() {
    // Listen for the window load event to hide the preloader
    window.onload = () => {
      this.isLoading = false; // Hide preloader after window has loaded
    };
    
  }
  
  ngAfterViewInit() {
    // Initialize SmoothScroll
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 600,
      speedAsDuration: true
    });
  }
}
