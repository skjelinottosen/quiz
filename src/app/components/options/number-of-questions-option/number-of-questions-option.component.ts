import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-number-of-questions-option',
  templateUrl: './number-of-questions-option.component.html',
  styleUrls: ['./number-of-questions-option.component.css']
})
export class NumberOfQuestionsOptionComponent implements OnInit {
  selectedCategory: number;
  selectedType: string;
  selectedDifficulity: string;
  numberOfQuestions = [10, 20, 30, 40, 50];
  selectedNumberOfQuestions: number;
 
  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.selectedCategory = +params['category'];
        this.selectedType  = params['typeofquestions'];
        this.selectedDifficulity = params['difficulity'];
      }
    );
  }
  onNumberOfQuestionsSelected(number: number): void{
    this.selectedNumberOfQuestions = number;
    this.router.navigate(['questions', this.selectedCategory, this.selectedType, this.selectedDifficulity, this.selectedNumberOfQuestions]);
  }

}
