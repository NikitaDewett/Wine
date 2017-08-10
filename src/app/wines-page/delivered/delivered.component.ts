import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.css']
})
export class DeliveredComponent implements OnInit {

  public status: SelectItem[];

  public selectedCity: string;

  public modalRef: BsModalRef;
  public wines: Array<object>;

  constructor(private modalService: BsModalService) {

    this.status = [];
    this.status.push({ label: 'Delivered', value: { status: 'delivered'} });
    this.status.push({ label: 'Purchased', value: { status: 'purchased'} });
    this.status.push({ label: 'Returned', value: { status: 'returned'} });

    this.wines = [{
      wineId: '1',
      label: 'Saint Vincent Blanc',
      vinary: 'test',
      year: '1978',
      sweetness: '30%',
      category: 'sweet',
      countryRegion: 'France',
      bottlesAmount: '12',
      dateOfDelivery: '04.03.2017'
    }]
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public hello() {
    console.log('hello')
  }

  ngOnInit() {
  }

}
