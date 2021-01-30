import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfQuestionsOptionComponent } from './number-of-questions-option.component';

describe('NumberOfQuestionsOptionComponent', () => {
  let component: NumberOfQuestionsOptionComponent;
  let fixture: ComponentFixture<NumberOfQuestionsOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfQuestionsOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfQuestionsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
