import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/"><h1>The Dojo Blog</h1></Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
    )
}

export default Navbar