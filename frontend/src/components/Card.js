import React, { Component } from 'react';
import './common.css';
class Card extends Component{
    render(){
        return (<div className="card">{this.props.children}</div>)
    }
}
export default Card;