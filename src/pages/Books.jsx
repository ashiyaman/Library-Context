import { useContext, useState } from "react"
import BookContext from "../context/BookContext"

const Books = () => {
    const { books, updateBooks, deleteBookHandler } = useContext(BookContext)
    const [filter, setFilter] = useState("all") // all, read, unread

    const filteredBooks = books.filter(book => {
        if (filter === "read") return book.isRead
        if (filter === "unread") return !book.isRead
        return true // all
    })

    const readCount = books.filter(book => book.isRead).length
    const unreadCount = books.filter(book => !book.isRead).length

    return (
        <main className="container py-4">
            <h3 className="mb-4">Book List</h3>

            {/* Pills */}
            <div className="mb-4">
                <button 
                    className={`btn btn-outline-primary me-2 ${filter === "all" ? "active" : ""}`} 
                    onClick={() => setFilter("all")}
                >
                    All Books ({books.length})
                </button>
                <button 
                    className={`btn btn-outline-success me-2 ${filter === "read" ? "active" : ""}`} 
                    onClick={() => setFilter("read")}
                >
                    Read ({readCount})
                </button>
                <button 
                    className={`btn btn-outline-warning ${filter === "unread" ? "active" : ""}`} 
                    onClick={() => setFilter("unread")}
                >
                    Unread ({unreadCount})
                </button>
            </div>

            {filteredBooks.length > 0 ? (
                <ul className="list-group">
                    {filteredBooks.map(book => (
                        <li className="list-group-item d-flex justify-content-between" key={book.title}>
                            <div>
                                {book.title} - {book.author} - Status:{" "}
                                <input
                                    type="checkbox"
                                    checked={book.isRead}
                                    onChange={() => updateBooks(book)}
                                />{" "}
                                {book.isRead ? "Read" : "Unread"}
                            </div>
                            <button className="btn btn-danger" onClick={() => deleteBookHandler(book)}>
                                Delete Book
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No Books Found.</p>
            )}
        </main>
    )
}

export default Books
