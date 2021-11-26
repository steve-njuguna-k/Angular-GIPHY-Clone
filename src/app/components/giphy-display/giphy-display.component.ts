import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-giphy-display',
  templateUrl: './giphy-display.component.html',
  styleUrls: ['./giphy-display.component.css']
})
export class GiphyDisplayComponent implements OnInit {

  allTrendingGifs:any[] = [];
  allGifCategories:any[] = [];

  constructor(private service: GiphyService) { }

  ngOnInit(): void {
    this.TrendingGifs();
    this.Categories();
    this.service.allGifs()
      .subscribe((response: any) => {
        this.allTrendingGifs = response;
        console.log(this.allTrendingGifs)
      }
    );
    this.service.allCategories()
      .subscribe((response: any) => {
        this.allGifCategories = response;
        console.log(this.allGifCategories)
      }
    );
  }

  TrendingGifs(){
    this.service.getTrendingGifs();
  }

  Categories(){
    this.service.getCategories();
  }

}
