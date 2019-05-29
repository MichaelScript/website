import React, { Component } from 'react';
import coffee from '../../../images/coffee.jpg';
class TitleScreen extends Component{
    render(){
        return (<div className="title-screen">
        <div className="header">
            <div className="big-header">Michael Green</div>
            <div className="small-header">Software Engineer</div>
            <div className="buttons">
                <a href="/blog" className="button shadow">Blog</a>
                <a href="#" className="button shadow">Contact</a>
            </div>
        </div>
        </div>)
    }
}

export default TitleScreen;