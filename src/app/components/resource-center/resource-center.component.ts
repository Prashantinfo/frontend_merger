import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-center',
  imports: [],
  templateUrl: './resource-center.component.html',
  styleUrl: './resource-center.component.css'
})
export class ResourceCenterComponent {
  @Input() dealerData: any;

  constructor() {
    console.log('dealer',this.dealerData);
  }
}
