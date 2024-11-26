// Step 3
import Books from './book.mjs';

// Step 4 (creating functions)
const printHighRatedBooks = () => {
  const highRatedBooks = Books.filter(book => book.rating > 4.5).map(book => book.title);
  console.log("Books with rating higher than 4.5:", highRatedBooks);
};

const printBookDetails = () => {
  Books.forEach(({ title, author, rating, genre }) => {
    console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
  });
};

const printFictionBooks = () => {
  const fictionBooks = Books.filter(book => book.genre.toLowerCase() === "fiction").map(book => book.title);
  console.log("Fiction books:", fictionBooks);
};

const displayBookAuthors = () => {
  const authors = Books.map(book => book.author);
  console.log("Authors:", authors);
};

printHighRatedBooks();
printBookDetails();
printFictionBooks();
displayBookAuthors();
