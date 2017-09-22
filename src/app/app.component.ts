import { Component } from '@angular/core';
import { AsteroidsService } from './services/asteroids.service';
import { NasaApiService } from './services/nasa-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AsteroidsService, NasaApiService]
})
export class AppComponent {}
