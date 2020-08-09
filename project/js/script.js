"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', 'Количество');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gengers: Array(0),
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', 'Название');
    const b = prompt('На сколько оцените его', 'Оценка');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

console.log(personalMovieDB);