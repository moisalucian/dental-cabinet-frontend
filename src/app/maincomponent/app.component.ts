import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
declare var WOW: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Edentall - Clinica Stomatologica';

  isLoading: boolean = true;

  ngOnInit() {
    // Listen for the window load event to hide the preloader
    window.onload = () => {
      this.isLoading = false; // Hide preloader after window has loaded
    };
    new WOW().init();
  }
}
