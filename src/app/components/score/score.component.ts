import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreService } from 'src/app/shared/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  finalScore: number;
  maxPoints: number;

  constructor(private scoreService: ScoreService, private route: ActivatedRoute, private router: Router) {
    this.getMaxPoints();
    this.getScore();
  }

  ngOnInit(): void {}


  getScore(): void{
    this.finalScore = this.scoreService.getScore();
  }

  getMaxPoints(): void {
    this.maxPoints = this.scoreService.getMaxPoints();
  }
  onNavigateToMenu(): void{
    this.router.navigate(['/categories']);
  }
}
