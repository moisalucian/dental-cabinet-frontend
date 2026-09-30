import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ServiciiComponent } from './servicii.component';

describe('ServiciiComponent', () => {
  let component: ServiciiComponent;
  let fixture: ComponentFixture<ServiciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciiComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
