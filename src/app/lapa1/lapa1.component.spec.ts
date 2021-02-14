import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lapa1Component } from './lapa1.component';

describe('Lapa1Component', () => {
  let component: Lapa1Component;
  let fixture: ComponentFixture<Lapa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lapa1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lapa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
