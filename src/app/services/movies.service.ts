import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MoviesResponse } from '../interfaces/interfaces';

const URL = environment.endPointVivelcine;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private executeQuery = <T>(query: string) => {
    query = `${URL}${query}`;
    return this.http.get<T>(query);
  }

  getRecentMovies = () => {
    return this.executeQuery<MoviesResponse[]>(`/movies`);
  }

  // getTest = () => {
  //   return this.http.get(`https://vivelcine-api.herokuapp.com/api/movies`); 
  // }

}
