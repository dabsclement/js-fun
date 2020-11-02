class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
let myBook = new Book('The story of Tau', 'Will Alexander', 250);

console.log(myBook);