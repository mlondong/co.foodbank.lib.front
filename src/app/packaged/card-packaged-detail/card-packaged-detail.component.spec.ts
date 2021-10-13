import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPackagedDetailComponent } from './card-packaged-detail.component';

describe('CardPackagedDetailComponent', () => {
  let component: CardPackagedDetailComponent;
  let fixture: ComponentFixture<CardPackagedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPackagedDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPackagedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
