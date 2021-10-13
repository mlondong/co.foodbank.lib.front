import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadrPackagedComponent } from './cadr-packaged.component';

describe('CadrPackagedComponent', () => {
  let component: CadrPackagedComponent;
  let fixture: ComponentFixture<CadrPackagedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadrPackagedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadrPackagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
