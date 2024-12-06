import { Component, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    // Ensure jQuery and SlickNav are available before initialization
    this.verifySlickNav();

    // Initialize SlickNav for mobile menu
    this.initSlickNav();

    // Listen for scroll and resize events for the sticky header
    window.addEventListener('resize', this.setHeaderHeight);
    window.addEventListener('scroll', this.onScroll);

    // Scroll to top on anchor click
    $("a[href='#top']").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  }

  ngOnDestroy() {
    // Clean up event listeners to avoid memory leaks
    window.removeEventListener('resize', this.setHeaderHeight);
    window.removeEventListener('scroll', this.onScroll);
  }

  // Check if SlickNav is available
  verifySlickNav() {
    if (typeof $.fn.slicknav === 'function') {
      console.log('SlickNav is available');
    } else {
      console.error('SlickNav is not available');
    }
  }

  // Initialize SlickNav for mobile menu
  initSlickNav() {
    $(document).ready(() => {
      if ($('#menu').length && typeof $.fn.slicknav === 'function') {
        $('#menu').slicknav({
          label: '',  // No text for the menu button
          prependTo: '.responsive-menu',  // The mobile menu will be inserted here
        });
      } else {
        console.error('SlickNav is not available');
      }
    });
  }

  setHeaderHeight = () => {
    const headerSticky = document.querySelector('header.main-header .header-sticky') as HTMLElement;
    if (headerSticky) {
      const headerHeight = headerSticky.offsetHeight;
      document.querySelector('header.main-header')?.setAttribute('style', `height: ${headerHeight}px`);
    }
  }

  onScroll = () => {
    const fromTop = window.scrollY;
    const headerSticky = document.querySelector('header.main-header .header-sticky') as HTMLElement;
    const headerHeight = headerSticky?.offsetHeight || 0;

    // Toggle classes based on scroll position
    if (headerSticky) {
      if (fromTop > headerHeight + 100) {
        this.renderer.addClass(headerSticky, 'hide');
      } else {
        this.renderer.removeClass(headerSticky, 'hide');
      }

      if (fromTop > 600) {
        this.renderer.addClass(headerSticky, 'active');
      } else {
        this.renderer.removeClass(headerSticky, 'active');
      }
    }
  };
}
