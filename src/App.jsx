import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {useState} from 'react'

import BookContext from './context/BookContext'
import AddBookForm from './pages/AddBookForm'
import Books from './pages/Books'
import Nav from './component/Nav'

const bookData = [
  {
    title: 'Book 1',
    author: 'Author 1',
    isRead: false
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    isRead: false
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    isRead: false
  },
  {
    title: 'Book 4',
    author: 'Author 4',
    isRead: true
  },
]

function App() {
  const [books, setBooks] = useState(bookData)

  function addBookHandler(book){
    setBooks({...books}, book)
  }

  return (
    <BookContext.Provider value={{books, addBookHandler}}>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/addBook' element={<AddBookForm />}/>
        </Routes>
      </Router>
    </BookContext.Provider>
  )
}

export default App
