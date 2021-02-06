import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { QuestionComponent } from './components/question/question.component';
import { DecodeHtmlEntitiesPipe } from './shared/decode-html-entities.pipe';
import { ScoreComponent } from './components/score/score.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
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
