import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Asteroid } from '../interfaces/asteroid';
import { AsteroidsService } from '../services/asteroids.service';


@Injectable()
export class AsteroidResolver implements Resolve<Asteroid> {

  constructor(
    private asteroidsService: AsteroidsService, private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Asteroid> {
    const id = route.params['id'];

    return this.asteroidsService
      .getById(id)
      .then(asteroid => {
        if (asteroid) {
          return asteroid;
        } else {
          this.router.navigate(['/not-found']);
          return null;
        }
      });
  }

}
