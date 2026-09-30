import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { TarifeComponent } from './tarife.component';

describe('TarifeComponent', () => {
  let component: TarifeComponent;
  let fixture: ComponentFixture<TarifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifeComponent],
      providers: [provideRouter([]), provideAnimations()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
