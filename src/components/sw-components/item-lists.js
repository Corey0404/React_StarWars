import React from 'react'
import ItemList from '../item-list'
import withData from '../hoc-helpers/with-data'
import SwapiService from '../../services/swapi-services'

const swapiService = new SwapiService

const {
    getAllPeople,
    getAllPlanets,
    getAllStarShips
} = swapiService

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}
  
const renderName = ({name}) => <span>{name}</span> 

 
const PersonList = withData
                        (withChildFunction(ItemList, renderName), 
                        getAllPeople)

const PlanetList = withData
                        (withChildFunction(ItemList, renderName), 
                        getAllPlanets)

const StarshipList = withData(
                        withChildFunction(ItemList, renderName), 
                        getAllStarShips)

export {
    PersonList,
    PlanetList,
    StarshipList
}