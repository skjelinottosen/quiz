import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-difficulty-option',
  templateUrl: './difficulty-option.component.html',
  styleUrls: ['./difficulty-option.component.css']
})
export class DifficultyOptionComponent implements OnInit {
  selectedCategory: number;
  selectedType: string;
  difficulty: any[] = ['Easy', 'Medium', 'Hard'];
  selectedDifficulity: string;

  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.selectedCategory = +params['category'];
        this.selectedType = params['typeofquestions'];
      }
    );
  }
  onDifficultySelected(difficulty: string): void{
    this.selectedDifficulity = difficulty.toLowerCase();
    this.router.navigate(['options/numberofquestions', this.selectedCategory, this.selectedType, this.selectedDifficulity]);
  }

}
