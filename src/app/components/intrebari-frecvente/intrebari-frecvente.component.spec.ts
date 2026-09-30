import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { IntrebariFrecventeComponent } from './intrebari-frecvente.component';

describe('IntrebariFrecventeComponent', () => {
  let component: IntrebariFrecventeComponent;
  let fixture: ComponentFixture<IntrebariFrecventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntrebariFrecventeComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntrebariFrecventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
