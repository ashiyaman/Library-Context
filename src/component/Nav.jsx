import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className='navbar bg-info'>
            <div className='container'>
                <Link to='/' className='navbar-brand'>Book Management</Link>
                <ul className='navbar-nav d-flex flex-row'>
                    <Link className='nav-link mx-4 fw-semibold' to='/'>All Books</Link>
                    <Link className='nav-link fw-semibold' to='/addBook'>Add Book</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav