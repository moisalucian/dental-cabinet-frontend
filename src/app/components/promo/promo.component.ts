import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-promo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent {
  serviceBundles = [
    {
      slug: 'profilaxie-completa',
      title: 'Pachet Profilaxie',
      description: 'Detartraj + Periaj dentar + Airflow',
      date: '',
      discount: '15% Reducere',
      icon: 'assets/img/icons/icon-services-1.svg'
    },
    {
      slug: 'albire-plus-consult',
      title: 'Pachet Albire',
      description: 'Albire profesională + Consult estetic dentar',
      date: '',
      discount: '10% Reducere',
      icon: 'assets/img/icons/icon-services-5.svg'
    },
    {
      slug: 'ortodontie-initial',
      title: 'Pachet Ortodonție',
      description: 'Consult ortodontic + Radiografie + Plan tratament',
      date: '',
      discount: '15% Reducere',
      icon: 'assets/img/icons/icon-services-6.svg'
    }
  ];

  seasonalPromos = [
    {
      slug: 'albire-craciun',
      title: 'Albire dentară - Crăciun',
      description: 'Albire profesională la preț redus pentru un zâmbet strălucitor de sărbători!',
      date: '15-23 Decembrie',
      discount: '20% Reducere',
      icon: 'assets/img/icons/icon-star.svg'
    },
    {
      slug: 'valentines-day',
      title: 'Zâmbet în doi - Februarie',
      description: 'Albire pentru cupluri - Adu partenerul și primiți reducere împreună!',
      date: '1-14 Februarie',
      discount: '25% Reducere',
      icon: 'assets/img/icons/icon-why-us-2.svg'
    },
    {
      slug: 'back-to-school',
      title: 'Back to School - Septembrie',
      description: 'Consultații și sigilarea dinților pentru copii la preț special!',
      date: '1-15 Septembrie',
      discount: 'Consult Gratuit',
      icon: 'assets/img/icons/icon-why-us-1.svg'
    }
  ];
}
