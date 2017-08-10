import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {

    public orders:Array<object>;

  constructor() {
    this.orders = [
    {
      orderId:'442',
      date:'07.07.2017',
      time:'15:00 AM',
      restName:'Paris',
      bottlesAmount:'162',
      status:'pending'
    }]
  }

  ngOnInit() {
  }

}
