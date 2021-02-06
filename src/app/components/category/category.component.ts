import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  isLoading = true;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    this.questionService.getToken();
    this.questionService.getCategories().subscribe((categories) => {
      this.categories = categories.trivia_categories.sort((category1, category2) => (category1.name > category2.name) ? 1 : -1);
      this.isLoading = false;
    });
  }

  onCategorySelected(category: Category): void{
    const amount = 10;
    this.router.navigate(['questions', amount, category.id]);
  }
}
