import { Component } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { moviesMock } from '../../mocks/mockDataMovies';

@Component({
  selector: 'app-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class MoviesComponent {
  movies: Movie[] = moviesMock;
}
