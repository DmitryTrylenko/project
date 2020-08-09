"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', 'Количество');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gengers: [],
    privat: false
};

if (personalMovieDB.count <= 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', 'Название');
    const b = prompt('На сколько оцените его', 'Оценка');

    if (a && b && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

console.log(personalMovieDB);