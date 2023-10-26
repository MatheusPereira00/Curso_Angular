import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste03Component } from './teste03.component';

describe('Teste03Component', () => {
  let component: Teste03Component;
  let fixture: ComponentFixture<Teste03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Teste03Component]
    });
    fixture = TestBed.createComponent(Teste03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
