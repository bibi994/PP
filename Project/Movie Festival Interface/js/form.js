var $createMovieButton = document.querySelector("#createMovieButton");

$createMovieButton.addEventListener('click', createMovieButton);

function createMovieButton() {
    var $inputTitle = document.querySelector("#inputTitle").value;
    var $inputLength = document.querySelector("#inputLength").value;
    var $inputGenre = document.querySelector("#inputGenre").value;

    var movies = getMovies();
    // error message
    if (!$inputTitle) {
        $errorTitle = document.querySelector(".error-title");
        $errorTitle.innerText = "Pleae enter title!";
        return;
    } else {
        for (var i = 0; i < movies.length; i++) {
            if ($inputTitle == movies[i].title) {
                $errorTitle = document.querySelector(".error-title");
                $errorTitle.innerText = "Pleae enter new movie!";
                return;

            }
        }
    }

    if (!$inputLength) {
        $errorLength = document.querySelector(".error-length");
        $errorLength.innerText = "Pleae enter length!";
        $errorTitle.innerText = "";
        return;
    }

    // check leng in minutes
    if ($inputLength >= "300" || $inputLength <= "1") {
        $errorLength = document.querySelector(".error-length");
        $errorLength.innerText = "Pleae enter invalid length!";

        return;
    }

    if ($inputGenre == "Chose genre...") {
        $errorGenre = document.querySelector(".error-genre");
        $errorGenre.innerText = "Pleae chose genre!";
        $errorLength.innerText = "";
        return;
    }
    $errorGenre.innerText = "";

    var $inputLength = parseFloat($inputLength);
    var genre = new Genre($inputGenre);
    var movie = new Movie($inputTitle, genre, $inputLength);
    addMovie(movie);

    var $ul = document.querySelector("#movieListPrint");
    $ul.innerHTML += "<li>" + movie.getData() + "</li>";

    document.querySelector("#inputTitle").value = "";
    document.querySelector("#inputLength").value = "";
    document.querySelector("#inputGenre").value = "Chose genre...";

    var allMovie = allMoviesLength(movies);

    var $allMovieLength = document.querySelector("#allMoviesLength")
    $allMovieLength.innerText = "All movies length: " + allMovie;

    var $select = document.querySelector("#selectOfMovies");
    $select.innerHTML += "<option>" + movie.getData() + "</option>";

};

var createProgramButton = document.querySelector("#createProgramButton");

createProgramButton.onclick = function () {
    var $inputDate = document.querySelector("#inputDate").value;

    var program = new Program(inputDate);
    addProgram(program);

    var programs = getPrograms();
    updateSelectAndList(programs);


    // error Date message
    if (!$inputTitle) {
        $errorTitle = document.querySelector(".error-title");
        $errorTitle.innerText = "Pleae enter title!";
        return;
    } else {
        for (var i = 0; i < movies.length; i++) {
            if ($inputTitle == movies[i].title) {
                $errorTitle = document.querySelector(".error-title");
                $errorTitle.innerText = "Pleae enter new movie!";
                return;

            }
        }
    }

    document.querySelector("#inputDate").value = "";

};

var addMovieToProgramButton = document.querySelector("#addMovieToProgramButton");

addMovieToProgramButton.onclick = function () {
    var inputFilm = document.querySelector("#selectOfMovies").value;
    var inputProgram = document.querySelector("#selectOfPrograms").value;

    var movies = getMovies();
    var movie;
    for (var i = 0; i < movies.length; i++) {
        if (inputFilm == movies[i].getData()) {
            movie = movies[i];
            break;
        }
    }

    var programs = getPrograms();
    var program;
    for (var i = 0; i < programs.length; i++) {
        if (inputProgram == programs[i].print()) {
            program = programs[i];
            break;
        }
    }

    program.addMovie(movie);
    updateSelectAndList(programs);

    document.querySelector("#selectOfMovies").value = "-";

};
