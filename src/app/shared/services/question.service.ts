import { Component, Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { OpenTDbToken } from 'src/app/models/open-tdb-token';
import { Category } from 'src/app/models/category';
import { OpenTDBResponse } from 'src/app/models/open-tdb-response';
import { ScoreService } from './score.service';

@Injectable({
  providedIn: 'root',
})

export class QuestionService {

  constructor(private http: HttpClient) { }
  token: string;

  getToken(): void{
    this.http.get<OpenTDbToken>(`${environment.opentdbApi.retrieveTokenUrl}`).subscribe(
      (response: OpenTDbToken) => {
        this.token = response.token;
    },
    (error) => {
  
    });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.opentdbApi.trivia_categories);
  }


  // TODO make interface
  // Make category, difficulty, type  a enum?
  /*getQuestions(numberOfQuestions?: number, category?: string, difficulty?: number, type?: string): Observable<any[]>{
    return this.http.get<any[]>(`${environment.opentdbApi.opentdbBaseUrl}`);
  }
  */ 

getQuestions(amount: number, category: number): Observable<OpenTDBResponse>{
  return this.http.get<OpenTDBResponse>(`${environment.opentdbApi.opentdbBaseUrl}api.php?amount=${amount}&category=${category}&difficulty=easy`);
}



//https://opentdb.com/api.php?amount={10}&category={9}&difficulty={easy}&type={multiple}
}
