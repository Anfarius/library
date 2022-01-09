// create empty array to hold the books in

let myLibrary = [];

// object construction for books

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = `${pages} pages`;
    this.isRead = isRead;
    this.changeIsRead = function () {
        if (this.isRead) {
            this.isRead = false;
        } else {
            this.isRead = true;
        }
    }
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
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete?";
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", deleteBook);

        card.appendChild(title);
        card.appendChild(isRead);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(deleteBtn);

        content.appendChild(card);
    });
}

// function which deletes the book at index and refreshes the library display

function deleteBook() {
    bookIndex = this.parentElement.id;
    myLibrary.splice(bookIndex, 1);
    displayBooks();
}

// function handling the changing of the read status

function changeIsRead() {
    const currentBook = myLibrary[this.parentElement.id];
    currentBook.changeIsRead();
    displayBooks();
}

// event listener controlling the log a book button showing and hiding the form

const logBtn = document.querySelector("#log");
logBtn.addEventListener("click", showLogForm);

function showLogForm() {
    const logForm = document.querySelector("#form");

    if (logForm.style.display === "flex") {
        logForm.style.display = "none";
    } else {
        logForm.style.display = "flex";
    }
}

// event listener controlling the submit button to read the input and add a
// book, then display it

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", submitBook)

function submitBook() {
    const inputTitle = document.getElementById("input-title");
    const inputAuthor = document.getElementById("input-author");
    const inputPages = document.getElementById("input-pages");
    const inputRead = document.getElementById("input-read");
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    const isRead = inputRead.checked;
    addBookToLibrary(title, author, pages, isRead);
    displayBooks();
    showLogForm();
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    inputRead.checked = false;
}

// initial library


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", true);
addBookToLibrary("Hyperion", "Dan Simmons", "482", true);
addBookToLibrary("Warbreaker", "Brandon Sanderson", "592", true);
addBookToLibrary("Dune", "Frank Herbert", "412", true);
addBookToLibrary("Leviathan Wakes", "James S. A. Corey", "577", false);
addBookToLibrary("Foundation", "Isaac Asimov", "255", false);
displayBooks();