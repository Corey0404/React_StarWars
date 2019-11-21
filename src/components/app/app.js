import React, { Component } from 'react'

import Header from '../header'
import './app.css'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-services'
import ErrorBoundry from '../error-boundry/'
import { SwapiServiceProvider } from '../swapi-service-content'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StarshipDetails } from '../sw-components'
import RandomPlanet from '../random-planet'

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
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
                    <Router>
                        <div className="container app">
                            <Header />
                            <RandomPlanet />
                           
                            <Route path="/"
                                render={() => <h2 className="title">Welcome to StarDB</h2>}
                                exact />
                            <Route path="/people/:id?" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" exact component={StarshipsPage} />
                            <Route path="/starships/:id"
                                render={({ match }) => {
                                    const { id } = match.params
                                    return <StarshipDetails itemId={id} />
                                }} />

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry >
        )
    }
}

