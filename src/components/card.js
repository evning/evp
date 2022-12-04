import React from 'react'
import * as cardStyles from "./card.module.css"

const Card = props => {
    <div classname={cardStyles.Card}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
}