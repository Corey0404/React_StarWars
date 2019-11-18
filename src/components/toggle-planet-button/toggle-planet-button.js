import React, { Component } from 'react'

import './toggle-planet-button.css'

export default class TogglePlanetButton extends Component {

    render() {
        const { toggleRandomPlanet } = this.props
        return (
            <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={() => toggleRandomPlanet()}>
                Toggle Random Planet
            </button>
        )
    }
}
