import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-type-of-questions-option',
  templateUrl: './type-of-questions-option.component.html',
  styleUrls: ['./type-of-questions-option.component.css']
})
export class TypeOfQuestionsOptionComponent implements OnInit {

  selectedCategory: number;
  selectedType: string;
  types = {'Any types': '', 'Multiple Choice': 'multiple', 'True or False': 'boolean'};
  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.selectedCategory = +params['category'];
      }
    );
  }
  onTypeSelected(type: string): void{
    this.selectedType = type;
    this.router.navigate(['options/difficulity', this.selectedCategory, this.selectedType]);
  }

}
