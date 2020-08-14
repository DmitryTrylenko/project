"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', 'Количество');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gengers: [],
    privat: false
};

howMoviesSaw();
lastSawMovies();
showMyDB(personalMovieDB.privat);
writeYourGenres(personalMovieDB.gengers);

function howMoviesSaw() {
    if (personalMovieDB.count <= 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

function lastSawMovies() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', 'Название');
        const b = prompt('На сколько оцените его', 'Оценка');
    
        if (a && b && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function showMyDB(checkPrivat) {
    if (!checkPrivat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres(createFavoriteGenger) {
    for (let i = 0; i < 3; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
        createFavoriteGenger[i] = a;
    }
    return createFavoriteGenger;
}
