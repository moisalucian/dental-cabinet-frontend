import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/home/home.component';
import { TarifeComponent } from '../components/tarife/tarife.component';
import { TermeniSiConditiiComponent } from '../components/termeni-si-conditii/termeni-si-conditii.component';
import { ConfidentialitateComponent } from '../components/confidentialitate/confidentialitate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, HeaderComponent, FooterComponent, TarifeComponent, TermeniSiConditiiComponent, ConfidentialitateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dental-cabinet-frontend';
}
