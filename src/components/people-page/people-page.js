import React, { Component } from 'react'

import ItemList from '../item-list'
import PearsonDetails from '../pearson-details'

import './people-page.css'
import ErrorIndicator from '../error-indicator'

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, info) {
        debugger
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson })
    }

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="d-flex row">
                <div className="col-sm-6">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                <div className="col-sm-6">
                    <PearsonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
}