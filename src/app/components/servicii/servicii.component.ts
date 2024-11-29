import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicii',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicii.component.html',
  styleUrls: ['./servicii.component.scss']
})
export class ServiciiComponent {
  services = [
    {
        slug: 'profilaxie-dentara',
        title: 'Profilaxie dentară',
        description: 'Prevenția este cheia sănătății orale. Oferim detartraje, periaj profesional și consultanță personalizată pentru a menține sănătatea zâmbetului tău.'
    },
    {
        slug: 'stomatologie-generala',
        title: 'Stomatologie generală',
        description: 'Asigurăm tratamente complete pentru sănătatea dentară a întregii familii, de la consultații de rutină la tratamente pentru afecțiuni comune.'
    },
    {
        slug: 'endodontie',
        title: 'Endodonție',
        description: 'Salvăm dinții afectați de infecții profunde prin tratamente de canal moderne și minim invazive, asigurând confortul și funcționalitatea acestora.'
    },
    {
        slug: 'parodontologie',
        title: 'Parodontologie',
        description: 'Tratăm și prevenim afecțiunile gingivale și parodontale, ajutând la menținerea sănătății structurii de susținere a dinților tăi.'
    },
    {
        slug: 'ortodontie',
        title: 'Ortodonție',
        description: 'Corectăm alinierea dinților și maxilarelor cu aparate dentare moderne, pentru un zâmbet armonios și o masticație corectă.'
    },
    {
        slug: 'protetica-dentara',
        title: 'Protetică dentară',
        description: 'Redăm funcționalitatea și estetica danturii prin lucrări protetice personalizate, precum coroane, punți sau proteze dentare.'
    },
    {
        slug: 'estetica-dentara',
        title: 'Estetică dentară',
        description: 'Transformăm zâmbetul tău cu tratamente estetice precum fațete dentare, albiri profesionale și remodelări personalizate.'
    },
    {
        slug: 'chirurgie-dentara',
        title: 'Chirurgie dentară',
        description: 'Oferim soluții chirurgicale pentru cazuri complexe, cum ar fi extracții, implanturi dentare și tratamente pentru afecțiuni maxilare.'
    },
    {
        slug: 'stomatologie-copii',
        title: 'Stomatologie copii',
        description: 'Îngrijire dentară blândă și prietenoasă pentru cei mici, de la prevenție la tratamente, pentru a le asigura o sănătate orală de durată.'
    }
  ];

  getIconId(slug: string): number {
    const iconMap: Partial<Record<string, number>> = {
      'profilaxie-dentara': 1,
      'stomatologie-generala': 2,
      'endodontie': 3,
      'parodontologie': 4,
      'ortodontie': 5,
      'protetica-dentara': 6,
      'estetica-dentara': 7,
      'chirurgie-dentara': 8,
      'stomatologie-copii': 9
    };
    return iconMap[slug] ?? 1;
  }
}