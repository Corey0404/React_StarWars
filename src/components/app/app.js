import React, { Component } from 'react'

import Header from '../header'
import './app.css'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-services'
import ErrorBoundry from '../error-boundry/'
import { SwapiServiceProvider } from '../swapi-service-content'
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    LoginPage,
    SecretPage
} from '../pages'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { StarshipDetails } from '../sw-components'
import RandomPlanet from '../random-planet'

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false,
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {

        const { isLoggedIn } = this.state

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
                            <Switch>
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
                                <Route
                                    path="/login"
                                    render={() => (
                                        <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin} />
                                    )} />
                                <Route
                                    path="/secret"
                                    render={() => (
                                        <SecretPage isLoggedIn={isLoggedIn} />
                                    )} />
                                <Route render={() => <h2>Page not found</h2> }/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry >
        )
    }
}

