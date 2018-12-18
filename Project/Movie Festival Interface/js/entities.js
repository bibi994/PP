function Genre(name) {
  this.name = name;
}

Genre.prototype.getData = function () {
  return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
};

//Movies
function Movie(title, genre, length) {
  this.title = title;
  this.genre = genre;
  this.length = length;
}
Movie.prototype.getData = function () {
  return (
    this.title +
    ", duration: " +
    this.length +
    "min" +
    ", genre: " +
    this.genre.getData()
  );
};

var movieLists = [];

function addMovie(movie) {
  movieLists.push(movie);
}

function allMoviesLength(movieList) {
  var sum = 0;
  for (var i = 0; i < movieList.length; i++) {
    sum += movieList[i].length;
  }
  return sum;
}

function getMovies() {
  return movieLists;
}

// Program
function Program(date) {
  this.date = new Date(date);
  this.movies = [];
}

var listOfPrograms = [];

function addProgram(program) {
  listOfPrograms.push(program);
}

function getPrograms() {
  return listOfPrograms;
}

// ispisivanje datuma u formatu dd.mm.yyyy
Program.prototype.getData = function () {
  var dd = this.date.getDate();
  var mm = this.date.getMonth() + 1;
  var yyyy = this.date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return dd + "." + mm + "." + yyyy;
};

Program.prototype.print = function () {
  var dd = this.date.getDate();
  var mm = this.date.getMonth() + 1;
  var yyyy = this.date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return (
    dd +
    "." +
    mm +
    "." +
    yyyy +
    ", " +
    this.movies.length +
    " movies, duration: " +
    allMoviesLength(this.movies)
  );
};

var totalNumberInProgram = 0;

Program.prototype.addMovie = function (newMovie) {
  this.movies.push(newMovie);
};

function updateSelectAndList(programs) {
  var ul = document.querySelector("#programListPrint");
  ul.innerHTML = "";

  for (var i = 0; i < programs.length; i++) {
    ul.innerHTML += "<li>" + programs[i].print() + "</li>";
  }

  var select = document.querySelector("#selectOfPrograms");
  select.innerHTML = "<option>-</option>";

  for (var i = 0; i < programs.length; i++) {
    select.innerHTML += "<option>" + programs[i].print() + "</option>";
  }
}
