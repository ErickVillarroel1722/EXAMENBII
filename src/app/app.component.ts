import { Component, OnInit } from '@angular/core';
import { BookImageService } from './services/book-image.service';

interface Book {
  title: string;
  author_name: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  books: Book[] = [];
  images: string[] = [];

  constructor(private bookImageService: BookImageService) {}

  ngOnInit() {
    
    this.bookImageService.getBooks().subscribe((data: any) => {
      this.books = data.results;

    
      this.books.forEach((book, index) => {
        if (index % 2 === 0) {
          
          this.bookImageService.getRandomDogImage().subscribe((dogData: any) => {
            this.images.push(dogData.message);
          });
        } else {
         
          const robotImage = this.bookImageService.getFixedRobotImage(index);
          this.images.push(robotImage);
        }
      });
    });
  }

  onButtonClick(bookTitle: string) {
    console.log('Botón presionado para el libro:', bookTitle);
  }
}
