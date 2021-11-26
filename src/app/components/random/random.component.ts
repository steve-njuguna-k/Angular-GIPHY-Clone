import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  randomGif: any;

  constructor(private service: GiphyService) { }

  ngOnInit(): void {
    this.GetRandomGif();
    this.service.randomGif()
      .subscribe((response: any) => {
        this.randomGif = response;
        console.log(this.randomGif)
      }
    );
  }

  GetRandomGif(){
    this.service.getRandomGif();
  }

}
