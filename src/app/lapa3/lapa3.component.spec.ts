import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lapa3Component } from './lapa3.component';

describe('Lapa3Component', () => {
  let component: Lapa3Component;
  let fixture: ComponentFixture<Lapa3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lapa3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lapa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
