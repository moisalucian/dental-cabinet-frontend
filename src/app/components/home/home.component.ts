import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { EchipaComponent } from '../echipa/echipa.component';
import 'magnific-popup';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [EchipaComponent]
})
export class HomeComponent implements OnInit {
  firstFourTeamMembers: any[] = [];

  constructor(private titleService: Title, 
    private metaService: Meta,
    private echipaComponent: EchipaComponent) {}

  ngOnInit(): void {
    // Set page title
    this.titleService.setTitle("Edentall - Clinica Stomatologica");
    this.firstFourTeamMembers = this.echipaComponent.teamMembers.slice(0, 4);

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