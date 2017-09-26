import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoSistemasComponent } from './cabecalho-sistemas.component';

describe('CabecalhoSistemasComponent', () => {
  let component: CabecalhoSistemasComponent;
  let fixture: ComponentFixture<CabecalhoSistemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecalhoSistemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
