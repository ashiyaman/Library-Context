import { useContext } from "react"
import BookContext from "../context/BookContext"

const Books = () => {
    const {books, updateBooks} = useContext(BookContext)
    return (
        <main className='container py-4'>
            <h3>Book List</h3>
                <>
                {books.length > 0 ? (
                    <ul className='list-group'>
                        {books.map(book => (
                            <li className='list-group-item' key={book.title}>
                                {book.title} - {book.author } - 
                                <input type='checkbox' checked={book.isRead} onChange={() => updateBooks}/>{book.isRead ? 'Unread' : 'Read'}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No Books Found.</p>
                )}
            </>
        </main>
    )
}

export default Books