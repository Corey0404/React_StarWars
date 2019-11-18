import React, { Component } from 'react'

import './item-details.css'
import SwapiService from '../../services/swapi-services'

import Spinner from '../spinner'
import ErrorButton from '../error-button'

export default class ItemDetails extends Component {

    swapiService = new SwapiService()

    state = {
        item: null,
        image: null
    }

    componentDidMount() {
        this.updateItem()
    }

   componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId){
        this.updateItem()
    }
   } 

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props
        if(!itemId) {
            return
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            })
    }

    render() {
       
        if(!this.state.item) {
            return <Spinner />
        }

        const {item, image} = this.state
       
        const {name, gender, birthYear, eyeColor} = item 

        return (
            <div className="pearson-details jumbotron rounded d-flex">
                <img src={image} alt="item" />
                <div className="pearson-container">
                    <h2>{name}</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span> 
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span> 
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span> 
                            <span>{eyeColor}</span>
                        </li>
                        <li className="list-group-item">
                            <ErrorButton/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

