//using a class to create book objects
//script name(Book.js)
class Book{
    constructor(
        category,
        title,
        author,
        year,
        readStatus

    ) {
        this.category = category;
        this.title = title;
        this.author = author;
        this.year = year;
        this.readStatus = readStatus;
    }

updatereadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
}
}


export default Book;