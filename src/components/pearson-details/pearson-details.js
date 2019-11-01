import React, { Component } from 'react'

import './pearson-details.css'
import SwapiService from '../../services/swapi-services'

import Spinner from '../spinner'
import ErrorButton from '../error-button'

export default class PearsonDetails extends Component {

    swapiService = new SwapiService()

    state = {
        person: null
    }

    componentDidMount() {
        this.updatePerson()
    }

   componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId){
        this.updatePerson()
    }
   } 

    updatePerson() {
        const {personId} = this.props
        if(!personId) {
            return
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({person})
            })
    }

    render() {

        if(!this.state.person) {
            return <Spinner />
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.person

        return (
            <div className="pearson-details jumbotron rounded d-flex">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
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
                    </ul>
                </div>
            </div>
        )
    }
}

