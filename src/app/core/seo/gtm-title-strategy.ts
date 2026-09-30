import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Sets the document title and meta description per route, then pushes a
 * `virtualPageview` event to the GTM dataLayer for every completed Angular navigation.
 */
@Injectable({ providedIn: 'root' })
export class GtmTitleStrategy extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    if (pageTitle) {
      this.title.setTitle(pageTitle);
    }

    const description = this.resolveDeepestData(snapshot.root, 'description');
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'virtualPageview',
      page_path: snapshot.url,
      page_title: document.title
    });
  }

  private resolveDeepestData(route: ActivatedRouteSnapshot, key: string): string | undefined {
    let current = route;
    let value = current.data[key];

    while (current.firstChild) {
      current = current.firstChild;
      value = current.data[key] ?? value;
    }

    return value;
  }
}
