import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-servicii-detalii',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicii-detalii.component.html',
  styleUrls: ['./servicii-detalii.component.scss']
})
export class ServiciiDetaliiComponent implements OnInit {
  serviceSlug: string = '';
  serviceDetails: any;

  // Example service data (this could later come from an API or service)
  services = [
    {
      slug: 'profilaxie-dentara',
      title: 'Profilaxie dentară',
      description: 'Prevenția este cheia sănătății orale. Oferim detartraje, periaj profesional și consultanță personalizată pentru a menține sănătatea zâmbetului tău.',
      additionalInfo: 'Aceasta include detartraj, periaj profesional și consultanță personalizată.',
      benefits: ['Prevenirea cariilor', 'Menținerea sănătății gingiilor', 'Reducerea riscului de boli parodontale', 'Respirație proaspătă'],
      featuredImage: 'assets/img/servicii/profilaxie-img-1.webp',
      extraImages: [
        'assets/img/servicii/profilaxie-img-2.webp',
        'assets/img/servicii/profilaxie-img-3.webp'
      ],
      conclusion: 'Alege profilaxia dentară pentru un zâmbet de lungă durată.',
      faqs: [
        {
          question: 'De ce este importantă profilaxia dentară?',
          answer: 'Ajută la prevenirea problemelor dentare și menține sănătatea orală pe termen lung.'
        },
        {
          question: 'Cât de des ar trebui să fac profilaxie dentară?',
          answer: 'Recomandăm vizite de profilaxie la fiecare 6 luni.'
        }
      ]
    },
    {
      slug: 'stomatologie-generala',
      title: 'Stomatologie generală',
      description: 'Asigurăm tratamente complete pentru sănătatea dentară a întregii familii, de la consultații de rutină la tratamente pentru afecțiuni comune.',
      additionalInfo: 'Include proceduri precum obturații, igienizare profesională și tratamente pentru afecțiuni generale.',
      benefits: ['Consultații personalizate', 'Tratamente pentru afecțiuni comune', 'Sănătatea întregii familii', 'Diagnosticare timpurie'],
      featuredImage: 'assets/img/servicii/stomatologie-generala-img-1.webp',
      extraImages: [
        'assets/img/servicii/stomatologie-generala-img-2.webp',
        'assets/img/servicii/stomatologie-generala-img-3.webp'
      ],
      conclusion: 'Alege stomatologia generală pentru îngrijirea completă a zâmbetului tău.',
      faqs: [
        {
          question: 'Ce include stomatologia generală?',
          answer: 'Include consultații, obturații, igienizare profesională și alte proceduri pentru sănătatea dentară de bază.'
        },
        {
          question: 'Este potrivită pentru întreaga familie?',
          answer: 'Da, oferim tratamente personalizate pentru toate vârstele.'
        }
      ]
    },
    {
      slug: 'endodontie',
      title: 'Endodonție',
      description: 'Salvăm dinții afectați de infecții profunde prin tratamente de canal moderne și minim invazive, asigurând confortul și funcționalitatea acestora.',
      additionalInfo: 'Tratamentele de canal moderne asigură o durere minimă și rezultate optime.',
      benefits: ['Confort în timpul tratamentului', 'Salvarea dinților naturali', 'Prevenirea infecțiilor recurente', 'Păstrarea structurii dentare'],
      featuredImage: 'assets/img/servicii/endodontie-img-1.webp',
      extraImages: [
        'assets/img/servicii/endodontie-img-2.webp',
        'assets/img/servicii/endodontie-img-3.webp'
      ],
      conclusion: 'Endodonția îți păstrează sănătatea zâmbetului fără durere.',
      faqs: [
        {
          question: 'Ce este tratamentul de canal?',
          answer: 'Procedura prin care este eliminată pulpa infectată a dintelui și se sigilează interiorul acestuia.'
        },
        {
          question: 'Este dureros tratamentul de canal?',
          answer: 'Tratamentele moderne sunt minim invazive și nedureroase.'
        }
      ]
    },
    {
      slug: 'parodontologie',
      title: 'Parodontologie',
      description: 'Tratăm și prevenim afecțiunile gingivale și parodontale, ajutând la menținerea sănătății structurii de susținere a dinților tăi.',
      additionalInfo: 'Proceduri avansate pentru sănătatea gingiilor și a osului dentar.',
      benefits: ['Prevenirea gingivitei', 'Tratamentul bolilor parodontale', 'Menținerea structurii dentare', 'Reducerea inflamațiilor gingivale'],
      featuredImage: 'assets/img/servicii/parodontologie-img-1.webp',
      extraImages: [
        'assets/img/servicii/parodontologie-img-2.webp',
        'assets/img/servicii/parodontologie-img-3.webp'
      ],
      conclusion: 'Sănătatea gingiilor este baza unui zâmbet sănătos.',
      faqs: [
        {
          question: 'Ce este parodontologia?',
          answer: 'Rama stomatologiei care se ocupă de sănătatea gingiilor și a osului dentar.'
        },
        {
          question: 'Cum pot preveni bolile parodontale?',
          answer: 'Prin controale regulate, igienă orală și tratamente preventive.'
        }
      ]
    },
    {
      slug: 'ortodontie',
      title: 'Ortodonție',
      description: 'Corectăm alinierea dinților și maxilarelor cu aparate dentare moderne, pentru un zâmbet armonios și o masticație corectă.',
      additionalInfo: 'Aparate dentare fixe sau mobile pentru toate vârstele.',
      benefits: ['Corectarea malocluziei', 'Zâmbet estetic', 'Masticație eficientă', 'Îmbunătățirea sănătății orale'],
      featuredImage: 'assets/img/servicii/ortodontie-img-1.webp',
      extraImages: [
        'assets/img/servicii/ortodontie-img-2.webp',
        'assets/img/servicii/ortodontie-img-3.webp'
      ],
      conclusion: 'Ortodonția te ajută să obții un zâmbet perfect.',
      faqs: [
        {
          question: 'Ce tipuri de aparate dentare există?',
          answer: 'Aparate fixe metalice, ceramice sau mobile.'
        },
        {
          question: 'Cât durează tratamentul ortodontic?',
          answer: 'Durata variază în funcție de complexitatea cazului, de obicei între 6 luni și 2 ani.'
        }
      ]
    },
    {
      slug: 'protetica-dentara',
      title: 'Protetică dentară',
      description: 'Redăm funcționalitatea și estetica danturii prin lucrări protetice personalizate, precum coroane, punți sau proteze dentare.',
      additionalInfo: 'Lucrări protetice de calitate pentru un zâmbet complet.',
      benefits: ['Refacerea funcționalității', 'Estetică îmbunătățită', 'Durabilitate crescută', 'Restabilirea încrederii în zâmbet'],
      featuredImage: 'assets/img/servicii/protetica-dentara-img-1.webp',
      extraImages: [
        'assets/img/servicii/protetica-dentara-img-2.webp',
        'assets/img/servicii/protetica-dentara-img-3.webp'
      ],
      conclusion: 'Protetică dentară pentru un zâmbet funcțional și estetic.',
      faqs: [
        {
          question: 'Ce sunt coroanele dentare?',
          answer: 'Reprezintă învelișuri care protejează sau refac dinții deteriorați.'
        },
        {
          question: 'Care sunt opțiunile pentru proteze dentare?',
          answer: 'Proteze fixe, mobile sau implanturi suportate.'
        }
      ]
    },
    {
      slug: 'estetica-dentara',
      title: 'Estetică dentară',
      description: 'Transformăm zâmbetul tău cu tratamente estetice precum fațete dentare, albiri profesionale și remodelări personalizate.',
      additionalInfo: 'Tratamente estetice personalizate pentru un zâmbet perfect.',
      benefits: ['Albire dentară', 'Fațete dentare', 'Restaurări estetice', 'Aspect natural și uniform'],
      featuredImage: 'assets/img/servicii/estetica-dentara-img-1.webp',
      extraImages: [
        'assets/img/servicii/estetica-dentara-img-2.webp',
        'assets/img/servicii/estetica-dentara-img-3.webp'
      ],
      conclusion: 'Estetica dentară îți oferă zâmbetul pe care îl meriți.',
      faqs: [
        {
          question: 'Ce sunt fațetele dentare?',
          answer: 'Foițe fine din porțelan aplicate pe suprafața frontală a dinților.'
        },
        {
          question: 'Cât durează albirea dentară?',
          answer: 'O sesiune în cabinet durează aproximativ 1 oră.'
        }
      ]
    },
    {
      slug: 'chirurgie-dentara',
      title: 'Chirurgie dentară',
      description: 'Oferim soluții chirurgicale pentru cazuri complexe, cum ar fi extracții, implanturi dentare și tratamente pentru afecțiuni maxilare.',
      additionalInfo: 'Chirurgie minim invazivă cu recuperare rapidă.',
      benefits: ['Implanturi dentare', 'Extracții fără durere', 'Corectarea afecțiunilor maxilare', 'Îmbunătățirea calității vieții'],
      featuredImage: 'assets/img/servicii/chirurgie-dentara-img-1.webp',
      extraImages: [
        'assets/img/servicii/chirurgie-dentara-img-2.webp',
        'assets/img/servicii/chirurgie-dentara-img-3.webp'
      ],
      conclusion: 'Chirurgia dentară modernă pentru tratamente complexe fără stres.',
      faqs: [
        {
          question: 'Sunt dureroase extracțiile dentare?',
          answer: 'Cu tehnologiile moderne și anestezie, extracțiile sunt complet nedureroase.'
        },
        {
          question: 'Ce este un implant dentar?',
          answer: 'O soluție pentru înlocuirea dinților lipsă printr-un șurub inserat în os.'
        }
      ]
    },
    {
      slug: 'stomatologie-copii',
      title: 'Stomatologie copii',
      description: 'Îngrijire dentară blândă și prietenoasă pentru cei mici, de la prevenție la tratamente, pentru a le asigura o sănătate orală de durată.',
      additionalInfo: 'Specializați în îngrijirea dentară a copiilor.',
      benefits: ['Prevenție dentară', 'Tratamente sigure', 'Abordare prietenoasă', 'Educație despre sănătatea orală'],
      featuredImage: 'assets/img/servicii/stomatologie-copii-img-1.webp',
      extraImages: [
        'assets/img/servicii/stomatologie-copii-img-2.webp',
        'assets/img/servicii/stomatologie-copii-img-3.webp'
      ],
      conclusion: 'Stomatologia pediatrică pentru un zâmbet sănătos de la o vârstă fragedă.',
      faqs: [
        {
          question: 'Când ar trebui să vină copilul la prima vizită?',
          answer: 'Recomandăm prima vizită înaintea împlinirii vârstei de 1 an.'
        },
        {
          question: 'Cum îi ajutăm pe copii să fie relaxați la dentist?',
          answer: 'Prin abordare prietenoasă și explicații pe înțelesul lor.'
        }
      ]
    }
  ];
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serviceSlug = params.get('slug') || '';
      this.serviceDetails = this.services.find(service => service.slug === this.serviceSlug);
    });
  }

  getSplitTitle(title: string): { firstWord: string; remainingWords: string } {
    const words = title.split(' ');
    return {
      firstWord: words[0], // The first word
      remainingWords: words.slice(1).join(' ') // The rest of the title
    };
  }
}