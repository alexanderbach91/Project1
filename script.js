let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,


};

for (let i = 1; i <= 2; i++) {
    const answer = prompt("Один из последних просмотренных фильмов?","");
    const answer2 = prompt("На сколько оцените его?", "");

    if (answer !== "" && answer2 !== "" && answer !== null && answer2 !== null && answer.length < 50) {
        personalMovieDB.movies[answer] = answer2;
        console.log("good");
    } else {
        console.log("error");
        i--;
    }

}
 if (personalMovieDB.count < 10) {
     alert("Просмотрено довольно мало фильмов");
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
     alert("Вы классический зритель");
 } else if (personalMovieDB.count > 30) {
     alert("Вы киноман");
 } else {
     alert("Произошла ошибка");
 }

console.log(personalMovieDB);
