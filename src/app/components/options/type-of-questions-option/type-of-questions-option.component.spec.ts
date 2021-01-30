import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfQuestionsOptionComponent } from './type-of-questions-option.component';

describe('TypeOfQuestionsOptionComponent', () => {
  let component: TypeOfQuestionsOptionComponent;
  let fixture: ComponentFixture<TypeOfQuestionsOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOfQuestionsOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfQuestionsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
