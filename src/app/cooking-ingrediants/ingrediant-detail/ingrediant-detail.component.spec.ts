import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrediantDetailComponent } from './ingrediant-detail.component';

describe('IngrediantDetailComponent', () => {
  let component: IngrediantDetailComponent;
  let fixture: ComponentFixture<IngrediantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngrediantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrediantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
