import { Component, AfterViewInit, HostListener, NgZone } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  isSticky: boolean = false;

  constructor(
    private router: Router,
    private ngZone: NgZone
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 0;
  }

  ngAfterViewInit() {
    // Initialize SlickNav after the view has been rendered
    $('#menu').slicknav({
      label: '',
      prependTo: '.responsive-menu',  // This will place the mobile menu inside the `.responsive-menu` div
    });

    // SlickNav clones #menu for the mobile view, so the cloned anchors lose Angular's
    // routerLink click handling. Re-route internal link clicks through the Angular Router.
    this.bindMobileMenuRouterNavigation();

    // Scroll to top functionality for any anchor link with href="#top"
    if ($("a[href='#top']").length) {
      $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    }
  }

  private bindMobileMenuRouterNavigation(): void {
    $('.responsive-menu').on('click', 'a[href^="/"]', (event: any) => {
      // SlickNav already preventDefault()s parent (submenu-toggle) items; skip those.
      if (event.isDefaultPrevented() || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) {
        return;
      }

      const href = $(event.currentTarget).attr('href');
      if (!href) {
        return;
      }

      event.preventDefault();
      this.ngZone.run(() => this.router.navigateByUrl(href));
    });
  }
}
