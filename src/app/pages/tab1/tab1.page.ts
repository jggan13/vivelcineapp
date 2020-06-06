import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import {  MoviesResponse } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

 slidesOpts = {
    slidesPerView: 1.3,
    freeMode: true,
    spaceBetween: 15
  };

  recentsMovies: MoviesResponse[] = [];

  constructor(private moviesService: MoviesService) {
    
  }

  ngOnInit() {

    this.moviesService.getRecentMovies().subscribe((data) => {
      console.log(data);
      this.recentsMovies = data;
    });

    // this.moviesService.getTest().subscribe((data) => {
    //   console.log(data);
    // });

  }

}
