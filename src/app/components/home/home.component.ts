import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { VideoContainerComponent } from '../video-container/video-container.component';
import { ServiceDashboardComponent } from '../service-dashboard/service-dashboard.component';
import { OffersComponent } from '../offers/offers.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { ServiceInfoComponent } from '../service-info/service-info.component';
import { ResourceCenterComponent } from '../resource-center/resource-center.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,
    VideoContainerComponent,
    ServiceDashboardComponent,
    OffersComponent,
    ResourceCenterComponent,
    ContactComponent,
    FooterComponent,
    ServiceInfoComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dealerId;
  dealerData: any = [];
  allDealersData = [
    {
      "dealerId": "123456",
      "dealerName": "Peter Test",
      "salesPhone": "505-892-3332",
      "logoPath": "https://upload.wikimedia.org/wikipedia/commons/thu…gle_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      "footerTitle": "2025 Pitre Test GMC, LLC, All Rights Reserved.",
      "serviceHours": [
        "Mon - Fri 8:00 AM - 5:00 PM",
        "Sat 8:00 AM - 2:00 PM"
      ],
      "address": "9737 Eagle Ranch Rd.Albuquerque, NM 87114",
      "customers": [
        {
          "name": "Jhon Smith",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's   standard dummy text ever since the 1500s, when an unknown printer took a galley of type remaining essentially unchanged.",
          "videoOverlay": "Welcome....",
          "model": "2022 Buick Encore GX"
        }
      ]
    },
    {
      "dealerId": "123457",
      "dealerName": "Pitre Buick GMC",
      "salesPhone": "505-898-1222",
      "logoPath": "https://upload.wikimedia.org/wikipedia/commons/thu…gle_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      "footerTitle": "2025 Pitre Buick GMC, LLC, All Rights Reserved.",
      "serviceHours": [
        "Mon - Fri 8:00 AM - 5:00 PM",
        "Sat 8:00 AM - 2:00 PM"
      ],
      "address": "9737 Eagle Ranch Rd.Albuquerque, NM 87114",
      "customers": [
        {
          "name": "Jhon Smith",
          "description": ".....",
          "videoOverlay": "Welcome....",
          "model": "2022 Buick Encore GX"
        }
      ]
    }
  ]

  constructor(private route: ActivatedRoute) {
    // http://localhost:4200/source?dealerId=524253&id=1001
    this.dealerId = this.route.snapshot.queryParams['dealerId'];
    console.log(this.route.snapshot.queryParams['dealerId']);
  }
  ngOnInit() {
    this.dealerData = this.allDealersData.find(x => x.dealerId == this.dealerId);
  }
}
