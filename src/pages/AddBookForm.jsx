import { useContext, useState } from "react"
import BookContext from "../context/BookContext"
import { useNavigate } from "react-router-dom"

const AddBookForm = () => {
    const navigate = useNavigate()
    const {addBookHandler} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [isRead, setIsRead] = useState(false)

    const formSubmitHandler = (e) => {
        e.preventDefault()
        console.log('..is read')
        const book = { title: title, author: author, isRead: isRead }
        if(!title || !author ){
            return
        }
        addBookHandler(book)
        navigate('/')
    }

    return (
        <form className='container py-4' onSubmit={formSubmitHandler}>
            <h1>Add Book</h1>
            <label>Title: </label><br/>
            <input type='text' className='form-control' onChange={(e) => setTitle(e.target.value)} /><br/>
            <label>Author: </label><br/>
            <input type='text' className='form-control' onChange={(e) => setAuthor(e.target.value)}/><br/>
            <input type='checkbox' onChange={() => setIsRead(!isRead)}/>
            <label>  Read</label><br/><br/>
            <input type='submit' value='Add Book' className='btn btn-success'/>
        </form>
    )
}

export default AddBookForm