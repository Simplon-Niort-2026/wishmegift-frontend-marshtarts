import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveButton } from './reserve-button';

describe('ReserveButton', () => {
  let component: ReserveButton;
  let fixture: ComponentFixture<ReserveButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ReserveButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
