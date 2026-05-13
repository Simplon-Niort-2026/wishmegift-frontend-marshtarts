import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGift } from './display-gift';

describe('DisplayGift', () => {
  let component: DisplayGift;
  let fixture: ComponentFixture<DisplayGift>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayGift],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayGift);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
