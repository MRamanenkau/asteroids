import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { AsteroidComponent } from './components/asteroid/asteroid.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotExistedPageComponent } from './components/not-existed-page/not-existed-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AsteroidsService } from './services/asteroids.service';
import { NasaApiService } from './services/nasa-api.service';
import { AsteroidResolver } from './resolvers/asteroid-resolver.service';
import { AsteroidNamePipe } from './pipes/asteroid-name.pipe';
import { AsteroidIDPipe } from './pipes/asteroid-id.pipe';

export const ROUTES: Routes = [
  { path: '', component: ListComponent },
  { path: 'details/:id',
    component: AsteroidComponent,
    resolve: {
      asteroid: AsteroidResolver
    } },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotExistedPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AsteroidComponent,
    NotFoundComponent,
    NotExistedPageComponent,
    AsteroidNamePipe,
    AsteroidIDPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot()
  ],
  providers: [
    AsteroidsService,
    NasaApiService,
    AsteroidResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
