import React from 'react'

import withData from '../hoc-helpers'

import './item-list.css'
import SwapiService from '../../services/swapi-services'
import Spinner from '../spinner'

const ItemList = (props) => {
        const {data, onItemSelected, children: renderLabel} = props
        const items = data.map((item) => {
            const {id} = item
            const label = renderLabel(item)
            return (
                <li className="list-group-item list-group-item-action"
                    key={id}
                    onClick={() => onItemSelected(id)}>
                   {label}
                </li>
            )
        })
    
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }

export default ItemList





