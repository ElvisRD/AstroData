import { Component } from '@angular/core';
import { NasaServiceService } from '../../services/nasa-service.service';
import { CardElementComponent } from '../../components/card-element/card-element.component';

@Component({
  selector: 'app-home',
  imports: [CardElementComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  pictureDayData: any;
  allInterestingPhrases: any;
  
  categories: any[] = [];

  constructor(
    private nasaService: NasaServiceService,
  ) { }


  ngOnInit(): void {
    this.getAstronomyPicture();
    this.getCategories();
    this.getInterestingText();
  }

  getInterestingText() {
    this.nasaService.getInterestingPhrases().subscribe({
      next: (data: any) => {
        this.allInterestingPhrases = data.phrases;
      },
      error: (error) => {
        console.error('Error fetching interesting text:', error);
      }
    });
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

  getCategories() {
    this.nasaService.getCategoriesNasa().subscribe(data => {
     this.categories = data;
    });
  }


}
