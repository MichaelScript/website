import React, { Component } from 'react';
import TitleScreen from './home/TitleScreen';
import InfoCard from './home/InfoCard';
import SectionTwo from './home/SectionTwo'

class HomeContainer extends Component{
    render(){
        return (<div className="container">
            <TitleScreen></TitleScreen>
            <div className="card-container shadow">
                <InfoCard></InfoCard>
            </div>
            {/* <SectionTwo></SectionTwo> */}
        </div>)
    }
}

export default HomeContainer;