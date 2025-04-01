import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
// import { VideoContainerComponent } from './components/video-container/video-container.component';
// import { ServiceDashboardComponent } from './components/service-dashboard/service-dashboard.component';
// import { OffersComponent } from './components/offers/offers.component';
// import { ResourceCenterComponent } from './components/resource-center/resource-center.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicePoc';
}
