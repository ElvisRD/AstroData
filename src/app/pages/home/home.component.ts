import { Component } from '@angular/core';
import { NasaServiceService } from '../../services/nasa-service.service';
import { CardElementComponent } from '../../components/card-element/card-element.component';

@Component({
  selector: 'app-home',
  imports: [CardElementComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  pictureDayData: any;
  animationState = true
  categories: any[] = [];
  bounceAnimation = true;
  interestingPhrases: any[] = [];

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
        this.setSentences(data.phrases);
      },
      error: (error) => {
        console.error('Error fetching interesting text:', error);
      }
    });
  }

  setSentences(phrases: string[]) {

    while (this.interestingPhrases.length < 3) {
      const RandomNum = Math.floor(Math.random() * 50);
      
      const phrase = phrases[RandomNum];
      if (!this.interestingPhrases.includes(phrase)) {
        this.interestingPhrases.push(phrase);
      }

    }

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
    this.nasaService.getCategoriesNasa().subscribe({
      next: (data: any) => {
        this.categories = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }

}
