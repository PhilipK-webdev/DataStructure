import React from 'react'
import "../Nav/Nav.css"
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="home">
                        <Link to="/" id="link" className="link">
                            Home
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/stack" className="link">Stack</Link>
                        </li>
                        <li>
                            <Link to="/linkedList" className="link">Linked List</Link>
                        </li>
                        <li>
                            <Link to="/array" className="link">Array</Link>
                        </li>
                        <li>
                            <Link to="/queue" className="link">Queue</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Nav
