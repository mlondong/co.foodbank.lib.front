import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVaultComponent } from './card-vault.component';

describe('CardVaultComponent', () => {
  let component: CardVaultComponent;
  let fixture: ComponentFixture<CardVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
