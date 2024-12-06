import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-echipa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './echipa.component.html',
  styleUrls: ['./echipa.component.scss'],
  providers: []
})
export class EchipaComponent {
  teamMembers = [
    {
      name: 'Dr. Baciu Bogdan',
      roles: ['Medic coordonator', 'Parodontologie', 'Ortodontie'],
      image: 'assets/img/echipa/baciu-bogdan-1.webp',
      socialLinks: [
        { icon: 'fa-brands fa-facebook-f', url: 'https://facebook.com/johanj' },
        { icon: 'fa-brands fa-youtube', url: 'https://youtube.com/johanj' },
        { icon: 'fa-brands fa-instagram', url: 'https://instagram.com/johanj' },
        { icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com/johanj' },
      ],
    },
    {
      name: 'Larisa Tudor',
      roles: ['Asistent Medical'],
      image: 'assets/img/echipa/larisa-tudor-1.webp',
      socialLinks: [
        { icon: 'fa-brands fa-facebook-f', url: 'https://facebook.com/johanj' },
        { icon: 'fa-brands fa-youtube', url: 'https://youtube.com/johanj' },
        { icon: 'fa-brands fa-instagram', url: 'https://instagram.com/johanj' },
        { icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com/johanj' },
      ],
    },
    {
      name: 'Maria Alexandra Stan',
      roles: ['Asistent - Front Desk'],
      image: 'assets/img/echipa/maria-alexandrina-stan-1.webp',
      socialLinks: [
        { icon: 'fa-brands fa-facebook-f', url: 'https://facebook.com/johanj' },
        { icon: 'fa-brands fa-youtube', url: 'https://youtube.com/johanj' },
        { icon: 'fa-brands fa-instagram', url: 'https://instagram.com/johanj' },
        { icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com/johanj' },
      ],
    },
  ];
}
