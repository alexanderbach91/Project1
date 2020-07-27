let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

    while(numberOfFilms === `` || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,


};

// for (let i = 1; i <= 2; i++) {
//     const answer = prompt("Один из последних просмотренных фильмов?","");
//     const answer2 = prompt("На сколько оцените его?", "");

//     if (answer !== "" && answer2 !== "" && answer !== null && answer2 !== null && answer.length < 50) {
//         personalMovieDB.movies[answer] = answer2;
//         console.log("good");
//     } else {
//         console.log("error");
//         i--;
//     }

// }
function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const answer = prompt("Один из последних просмотренных фильмов?","");
        const answer2 = prompt("На сколько оцените его?", "");
    
        if (answer === "" || answer2 === "" || answer === null || answer2 === null || answer.length  > 50) {
            i--;
            console.log("error");
            continue;
        } else {
            console.log("good");
            personalMovieDB.movies[answer] = answer2;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
   
}

detectPersonalLevel();

 
function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let answer = prompt(`Ваш любимый жанр под номером ${i}`,``);
        personalMovieDB.genres.push(answer);
    }
}

writeYourGenres();

showMyDB();
