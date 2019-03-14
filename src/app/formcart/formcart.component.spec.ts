import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcartComponent } from './formcart.component';

describe('FormcartComponent', () => {
  let component: FormcartComponent;
  let fixture: ComponentFixture<FormcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
