import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetaliiComponent } from './blog-detalii.component';

describe('BlogDetaliiComponent', () => {
  let component: BlogDetaliiComponent;
  let fixture: ComponentFixture<BlogDetaliiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetaliiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogDetaliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
