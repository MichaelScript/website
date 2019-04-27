import React, { Component } from 'react';

class TitleScreen extends Component{
    render(){
        return (<div className="title-screen">
            <div className="screen-1">
                <div className="stars"></div>
                <div className="circle shadow">
                    <div className="title">Michael Green</div>
                    <div className="subtitle">Software Engineer</div>
                </div>
            </div>
        </div>)
    }
}

export default TitleScreen;