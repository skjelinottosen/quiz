import { Question } from './question';

export interface OpenTDBResponse {
    response_code: number;
    results: Question[];
}
