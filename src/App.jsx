import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect, useRef } from 'react';

import BookContext from './context/BookContext';
import AddBookForm from './pages/AddBookForm';
import Books from './pages/Books';
import Nav from './component/Nav';

const bookData = [
  { title: 'Book 1', author: 'Author 1', isRead: false },
  { title: 'Book 2', author: 'Author 2', isRead: false },
  { title: 'Book 3', author: 'Author 3', isRead: false },
  { title: 'Book 4', author: 'Author 4', isRead: true }
];

function App() {
  const [books, setBooks] = useState([]);
  const hasMounted = useRef(false);

  // Load books from localStorage or default
  useEffect(() => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      setBooks(bookData);
    }
  }, []);

  // Save books to localStorage only after mount
  useEffect(() => {
    if (hasMounted.current) {
      localStorage.setItem('books', JSON.stringify(books));
    } else {
      hasMounted.current = true;
    }
  }, [books]);

  function addBookHandler(book) {
    setBooks(prevBooks => [...prevBooks, book]);
  }

  function updateBooks(selectedBook) {
    const updatedBooks = books.map(book =>
      book.title === selectedBook.title ? { ...book, isRead: !book.isRead } : book
    );
    setBooks(updatedBooks);
  }

  function deleteBookHandler(selectedBook) {
    const filtered = books.filter(book => book.title !== selectedBook.title);
    setBooks(filtered);
  }

  return (
    <BookContext.Provider value={{ books, addBookHandler, updateBooks, deleteBookHandler }}>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/addBook' element={<AddBookForm />} />
        </Routes>
      </Router>
    </BookContext.Provider>
  );
}

export default App;
