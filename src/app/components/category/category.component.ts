import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { QuestionService } from 'src/app/shared/services/question.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  constructor(private questionService: QuestionService, private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    this.questionService.getToken();
    this.questionService.getCategories().subscribe((categories: any) => {
      this.categories = categories.trivia_categories.sort((category1, category2) => (category1.name > category2.name) ? 1 : -1);

      categories.trivia_categories.forEach((category: Category) => {
      });
    });
  }

  onCategorySelected(category: Category): void{
    this.router.navigate(['/options/typeofquestions', category.id]);
  }

}
