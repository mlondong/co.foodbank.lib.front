import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsUserComponent } from './cards-user.component';

describe('CardsUserComponent', () => {
  let component: CardsUserComponent;
  let fixture: ComponentFixture<CardsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
