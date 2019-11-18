import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import './app.css'
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'

import TogglePlanetButton from '../toggle-planet-button'
import SwapiService from '../../services/swapi-services'

import Row from '../row'
import ItemDetails, { Record } from '../item-details/item-details'
import ItemList from '../item-list'
import ErrorBoundry from '../error-boundry/'
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components/details.js'

import { SwapiServiceProvider } from '../swapi-service-content'
import {
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components/item-lists.js'




export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false

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
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="container app">
                        <Header />
                        {planet}
                        <PersonDetails itemId={11}/>
                        <PlanetDetails itemId={5}/>
                        <StarshipDetails itemId={9}/>
                        <PersonList/>
                        <PlanetList/>
                        <StarshipList/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry >
        )
    }
}

