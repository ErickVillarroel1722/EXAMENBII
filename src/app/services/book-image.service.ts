import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookImageService {

  private booksApiUrl = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10';
  private dogApiUrl = 'https://dog.ceo/api/breed/beagle/images/random';
  private robotApiUrl = 'https://robohash.org/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(this.booksApiUrl);
  }

  getRandomDogImage(): Observable<any> {
    return this.http.get(this.dogApiUrl);
  }
  getFixedRobotImage(index: number): string {
    const robots = ['A', 'B', 'C', 'D', 'E']; 
    const robotText = robots[index % robots.length]; 
    return `${this.robotApiUrl}${robotText}?set=set1`;
  }
}
