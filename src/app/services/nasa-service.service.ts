import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NasaApiKey } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAstronomyPictureOfTheDay(): Observable<any> {
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=' + NasaApiKey);
  }

  getCategoriesNasa(): Observable<any> {
    return this.http.get<any>('assets/jsons/categories.json');
  }

  getInterestingPhrases(): Observable<any> {
    return this.http.get<any>('assets/jsons/interesting-text.json');
  }

  getAsteroidsNeoFeed(): Observable<any> {
    return this.http.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=' + NasaApiKey);
  }

  getMarsRoverPhotos(sol: number, camera: string): Observable<any> {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${NasaApiKey}`);
  }

  getNasaImagesAndVideos(): Observable<any> {
    return this.http.get('https://images-api.nasa.gov/search?media_type=image,video&api_key=' + NasaApiKey);
  }

  getOpenScienceData(): Observable<any> {
    return this.http.get('https://osdr.nasa.gov/osdr/data/osd/files/87.1')
  }


}
