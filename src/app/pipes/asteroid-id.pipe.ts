import { Pipe, PipeTransform } from '@angular/core';
import { Asteroid } from '../interfaces/asteroid';

@Pipe({
  name: 'asteroidID'
})
export class AsteroidIDPipe implements PipeTransform {

  transform(asteroids: Asteroid[], id: string): Asteroid[] {
    if (!asteroids || !id) {
      return asteroids;
    }

    return asteroids.filter(asteroid => {
      return asteroid.neo_reference_id.toString().includes(id);
    });
  }

}
