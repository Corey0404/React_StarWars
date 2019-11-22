import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'

const Header = () => {

    return (
        <div className="d-flex header">
            <h1>
                <Link to="/" > Star DB</Link>
            </h1>
            <ul className="btn-group">
                <li>
                    <Link to="/people/">People</Link> 
                </li>
                <li>
                    <Link to="/planets/">Planets</Link> 
                </li>
                <li>
                    <Link to="/starships/">Starships</Link> 
                </li>
                <li>
                    <Link to="/login">Login</Link> 
                </li>
                <li>
                    <Link to="/secret">Secret</Link> 
                </li>
            </ul>
        </div>
    )
}

export default Header