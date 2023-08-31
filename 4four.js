/*Filtering and capitalizing:Books published After 2010 with Author Names. */
/*Write a program that takes a list of books,including their authors and publication years as input.The program should then filter out all books
that were published before 2010 and create a new array with the remaining books,but with their author names capitalized. */

const booksDetails = [
    {
        title: "Midnight's Children",
        author: "Salman Rushdie",
        publicationYear: 2005
      },
      {
        title: "The God of Small Things",
        author: " Arundhati Roy",
        publicationYear: 2012
      },
      {
        title: "A Suitable Boy",
        author: "Vikram Seth",
        publicationYear: 2008
      },
      {
        title: "The White Tiger",
        author: "Aravind Adiga",
        publicationYear: 2015
      }
];

const bookFilter = booksDetails.filter(booksDetails => booksDetails.publicationYear >= 2010)
    .map(booksDetails => ({
        title: booksDetails.title,
        author:booksDetails.author.toUpperCase(),
        publicationYear: booksDetails.publicationYear
    }))

    console.log(bookFilter)


const bookfilter = booksDetails.filter(booksDetails => booksDetails.publicationYear)






