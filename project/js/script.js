"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', 'Количество');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gengers: Array(0),
    privat: false
};

