import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste05Component } from './teste05.component';

describe('Teste05Component', () => {
  let component: Teste05Component;
  let fixture: ComponentFixture<Teste05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Teste05Component]
    });
    fixture = TestBed.createComponent(Teste05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
