import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiles: any = [
    { cols: 2, rows: 4,  img:'/assets/obag.jpg' },
    {cols: 2, rows: 4,  img:'/assets/apple.jpg'},
    {cols: 2, rows: 4, img:'/assets/nike.jpg'},
    {cols: 2, rows: 4, img:'/assets/vans.jpg'},
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.tiles[0].img)
  }

}
