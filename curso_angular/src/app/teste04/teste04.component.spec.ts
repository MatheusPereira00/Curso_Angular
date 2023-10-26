import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste04Component } from './teste04.component';

describe('Teste04Component', () => {
  let component: Teste04Component;
  let fixture: ComponentFixture<Teste04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Teste04Component]
    });
    fixture = TestBed.createComponent(Teste04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
