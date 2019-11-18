import React, { Component } from 'react'

import './item-details.css'
import Spinner from '../spinner'
import ErrorButton from '../error-button'

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export { Record }

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props
        if (!itemId) {
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

        if (!this.state.item) {
            return <Spinner />
        }

        const { item, image } = this.state

        const { name } = item

        return (
            <div className="pearson-details jumbotron rounded d-flex">
                <img src={image} alt="item" />
                <div className="pearson-container">
                    <h2>{name}</h2>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
    }
}

