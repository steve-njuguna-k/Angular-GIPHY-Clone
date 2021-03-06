import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiKey = environment.apiKey;
  gifs = new BehaviorSubject<any>([])
  categories = new BehaviorSubject<any>([])
  random = new BehaviorSubject<any>([])
  search = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  allGifs() {
    return this.gifs.asObservable();
  }

  allCategories() {
    return this.categories.asObservable();
  }

  randomGif() {
    return this.random.asObservable();
  }

  getGifSearch() {
    return this.search.asObservable();
  }
  
  searchGifs(query:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=50&offset=0&rating=G&lang=en`)
    .subscribe((response: any)=>{
      this.search.next(response.data)
    });
  }

  getCategories(){
    return this.http.get(`https://api.giphy.com/v1/gifs/categories?api_key=${this.apiKey}`)
    .subscribe((response: any) => {
      this.categories.next(response.data);
    });
  }

  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=50&rating=G`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }
  
  getRandomGif(){
    return this.http.get(`https://api.giphy.com/v1/gifs/random?api_key=${this.apiKey}&tag=&rating=G`)
    .subscribe((response: any) => {
      this.random.next(response.data);
    });
  }

}


