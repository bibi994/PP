// Write objects representing a book, an animal, a person.

function Animal(name, color, size, age) {
    this.name = name;
    this.color = color;
    this.size = size;
    this.age = age;
}

function Book(name, author, pages, sold) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.sold = sold;
}

function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

var bitbook = new Book("Bitbook", "Students", "125", "20");
console.log(bitbook);