import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lapa4Component } from './lapa4.component';

describe('Lapa4Component', () => {
  let component: Lapa4Component;
  let fixture: ComponentFixture<Lapa4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lapa4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lapa4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
