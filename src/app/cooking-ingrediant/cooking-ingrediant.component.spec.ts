import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingIngrediantComponent } from './cooking-ingrediant.component';

describe('CookingIngrediantComponent', () => {
  let component: CookingIngrediantComponent;
  let fixture: ComponentFixture<CookingIngrediantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingIngrediantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingIngrediantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
