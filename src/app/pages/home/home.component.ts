import { Component } from '@angular/core';
import { NasaServiceService } from '../../services/nasa-service.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  pictureDayData: any;

  constructor(
    private nasaService: NasaServiceService,
  ) { }


  ngOnInit(): void {
    this.getAstronomyPicture();
  }


  getAstronomyPicture() {
    this.nasaService.getAstronomyPictureOfTheDay().subscribe({
      next: (data: any) => {
        this.pictureDayData = data;
        console.log(data)
      },
      error: (error) => {
        console.error('Error fetching astronomy picture:', error);
      }
    });
  }

  

}
