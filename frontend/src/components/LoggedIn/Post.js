import React, {Component} from 'react';
import { post } from '../../util';

class Post extends Component{
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        let id = this.props.id;
        post('/api/blog/deletePost',{"id":id},(data)=>{
            alert(data);
        })
    }

    render(){
        return <div className="blog-post shadow">
            <div className="blog-title">{this.props.title}</div>
            <div className="blog-content">{this.props.content}</div>
            <div className="blog-menu">
                <button className="blog-button">Edit</button>
                <button onClick={this.delete} className="blog-button">Delete</button>
            </div>
        </div>
    }
}

export default Post;