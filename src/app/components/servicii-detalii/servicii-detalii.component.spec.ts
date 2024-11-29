import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciiDetaliiComponent } from './servicii-detalii.component';

describe('ServiciiDetaliiComponent', () => {
  let component: ServiciiDetaliiComponent;
  let fixture: ComponentFixture<ServiciiDetaliiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciiDetaliiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciiDetaliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
