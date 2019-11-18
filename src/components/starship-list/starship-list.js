import React, { Component } from 'react';

import ItemList from '../item-list';

import SwapiService from '../../services/swapi-services'

export default class StarshipList extends Component {
    swapiService = new SwapiService
    render() {
        return (
            <div>
                <ItemList
                    onItemSelected={() => {}}
                    getData={this.swapiService.getAllStarShips} />
            </div>
        )
    }
}