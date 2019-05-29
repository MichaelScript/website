import React, {Component} from 'react';
import HomeContainer from '../HomeContainer';

class InfoCard extends Component{
    render(){
        return (<div className="shadow info-card">
                <p> 
                    Michael Green is 23 years old and lives in San Diego, California.
                    He is a software engineer who specializes in web application development.</p>
                <p>
                    Michael is currently attending San Diego State University where he studies Computer Science.
                    He started programming when he was eight years old making small websites for video games he played.
                </p>
                <p>
                    Michael's interests include web application development, information theory, and machine learning.
                    In his spare time he enjoys programming, reading, and playing video games.
                    Michael's favorite programming language is Python.
                </p>
        </div>)
    }
}

export default InfoCard;