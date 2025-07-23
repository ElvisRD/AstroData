import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NasaApiKey } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAstronomyPictureOfTheDay() {
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=' + NasaApiKey);
  }

  getAsteroidsNeoFeed() {
    return this.http.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=' + NasaApiKey);
  }

  getMarsRoverPhotos(sol: number, camera: string) {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${NasaApiKey}`);
  }

  getNasaImagesAndVideos() {
    return this.http.get('https://images-api.nasa.gov/search?media_type=image,video&api_key=' + NasaApiKey);
  }

  getOpenScienceData(){
    return this.http.get('https://osdr.nasa.gov/osdr/data/osd/files/87.1')
  }


}
