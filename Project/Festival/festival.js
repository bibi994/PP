'use strict';
(function () {

    function Genre(name) {
        this.name = name;

        this.getData = function () {
            return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
        };
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            return this.title + ', ' + this.length + 'min, ' + genre.getData();
        };
    }
    function Program(date) {
        this.date = new Date(date);
        this.listOfMoivies = [];
        this.totalNumbersOfMovies = 0;
        this.addMovie = function (newMovie) {
            this.listOfMoivies.push(newMovie);
            this.totalNumbersOfMovies++;

        }
        this.getData = function () {
            var allData = '';
            var movieLength = 0;

            for (var i = 0; i < this.listOfMoivies.length; i++) {
                allData += this.listOfMoivies[i].getData() + '\n';
                movieLength += this.listOfMoivies[i].length;
            }

            return this.date.toDateString() + ', ' + movieLength + '\n' + allData;
        }
    }
    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];

        this.totalNumbersOfMovies = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                sum += this.listOfPrograms[i].totalNumbersOfMovies;
            }
            return sum;
        };




        this.addProgram = function (newProgram) {
            this.listOfPrograms.push(newProgram);
        }


        this.getData = function () {
            var allFilmsInProgram = 'Weekend festival has ' + this.totalNumbersOfMovies() + " movies" + "\n ";
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                allFilmsInProgram += this.listOfPrograms[i].getData() + '\n';
            }
            return allFilmsInProgram;
        }
    }





    var genre = new Genre("Action");

    var terminator = new Movie("Terminator", genre, 150);
    var lesi = new Movie("Lesi se vraca kuci", genre, 250);
    var forest = new Movie("forest", genre, 150);
    var misa = new Movie("misa", genre, 250);

    var program1 = new Program('2018,11,25');
    var program2 = new Program('2018,11,26');

    var festival = new Festival('Kan');


    program1.addMovie(terminator);
    program1.addMovie(lesi);

    program2.addMovie(forest);
    program2.addMovie(misa);

    festival.addProgram(program1);
    festival.addProgram(program2);

    console.log(festival.getData());



})();