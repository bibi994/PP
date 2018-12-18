(function () {
    'use strict';

    function Country(name, odds, continents) {
        this.name = name;
        this.odds = odds;
        this.continents = continents;

        this.shortName = function () {
            return this.name[0].toUpperCase() + this.name[1].toUpperCase();
        }
    };

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.getData = function () {
            return this.name + " " + this.surname + " " + this.dateOfBirth.toLocaleDateString();
        };

        this.years = function () {
            return 2018 - this.dateOfBirth.getFullYear();
        };

    };

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getData = function () {
            return this.country.shortName() + ", " + this.betAmount + " eur, " + this.person.name + " " + this.person.surname + ", " + this.person.years() + " years";
        };

    };

    function Address(country, city, postalCode, streetAndNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;
        this.getData = function () {
            return this.streetAndNumber + ", " + this.postalCode + ", " + this.city + ", " + this.country.shortName();

        };
    };

    function BettingPlace(address, player) {
        // this.address = [];
        // this.address.push(address);
        this.address = address;
        this.listOfPlayers = [];
        this.listOfPlayers.push(player);

        this.getData = function () {
            var onlyStreet = this.address.streetAndNumber.split(" ");
            onlyStreet = onlyStreet[0];


            for (var i = 0; i < this.listOfPlayers.length; i++) {
                var sumOfAllBets = sumOfAllBets + this.listOfPlayers[i].betAmount;
            }
            return onlyStreet + ", " + this.address.postalCode + " " + this.address.city + ", sum of bets: " + sumOfAllBets;
        };

        this
    };

    function BettingHouse(competition, numberOfPlayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = numberOfPlayers;

    };

    var continent = Object.freeze({
        continent: "ASIA"
    });


    var serbia = new Country("Srbija", 1.25, "EU");
    var milos = new Person("Milos", "Djuretanovic", new Date("Oct 28 1994"));

    var player1 = new Player(milos, 1200, serbia);

    var address1 = new Address(serbia, "Belgrade", "11000", "Nemanjina 4");

    var place1 = new BettingPlace(address1);

    var house1 = new BettingHouse();


    console.log(address1.getData());
    console.log(player1.getData());
    console.log(place1.getData());





})();