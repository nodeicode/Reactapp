import React from 'react';
import './Card.css'

class Card extends React.Component{
    render(){
        return(
            <div className="Card">
            <h2>Form here</h2>
            <p>{this.props.tag}</p>
            </div>
        );
    }
    
}

export default Card;