import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { QuestionComponent } from './components/question/question.component';
import { OptionsComponent  } from './components/options/options.component';

import { DifficultyOptionComponent  } from './components/options/difficulty-option/difficulty-option.component';
import { TypeOfQuestionsOptionComponent  } from './components/options/type-of-questions-option/type-of-questions-option.component';
import { NumberOfQuestionsOptionComponent } from './components/options/number-of-questions-option/number-of-questions-option.component';
import { ScoreComponent } from './components/score/score.component';
const routes: Routes = [
  {path: '', component: CategoryComponent, pathMatch: 'full' },
  {path: 'options/typeofquestions/:category', component: TypeOfQuestionsOptionComponent  },
  {path: 'options/difficulity/:category/:typeofquestions', component: DifficultyOptionComponent },
  {path: 'options/numberofquestions/:category/:typeofquestions/:difficulity', component: NumberOfQuestionsOptionComponent },
  {path: 'questions/:category/:typeofquestions/:difficulity/:numberofquestions', component:  QuestionComponent },
  {path: 'score', component: ScoreComponent},
  {path: 'categories', component: CategoryComponent}
  //{path: '**' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

