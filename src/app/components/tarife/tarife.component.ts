import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { IgxAccordionModule, IgxSwitchModule } from 'igniteui-angular';

@Component({
  selector: 'app-tarife',
  standalone: true,
  imports: [IgxAccordionModule, IgxSwitchModule, FormsModule],
  templateUrl: './tarife.component.html',
  styleUrl: './tarife.component.scss'
})
export class TarifeComponent {
  singleBranchExpand = false;
  expandAll = false;

  /**
   * Handles the logic for toggling Expand All / Collapse All.
   * Automatically disables Single Branch Expand if active.
   */
  toggleExpandAll(accordion: any): void {
    this.expandAll = !this.expandAll;

    if (this.expandAll) {
      // Disable singleBranchExpand when Expand All is activated
      this.singleBranchExpand = false;
      accordion.panels.forEach((panel: any) => panel.open());
    } else {
      accordion.panels.forEach((panel: any) => panel.close());
    }
  }

  /**
   * Handles the logic for toggling Single Branch Expand.
   * Automatically disables Expand All if active.
   */
  toggleSingleBranchExpand(accordion: any): void {
    if (!this.singleBranchExpand) {
      // If enabling Single Branch Expand, turn off Expand All and close all panels
      this.expandAll = false;
      accordion.panels.forEach((panel: any) => panel.close());
    }
  }

  /**
   * Logic to ensure proper toggling behavior when Single Branch Expand is disabled.
   */
  resetSingleBranchExpand(): void {
    if (this.singleBranchExpand) {
      this.singleBranchExpand = false;
    }
  }
}