import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSistemasComponent } from './buscar-sistemas.component';

describe('BuscarSistemasComponent', () => {
  let component: BuscarSistemasComponent;
  let fixture: ComponentFixture<BuscarSistemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarSistemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
