import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrediantListComponent } from './ingrediant-list.component';

describe('IngrediantListComponent', () => {
  let component: IngrediantListComponent;
  let fixture: ComponentFixture<IngrediantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngrediantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrediantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
