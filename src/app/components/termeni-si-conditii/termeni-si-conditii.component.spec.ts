import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermeniSiConditiiComponent } from './termeni-si-conditii.component';

describe('TermeniSiConditiiComponent', () => {
  let component: TermeniSiConditiiComponent;
  let fixture: ComponentFixture<TermeniSiConditiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermeniSiConditiiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermeniSiConditiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
