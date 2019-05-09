import React, { Component } from 'react';
import TitleScreen from '../components/TitleScreen';
import InfoCard from '../components/InfoCard';
import SectionTwo from '../components/SectionTwo';
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