import { Component } from '@angular/core';

@Component({
  selector: 'app-intrebari-frecvente',
  standalone: true,
  imports: [],
  templateUrl: './intrebari-frecvente.component.html',
  styleUrl: './intrebari-frecvente.component.scss'
})
export class IntrebariFrecventeComponent {

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
