import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import BookContext from './context/BookContext'
import AddBookForm from './pages/AddBookForm'

function addBookHandler(book){
  console.log('here....', book)
}

const books = [
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
    isRead: false
  },
]

function App() {
  return (
    <BookContext.Provider value={{books: books, addBookHandler}}>
      <Router>
        <Routes>
          <Route path='/addBook' element={<AddBookForm />}/>
        </Routes>
      </Router>
    </BookContext.Provider>
  )
}

export default App
