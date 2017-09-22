import { Component, OnInit } from '@angular/core';
import { AsteroidsService } from '../../services/asteroids.service';
import { Asteroid } from '../../interfaces/asteroid';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  filterName: string;
  filterID: string;
  page = 1;
  collectionSize: number;
  asteroids: Asteroid[];
  isLoadInProgress: boolean;

  constructor(private asteroidsService: AsteroidsService) { }

  ngOnInit() {
    this.getPage(1);
  }

  pageChange() {
    this.getPage(this.page);
  }

  getPage(page: number): void {
    this.isLoadInProgress = true;
    this.asteroidsService
      .getList(page)
      .then(asteroids => {
        this.asteroids = asteroids.near_earth_objects;
        this.collectionSize = asteroids.page.total_pages * 10;
        this.page = asteroids.page.number;
        this.isLoadInProgress = false;
      });
  }

}
