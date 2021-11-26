import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  allTrendingGifs:any[] = [];

  constructor(private service: GiphyService) { }

  ngOnInit(): void {
    this.TrendingGifs();
    this.service.allGifs()
      .subscribe((response: any) => {
        this.allTrendingGifs = response;
        console.log(this.allTrendingGifs)
      }
    );
  }

  TrendingGifs(){
    this.service.getTrendingGifs();
  }

}
