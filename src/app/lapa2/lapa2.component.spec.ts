import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lapa2Component } from './lapa2.component';

describe('Lapa2Component', () => {
  let component: Lapa2Component;
  let fixture: ComponentFixture<Lapa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lapa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lapa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
