import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionService } from '../../shared/services/question.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  difficulty: any[] = ['Easy', 'Medium', 'Hard'];
  types: any[] =['Any types','Multiple Choice', 'True or False'];
  numberOfQuestions = [10, 20, 30, 40, 50];

  //'multiple', 'boolean'
  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.route.params
      .subscribe(
        (params: Params) => {
     
          //+params['id']
         // this.questionService.getQuestions(+params['id']).subscribe({
          //});
        }
      );
  }

}
