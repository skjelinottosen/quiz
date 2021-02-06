import { Component, OnInit } from '@angular/core';
import { Category } from './models/category';
import { QuestionService } from './shared/services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
  }
}
