// create empty array to hold the books in

let myLibrary = [];

// object construction for books

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = `${pages} pages`;
    this.isRead = isRead;
}

// function which adds books created using the object constructor to the array
// library

function addBookToLibrary(title, author, pages, isRead) {
    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

// function which loops through the library array to display each book as a
// separate card on the page

function displayBooks() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = `${index}`;
        const title = document.createElement("div");
        title.classList.add("title")
        title.textContent = book.title;
        const author = document.createElement("div");
        author.classList.add("author")
        author.textContent = book.author;
        const pages = document.createElement("div");
        pages.classList.add("page-number")
        pages.textContent = book.pages;
        const isRead = document.createElement("div");
        isRead.classList.add("isRead");
        if (book.isRead) {
            isRead.textContent = "Read";
        } else {
            isRead.textContent = "Not read";
        }
        isRead.addEventListener("click", changeIsRead);

        card.appendChild(title);
        card.appendChild(isRead);
        card.appendChild(author);
        card.appendChild(pages);

        content.appendChild(card);
    });
}

// function handling the changing of the read status

function changeIsRead() {
    const currentBook = myLibrary[this.parentElement.id];
    if (currentBook.isRead) {
        currentBook.isRead = false;
    } else {
        currentBook.isRead = true;
    }
    displayBooks();
}

// test

for (let i = 0; i < 3; i++) {
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", false);
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
displayBooks();
