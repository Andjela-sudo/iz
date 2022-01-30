import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaLoginComponent } from './forma-login.component';

describe('FormaLoginComponent', () => {
  let component: FormaLoginComponent;
  let fixture: ComponentFixture<FormaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
