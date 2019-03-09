import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaaswordChangeComponent } from './paasword-change.component';

describe('PaaswordChangeComponent', () => {
  let component: PaaswordChangeComponent;
  let fixture: ComponentFixture<PaaswordChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaaswordChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaaswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
