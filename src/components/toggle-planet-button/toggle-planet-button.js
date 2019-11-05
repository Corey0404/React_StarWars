import React, { Component } from 'react'

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
