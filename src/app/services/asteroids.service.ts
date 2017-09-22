import { Injectable } from '@angular/core';
import { Asteroid } from '../interfaces/asteroid';
import { NasaApiService } from './nasa-api.service';

@Injectable()
export class AsteroidsService {

  private chosenAsteroid: Asteroid;
  private asteroidsList: any;

  constructor(private nasaApi: NasaApiService) { }

  getList(page: number): Promise<any> {
    return this.nasaApi
      .getList(page)
      .then(resp => {
        this.asteroidsList = resp;
        return this.asteroidsList;
      });
  }

  getById(id: number): Promise<Asteroid> {
    return this.nasaApi
      .getById(id)
      .then(asteroid => {
        this.chosenAsteroid = asteroid;
        return this.chosenAsteroid;
      });
  }

  clearChosen() {
    this.chosenAsteroid = null;
  }

}
