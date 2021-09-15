import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditProviderComponent } from './card-edit-provider.component';

describe('CardEditProviderComponent', () => {
  let component: CardEditProviderComponent;
  let fixture: ComponentFixture<CardEditProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
