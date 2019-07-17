"use strict";

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern","gothic","coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography","short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian","sci-fi","political fiction"]
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];

const bookTitles = books.map(function(book){
    return book.title;
});
/*
    MAP
    using .map, create an array that returns all author names.
 */
const bookAuthor = books.map(book => book.author);

const comingOfAge = books.filter(function(book){
    return book.genres.indexOf("coming of age") >= 0;
});
/*
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */
const threeGenres = books.filter(book => book.genres.length > 2);
/*
    REDUCE
    using .reduce, return the total years between all books.
 */
const longestName = books.reduce(function(previous,current){
    const currentName = current.author;
    if(currentName.length > previous.length){
        return currentName;
    }else{
        return previous;
    }
},"");

const totalYears = books.reduce(function(total, current){
    const currentTotal = current.yearsInPublication;
    return total + currentBook;
},0);