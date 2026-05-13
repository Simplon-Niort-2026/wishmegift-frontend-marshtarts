import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGift } from './form-gift';

describe('FormGift', () => {
  let component: FormGift;
  let fixture: ComponentFixture<FormGift>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGift],
    }).compileComponents();

    fixture = TestBed.createComponent(FormGift);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
