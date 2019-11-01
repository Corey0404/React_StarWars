import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import './app.css'
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'
import PeoplePage from '../people-page'


export default class App extends Component {

    state = {
        showRandomPlanet: true

    }

    componentDidCatch() {
        this.setState({ hasError: true })

    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet /> :
            null;

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="container app">
                <Header />
                {planet}
                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
                <PeoplePage />
            </div>
        )
    }
}

