import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  posts = [
    {
      slug: 'importanta-consultatiilor-dentare',
      title: 'Importanța consultațiilor dentare regulate',
      summary: 'Consultațiile dentare regulate te ajută să previi afecțiunile grave și să menții sănătatea orală.',
      image: 'assets/img/blog/blog-post-1.webp',
    },
    {
      slug: 'beneficii-albire-profesionala',
      title: 'Beneficiile albirii dentare profesionale',
      summary: 'Descoperă cum albirea profesională îți poate îmbunătăți estetica și încrederea în sine.',
      image: 'assets/img/blog/blog-post-2.webp',
    },
    {
      slug: 'ghid-implanturi-dentare',
      title: 'Ghid complet pentru implanturile dentare',
      summary: 'Află ce implică procesul unui implant dentar și cum îți poate transforma zâmbetul.',
      image: 'assets/img/blog/blog-post-3.webp',
    },
    {
      slug: 'rolul-fluorului-prevenirea-cariilor',
      title: 'Rolul fluorului în prevenirea cariilor dentare',
      summary: 'Cum ajută fluorul la întărirea smalțului și la protejarea dinților împotriva cariilor.',
      image: 'assets/img/blog/blog-post-4.webp',
    },
    {
      slug: 'sensibilitatea-dentara-cauze-tratamente',
      title: 'Sensibilitatea dentară: cauze și tratamente',
      summary: 'Identifică motivele sensibilității dentare și metodele de reducere a disconfortului.',
      image: 'assets/img/blog/blog-post-5.webp',
    },
    {
      slug: 'avantajele-protezarii-dentare',
      title: 'Avantajele protezării dentare: soluții moderne',
      summary: 'Protezarea dentară îți redă funcționalitatea și estetica zâmbetului pierdut.',
      image: 'assets/img/blog/blog-post-6.webp',
    },
    {
      slug: 'pasi-igiena-orala-corecta',
      title: 'Pași pentru o igienă orală corectă',
      summary: 'Sfaturi practice pentru periaj, folosirea aței dentare și menținerea unui zâmbet sănătos.',
      image: 'assets/img/blog/blog-post-7.webp',
    },
    {
      slug: 'alimentatie-sanatate-orala',
      title: 'Rolul alimentației în menținerea sănătății orale',
      summary: 'Descoperă cum o dietă echilibrată poate proteja dinții de carii și bolile gingivale, contribuind la un zâmbet sănătos și strălucitor.',
      image: 'assets/img/blog/blog-post-8.webp',
    },
    {
      slug: 'importanta-ingrijirii-dentare-copii',
      title: 'Importanța îngrijirii dentare la copii',
      summary: 'Cum să educi copiii să aibă grijă de dinții lor și să previi cariile.',
      image: 'assets/img/blog/blog-post-9.webp',
    },
    {
      slug: 'pregatire-vizita-dentist-copii',
      title: 'Cum să-ți pregătești copilul pentru prima vizită la dentist',
      summary: 'Află sfaturi practice pentru a transforma prima vizită la dentist într-o experiență pozitivă și lipsită de stres pentru copilul tău.',
      image: 'assets/img/blog/blog-post-10.webp',
    }
  ];

  postsPerPage = 6; // Number of posts to display per page
  currentPage = 1;

  get paginatedPosts() {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    return this.posts.slice(startIndex, startIndex + this.postsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.posts.length / this.postsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

}
