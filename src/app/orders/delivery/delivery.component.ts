import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  public orders:Array<object>;

  constructor() {
    this.orders = [{
      orderId:'113',
      date:'04.04.2017',
      time:'12:00 AM',
      restName:'Chapeau bas',
      bottlesAmount:'322',
      status:'confirmed'
    },
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
