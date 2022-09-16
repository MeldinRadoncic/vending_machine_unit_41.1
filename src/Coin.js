import React from "react";
import {Link} from 'react-router-dom'

import './Coin.css'


const Coin = ({title,name, img}) => {

    return (
        
        <div className="Coin">
            <h1>{title}</h1>
<Link exact to={`${name}`}>
            <h3>{name}</h3>
            <img src={img} alt={img} />
            </Link>
        </div>
    )
}


export default Coin