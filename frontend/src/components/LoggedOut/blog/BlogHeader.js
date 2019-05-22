import React, {Component} from 'react';

class BlogHeader extends Component{
    render(){
        return <div className="header-container">
            <a href="/blog/">
                <div>
                    <h1>Michael Green</h1>
                    <h2>A blog about life and software engineering</h2>
                </div>
            </a>
        </div>
    }
}

export default BlogHeader;