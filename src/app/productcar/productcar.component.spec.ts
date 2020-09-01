import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcarComponent } from './productcar.component';

describe('ProductcarComponent', () => {
  let component: ProductcarComponent;
  let fixture: ComponentFixture<ProductcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
