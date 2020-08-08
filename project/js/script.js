"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', 'Количество');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gengers: Array(0),
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', 'Название');
const b = prompt('На сколько оцените его', 'Оценка');
const c = prompt('Один из последних просмотренных фильмов', 'Название');
const d = prompt('На сколько оцените его', 'Оценка');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);