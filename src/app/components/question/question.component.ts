import { Component, OnInit, ɵConsole, } from '@angular/core';
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
  amount: number;
  questions: Question[] = [];
  currentQuestion: Question;
  currentQuestionCount: number;
  correctAnswer: string;
  incorrectAnswers: string[];
  alternatives: string[];
  score: number;
  isLoading: boolean = true;

  constructor(
    private questionService: QuestionService,
    private scoreService: ScoreService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.amount = params['amount'];
        this.category = +params['category'];
      }
    );
    this.getAllQuestions(this.amount, this.category);
  }

  getAllQuestions(amount: number, category: number): void{
    this.questionService.getQuestions(amount, category).subscribe( response => {
      //Code 0: Success Returned results successfully.
      if (response.response_code === 0){
        this.questions = response.results;
        this.currentQuestionCount = 1;
        this.amount = this.questions.length;
        this.score = 0;
        this.scoreService.setMaxScore(this.amount);
        this.getNextQuestion(1);
      }
      if (response.response_code === 1 ){
        this.getAllQuestions(--this.amount, this.category);
      }
      this.isLoading = false;
    });
  }

  getNextQuestion(currentQuestionCount: number): void{
   
    if (currentQuestionCount <= this.amount) {
      this.currentQuestion = this.questions[currentQuestionCount-1];
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

  onNavigateToMenu(): void{
    this.router.navigate(['/categories']);
  }

}
