import React, { Component } from 'react';
import TitleScreen from '../components/TitleScreen';
import '../css/common.css';
class Home extends Component{
    render(){
        return (
            <div className="container"> 
                <TitleScreen></TitleScreen>
            </div>)
    }
}

export default Home;