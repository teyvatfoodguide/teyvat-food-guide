import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallifeRecipeComponent } from './reallife-recipe.component';

describe('ReallifeRecipeComponent', () => {
  let component: ReallifeRecipeComponent;
  let fixture: ComponentFixture<ReallifeRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReallifeRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallifeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
