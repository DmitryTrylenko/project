"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', 'Количество');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gengers: [],
    privat: false,
    howMoviesSaw: function () {
        if (personalMovieDB.count <= 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    lastSawMovies: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов', 'Название');
            const b = prompt('На сколько оцените его', 'Оценка');
        
            if (a && b && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    showMyDB: function (checkPrivat) {
        if (!checkPrivat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function (createFavoriteGenger) {
        for (let i = 0; i < 3; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
            createFavoriteGenger[i] = a;
        }
        return createFavoriteGenger;
    },
    toggleVisibleMyDB: function (checkOptionPrivat) {
        if (checkOptionPrivat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

//personalMovieDB.howMoviesSaw();
//personalMovieDB.lastSawMovies();
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
//personalMovieDB.showMyDB(personalMovieDB.privat);
//personalMovieDB.writeYourGenres(personalMovieDB.gengers);

console.log(personalMovieDB.privat);