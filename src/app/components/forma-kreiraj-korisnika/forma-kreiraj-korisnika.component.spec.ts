import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaKreirajKorisnikaComponent } from './forma-kreiraj-korisnika.component';

describe('FormaKreirajKorisnikaComponent', () => {
  let component: FormaKreirajKorisnikaComponent;
  let fixture: ComponentFixture<FormaKreirajKorisnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaKreirajKorisnikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaKreirajKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
