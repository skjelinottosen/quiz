import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { QuestionComponent } from './components/question/question.component';
import { OptionsComponent } from './components/options/options.component';
import { DifficultyOptionComponent } from './components/options/difficulty-option/difficulty-option.component';
import { NumberOfQuestionsOptionComponent } from './components/options/number-of-questions-option/number-of-questions-option.component';
import { TypeOfQuestionsOptionComponent } from './components/options/type-of-questions-option/type-of-questions-option.component';
import { DecodeHtmlEntitiesPipe } from './shared/decode-html-entities.pipe';
import { ScoreComponent } from './components/score/score.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    OptionsComponent,
    DifficultyOptionComponent,
    NumberOfQuestionsOptionComponent,
    TypeOfQuestionsOptionComponent,
    DecodeHtmlEntitiesPipe,
    ScoreComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
