




const personalMovieDB = {
    count: 0,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,
    start() {
        this.count = prompt("Сколько фильмов вы уже посмотрели?","");
    
        while(this.count === `` || this.count === null || isNaN(this.count)) {
            alert("Пожалуйста введите корректные данные!");
            this.count = prompt("Сколько фильмов вы уже посмотрели?","");
        }
    },
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i}`,``);
            if (answer === null || answer === "") {
                alert("Пожалуйста введите корректные данные!");
                i--;
                continue;
            } else {
                this.genres.push(answer);
            }
            
        }

        this.genres.forEach((item, i, arr) => {
            return console.log(`Любимый жанр #${i+1} - это ${item}`);
        } );
    },

    rememberMyFilms() {
        for (let i = 0; i < 2; i++){
            const answer = prompt("Один из последних просмотренных фильмов?","");
            const answer2 = prompt("На сколько оцените его?", "");
        
            if (answer === "" || answer2 === "" || answer === null || answer2 === null || answer.length  > 50) {
                alert("Пожалуйста введите корректные данные!");
                i--;
                console.log("error");
                continue;
            } else {
                console.log("good");
                this.movies[answer] = answer2;
            }
        }
    },
    detectPersonalLevel() {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count <= 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
       
    },
    showMyDB() {
        if (!this.privat) {
            console.log(this);
        }
    },

    toggleVisibleMyDB() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }



};

personalMovieDB.start();

personalMovieDB.writeYourGenres();

