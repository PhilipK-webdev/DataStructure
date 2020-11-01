import React from 'react'
import "../Nav/Nav.css"
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="home">
                        <Link to="/" id="link">
                            Home
                    </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/stack">Stack</Link>
                        </li>
                        <li>
                            <Link to="/linkedList">Linked List</Link>
                        </li>
                        <li>
                            <Link to="/array">Array</Link>
                        </li>
                        <li>
                            <Link to="/queue">Queue</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Nav
