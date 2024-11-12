import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAccordionModule, IgxSwitchModule } from 'igniteui-angular';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-tarife',
  standalone: true,
  imports: [IgxAccordionModule, IgxSwitchModule, FormsModule],
  templateUrl: './tarife.component.html',
  styleUrl: './tarife.component.scss'
})
export class TarifeComponent {
  public singleBranchExpand = false;
}
