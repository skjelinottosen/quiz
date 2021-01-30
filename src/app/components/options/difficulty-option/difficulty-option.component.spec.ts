import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyOptionComponent } from './difficulty-option.component';

describe('DifficultyOptionComponent', () => {
  let component: DifficultyOptionComponent;
  let fixture: ComponentFixture<DifficultyOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultyOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
