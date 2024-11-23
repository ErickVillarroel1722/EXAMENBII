import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookImageService {

  private booksApiUrl = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10'; // Endpoint para obtener libros
  private dogApiUrl = 'https://dog.ceo/api/breed/a:enpinscher/images/random'; // Endpoint para obtener imagen de perro
  private robotApiUrl = 'https://robohash.org/'; // Endpoint para obtener imagen de robot

  constructor(private http: HttpClient) {}

  // Método para obtener los libros
  getBooks(): Observable<any> {
    return this.http.get(this.booksApiUrl);
  }

  // Método para obtener una imagen aleatoria de un perro
  getRandomDogImage(): Observable<any> {
    return this.http.get(this.dogApiUrl);
  }

  // Método para obtener una imagen aleatoria de un robot
  getRandomRobotImage(bookTitle: string): Observable<any> {
    return this.http.get(`${this.robotApiUrl}${bookTitle}`);
  }
}
