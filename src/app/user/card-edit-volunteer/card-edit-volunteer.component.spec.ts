import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditVolunteerComponent } from './card-edit-volunteer.component';

describe('CardEditVolunteerComponent', () => {
  let component: CardEditVolunteerComponent;
  let fixture: ComponentFixture<CardEditVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditVolunteerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
