import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrebariFrecventeComponent } from './intrebari-frecvente.component';

describe('IntrebariFrecventeComponent', () => {
  let component: IntrebariFrecventeComponent;
  let fixture: ComponentFixture<IntrebariFrecventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntrebariFrecventeComponent]
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
