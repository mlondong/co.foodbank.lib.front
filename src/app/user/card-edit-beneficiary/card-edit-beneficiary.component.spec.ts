import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditBeneficiaryComponent } from './card-edit-beneficiary.component';

describe('CardEditBeneficiaryComponent', () => {
  let component: CardEditBeneficiaryComponent;
  let fixture: ComponentFixture<CardEditBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditBeneficiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
