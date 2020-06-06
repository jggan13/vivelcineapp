import { Component, OnInit, Input } from '@angular/core';
import { MoviesResponse } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() slideOpts = {};
  @Input() movies: MoviesResponse[] = [];

  constructor() { }

  ngOnInit() {}

}
