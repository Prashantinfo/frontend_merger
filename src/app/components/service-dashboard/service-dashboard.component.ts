import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-dashboard',
  imports: [],
  templateUrl: './service-dashboard.component.html',
  styleUrl: './service-dashboard.component.css'
})
export class ServiceDashboardComponent {
  @Input() dealerData: any;

  constructor() {}
}
