import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import './app.css'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-services'
import ErrorBoundry from '../error-boundry/'

import { SwapiServiceProvider } from '../swapi-service-content'

import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages'

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true })

    }

    render() {
        
        if (this.state.hasError) {
            return <ErrorIndicator />
        }


        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="container app">
                        <Header />
                        <RandomPlanet /> 

                        <PeoplePage/>
                        <PlanetsPage />
                         <StarshipsPage />
 
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry >
        )
    }
}

