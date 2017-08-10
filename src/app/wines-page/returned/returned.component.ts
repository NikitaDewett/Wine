import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-returned',
  templateUrl: './returned.component.html',
  styleUrls: ['./returned.component.css']
})
export class ReturnedComponent implements OnInit {

  public status: SelectItem[];
 
  public selectedCity: string;

  public modalRef: BsModalRef;
  public wines: Array<object>;

  constructor(private modalService: BsModalService) {

    this.status = [];
    this.status.push({ label: 'Delivered', value: { status: 'delivered'} });
    this.status.push({ label: 'Purchased', value: { status: 'purchased'} });
    this.status.push({ label: 'Returned', value: { status: 'returned'} });

    this.wines = [
      {
        wineId: '1',
        label: 'Lambrusco Dell\'Emilia Rosso Amabile',
        vinary: 'test',
        year: '1981',
        sweetness: '25%',
        category: 'sour',
        countryRegion: 'Italy',
        bottlesAmount: '8',
        dateOfReturn: '05.06.2017'
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
