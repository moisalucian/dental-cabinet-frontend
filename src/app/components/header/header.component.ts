import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    // Initialize SlickNav after the view has been rendered
    $('#menu').slicknav({
      label: '',
      prependTo: '.responsive-menu',  // This will place the mobile menu inside the `.responsive-menu` div
    });

    // Scroll to top functionality for any anchor link with href="#top"
    if ($("a[href='#top']").length) {
      $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    }
  }
}