import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offers',
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {

  @Input() dealerData: any;

  constructor() {
    console.log('dealer',this.dealerData);
  }
}
