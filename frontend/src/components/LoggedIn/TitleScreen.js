import React, { Component } from 'react';

class TitleScreen extends Component{
    render(){
        return (<div className="title-screen">
        <div className="header">
            <div className="big-header">Michael Green</div>
            <div className="small-header">Software Engineer</div>
            <div className="buttons">
                <div className="button shadow">Blog</div>
                <div className="button shadow">Contact</div>
            </div>
        </div>
        </div>)
    }
}

export default TitleScreen;