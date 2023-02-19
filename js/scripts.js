"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {

  },
  actors: {

  },
  genres: [],
  privat: false,
};

const a = prompt('Один з останніх фільмів?', '');
const b = prompt('На скільки ви оцінюєте його?', '');
const c = prompt('Один з останніх фільмів?', '');
const d = prompt('На скільки ви оцінюєте його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);