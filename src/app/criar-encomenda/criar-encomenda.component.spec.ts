import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEncomendaComponent } from './criar-encomenda.component';

describe('CriarEncomendaComponent', () => {
  let component: CriarEncomendaComponent;
  let fixture: ComponentFixture<CriarEncomendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEncomendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEncomendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
