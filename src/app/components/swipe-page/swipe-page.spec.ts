import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipePage } from './swipe-page';

describe('SwipePage', () => {
  let component: SwipePage;
  let fixture: ComponentFixture<SwipePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
