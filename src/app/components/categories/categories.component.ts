import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any = [];

  constructor(private service: GiphyService) { }

  ngOnInit(): void {
    this.Categories();
  }

  Categories(){
    this.service.getCategories()
.subscribe((response: any) => {
        this.categories = response;
        console.log(this.categories);
      }
    );
  }

}
