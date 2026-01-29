import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCollection } from './meal-collection';

describe('MealCollection', () => {
  let component: MealCollection;
  let fixture: ComponentFixture<MealCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
