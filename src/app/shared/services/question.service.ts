import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { OpenTDbToken } from 'src/app/models/open-tdb-token';
import { Category } from 'src/app/models/category';
import { OpenTDBResponse } from 'src/app/models/open-tdb-response';
import { OpenTDBCategoryResponse } from 'src/app/models/open-tdb-category-response';

@Injectable({
  providedIn: 'root',
})

// Fetching data from the Open Trivia Database API: https://opentdb.com/
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

  getCategories(): Observable<OpenTDBCategoryResponse> {
    return this.http.get<OpenTDBCategoryResponse >(environment.opentdbApi.trivia_categories);
  }

  getQuestions(amount: number, category: number): Observable<OpenTDBResponse>{
    return this.http.get<OpenTDBResponse>(`${environment.opentdbApi.opentdbBaseUrl}api.php?amount=${amount}&category=${category}&difficulty=easy`);
  }
}
