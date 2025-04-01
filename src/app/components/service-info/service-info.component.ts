import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-info',
  imports: [],
  templateUrl: './service-info.component.html',
  styleUrl: './service-info.component.css'
})
export class ServiceInfoComponent {

  @Input() dealerData: any;

  constructor() {
    console.log('dealer',this.dealerData);
  }
}
