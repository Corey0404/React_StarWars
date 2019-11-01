import React from 'react'

import './header.css'

const Header = () => {
    return (
        <div className="d-flex header">
            <h1>Star DB</h1>
            <ul className="btn-group">
                <li>People</li>
                <li>Planets</li>
                <li>Starships</li>
            </ul>
        </div>
    )
}

export default Header