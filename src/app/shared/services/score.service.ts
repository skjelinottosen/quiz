import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root',
  })

  export class ScoreService {

    constructor() { }

    // Observable source
    private pointSource = new Subject<number>();
    private maxPointSource = new Subject<number>();

    // Observable streams
    public pointSourceChanged$ = this.pointSource.asObservable();
    public maxPointSourceChanged$ = this.pointSource.asObservable();

    points = 0;
    maxPoints: number;

    addPoints(): void {
        this.points++;
        this.pointSource.next(this.points);
    }

    getScore(): number {
        return this.points;
    }
    setMaxScore(maxPoints: number): void {
        this.maxPoints = maxPoints;
        this.maxPointSource.next(this.maxPoints);
    }

    getMaxPoints(): number {
        return this.maxPoints;
    }
}
