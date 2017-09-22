import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsteroidsService } from '../../services/asteroids.service';
import { Asteroid } from '../../interfaces/asteroid';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html'
})

export class AsteroidComponent implements OnInit, OnDestroy {

  asteroid: Asteroid;

  constructor(
    private route: ActivatedRoute,
    private asteroidsService: AsteroidsService
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { asteroid: Asteroid }) => {
        this.asteroid = data.asteroid;
      });
  }

  ngOnDestroy() {
    this.asteroidsService.clearChosen();
  }
}
