import { Pipe, PipeTransform } from '@angular/core';
import { Asteroid } from '../interfaces/asteroid';

@Pipe({
  name: 'asteroidName'
})
export class AsteroidNamePipe implements PipeTransform {

  transform(asteroids: Asteroid[], name: string): Asteroid[] {
    if (!asteroids || !name) {
      return asteroids;
    }

    return asteroids.filter(asteroid => {
      return asteroid.name.includes(name);
    });
  }

}
