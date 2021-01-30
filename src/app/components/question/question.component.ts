import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OpenTDBResponse } from 'src/app/models/open-tdb-response';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/shared/services/question.service';
import { ScoreService } from 'src/app/shared/services/score.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  category: number;
  type: string;
  difficulity: string;
  numberOfQuestions: number;

  questions: Question[] = [];
  currentQuestion: Question;
  currentQuestionCount: number;
  correctAnswer: string;
  incorrectAnswers: string[];
  alternatives: string[];
  score: number;


  constructor(private questionService: QuestionService, private scoreService: ScoreService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.category = +params['category'];
        this.type  = params['typeofquestions'];
        this.difficulity = params['difficulity'];
        this.numberOfQuestions = params['numberofquestions']
      }
    );
    this.getAllQuestions(this.category, this.type, this.difficulity, this.numberOfQuestions);

  }

  getAllQuestions(category: number, type: string, difficulity: string, numberOfQuestions: number): void{
    this.questionService.getQuestions(category, type, difficulity, numberOfQuestions).subscribe( response => {
      //Code 0: Success Returned results successfully.
      if (response.response_code === 0){
        this.questions = response.results;
        this.currentQuestionCount = 1;
        this.numberOfQuestions = this.questions.length;
        this.score = 0;
        this.scoreService.setMaxScore(this.numberOfQuestions);
        this.getNextQuestion(1);
      }
    });
  }
  getNextQuestion(currentQuestionCount: number): void{
    if (currentQuestionCount <= this.numberOfQuestions) {
      this.currentQuestion = this.questions[currentQuestionCount];
      this.correctAnswer = this.currentQuestion.correct_answer;
      this.incorrectAnswers = this.currentQuestion.incorrect_answers;
      const unshuffledAlternatives = this.incorrectAnswers;

      unshuffledAlternatives.push(this.correctAnswer);
      this.alternatives = unshuffledAlternatives
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    }
    else {
      this.router.navigate(['/score']);
    }
  }

  onSelectAnswer(answer: string): void{
      if (answer === this.correctAnswer){
        this.scoreService.addPoints();
      }
      this.getNextQuestion(++this.currentQuestionCount);
  }

}
