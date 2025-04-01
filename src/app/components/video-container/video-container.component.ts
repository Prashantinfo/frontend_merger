import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-container',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Add HttpClientModule here
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {
  @Input() dealerData: any;
  userName = '';
  userDescription = '';
  videoUrl: string | null = null;
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(this.dealerData);
    this.userName = this.dealerData.customers[0].name;
    this.userDescription = this.dealerData.customers[0].description;
    this.generateAndMergeVideo();
  }

  generateAndMergeVideo() {
    this.isLoading = true;

    const payload = {
      text: this.dealerData.customers[0].videoOverlay,
      audioUrl: "https://api.voicerss.org/?key=669e4649acd248caa3ebcbcba620a7f7&hl=en-us&v=Mike&src=Your%20Buick%20was%20designed%20to%20compliment%20your%20life%20with%20performance%2C%20style%20and%20luxury.%20And%20one%20of%20the%20most%20important%20and%20easiest%20ways%20%20to%20help%20keep%20it%20running%20its%20very%20best%2C%20%20is%20to%20schedule%20regular%20oil%20changes.%20Our%20advanced%20technologies%2C%20such%20as%20the%20available%20Engine%20Oil%20Life%20System%2C%20can%20help%20keep%20maintaining%20your%20Buick%20%20simple%20and%20straight%20forward.%20The%20system%20continuously%C2%A0%20monitors%20your%20driving%20conditions%20and%20helps%20determine%20when%C2%A0%20it%E2%80%99s%20time%20for%20an%20oil%20change.%20Our%20trained%20Certified%20Service%20experts%20can%20tell%20you%20about%20the%20different%20types%20of%20oils%20offered%20and%20recommend%20what's%20best%20for%20your%20Buick.%20They%20can%20also%20explain%20the%20importance%20of%20regular%20oil%20changes%20and%20how%20they%20are%20vital%20in%20helping%20to%20reduce%20engine%20wear%20and%20maintain%20optimum%20lubrication.%20Trust%20the%20ones%20who%20care%20like%20you%20do%2C%20technicians%20with%20Authentic%20Expertise%20only%20from%20Buick%20Certified%20Service.%0A", 
      videoFileName: "BUICK.mp4"
    };

    this.http.post('http://localhost:3000/api/process-media', payload).subscribe({
      next: (response: any) => {
        this.videoUrl = response.url;
        this.isLoading = false;
        console.log('Generated video URL:', this.videoUrl);
      },
      error: (error) => {
        console.error('Error fetching video URL:', error);
        this.isLoading = false;
      }
    });
  }

  ScrollIntoView(elem: string) {
    console.log(elem);
    const doc = document.querySelector(elem) as HTMLElement;
    doc.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}