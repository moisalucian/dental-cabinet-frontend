import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-intrebari-frecvente',
  standalone: true,
  imports: [RouterModule],
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
