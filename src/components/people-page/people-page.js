import React, { Component } from 'react'

import ItemList from '../item-list/item-list'
import ItemDetails from '../item-details'
import './people-page.css'
import Row from '../row';
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../services/swapi-services'

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson })
    }

    render() {

        const itemList = (
            <ItemList 
                onItemSelected={() => {}} 
                getData={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}    
            </ItemList>        
        )

        const pearsonDetails = (
            <ErrorBoundry>
                <ItemDetails personId={this.state.selectedPerson} />
            </ErrorBoundry>
        )

        return (
            <Row left={itemList}
                right={pearsonDetails} />
        )
    }
}