import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContributionComponent } from './card-contribution.component';

describe('CardContributionComponent', () => {
  let component: CardContributionComponent;
  let fixture: ComponentFixture<CardContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
