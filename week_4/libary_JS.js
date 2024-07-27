let library = [];

function addBook() {
    let title = document.getElementById('title').value;
    let about = document.getElementById('about').value;
    let author = document.getElementById('author').value;
    let pages = parseInt(document.getElementById('pages').value);
    let genre = document.getElementById('genre').value;

    if (title && author && pages && genre) {
        let book = {
            title: title,
            about: about,
            author: author,
            pages: pages,
            genre: genre
        };
        library.push(book);
        
    } else {
        alert('Please fill in all fields.');
    }
}

function searchBooks() {
    let searchTitle = document.getElementById('searchTitle').value.toLowerCase();
    let searchResult = library.filter(book => book.title.toLowerCase().includes(searchTitle));
    
    if (searchResult.length === 0) {
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        document.getElementById('errorMessage').style.display = 'none';
    }

    displayBooks(searchResult);
}

function displayBooks(books = library) {
    let bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>About: ${book.about}</p>
            <p>Pages: ${book.pages}</p>
            <p>Genre: ${book.genre}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}