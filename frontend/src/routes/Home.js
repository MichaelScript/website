import React, { Component } from 'react';
import TitleScreen from '../components/LoggedOut/TitleScreen';
import InfoCard from '../components/LoggedOut/InfoCard';
import SectionTwo from '../components/LoggedOut/SectionTwo';
import '../css/common.css';
class Home extends Component{
    render(){
        return (
            <div className="container">
                <TitleScreen></TitleScreen>
                <div className="card-container">
                    <InfoCard></InfoCard>
                    <InfoCard></InfoCard>
                </div>
                <SectionTwo></SectionTwo>
            </div>)
    }
}

export default Home;