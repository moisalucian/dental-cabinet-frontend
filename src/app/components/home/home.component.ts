import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import 'magnific-popup';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set page title
    this.titleService.setTitle("Edentall - Clinica Stomatologica");

    // Add meta tags
    this.metaService.addTags([
      { name: 'description', content: '' },
      { name: 'keywords', content: '' },
      { name: 'author', content: 'Awaiken' },
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ]);
  }
}