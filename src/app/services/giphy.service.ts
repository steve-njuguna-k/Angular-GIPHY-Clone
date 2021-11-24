import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Giphs } from '../interfaces/giphs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiKey = environment.apiKey;
  private query!: string;

  constructor(private http: HttpClient) { }

  getGifs(): Observable<Giphs[]>{
    return this.http.get<Giphs[]>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${this.query}&limit=50&offset=0&rating=G&lang=en`);
  }

  getCategories(): Observable<Giphs[]>{
    return this.http.get<Giphs[]>(`https://api.giphy.com/v1/gifs/categories?api_key=${this.apiKey}`);
  }

  getTrendingGifs(): Observable<Giphs[]>{
    return this.http.get<Giphs[]>(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=50&rating=G`);
  }
  
  getRandomGif(): Observable<Giphs[]>{
    return this.http.get<Giphs[]>(`https://api.giphy.com/v1/gifs/random?api_key=${this.apiKey}&tag=&rating=G`);
  }

  searchGif(query:string){
    this.query = query;
  }

}
