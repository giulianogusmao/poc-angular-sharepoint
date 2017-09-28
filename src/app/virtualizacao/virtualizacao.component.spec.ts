import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualizacaoComponent } from './virtualizacao.component';

describe('VirtualizacaoComponent', () => {
  let component: VirtualizacaoComponent;
  let fixture: ComponentFixture<VirtualizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
