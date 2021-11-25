import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-giphy-display',
  templateUrl: './giphy-display.component.html',
  styleUrls: ['./giphy-display.component.css']
})
export class GiphyDisplayComponent implements OnInit {

  gifCategories:any = [];

  constructor(private service: GiphyService) { }

  ngOnInit() {
    this.service.getCategories()
      .subscribe(data => {
        this.gifCategories = data;
      }
    );
  }

}
