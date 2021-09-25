import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailVaultComponent } from './card-detail-vault.component';

describe('CardDetailVaultComponent', () => {
  let component: CardDetailVaultComponent;
  let fixture: ComponentFixture<CardDetailVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailVaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
