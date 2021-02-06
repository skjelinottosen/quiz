import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { QuestionComponent } from './components/question/question.component';

import { ScoreComponent } from './components/score/score.component';
const routes: Routes = [
  {path: '', component: CategoryComponent, pathMatch: 'full' },
  {path: 'questions/:amount/:category', component:  QuestionComponent },
  {path: 'score', component: ScoreComponent},
  {path: 'categories', component: CategoryComponent}
  //{path: '**' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

