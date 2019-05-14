import React, {Component} from 'react';
import PostEditor from './PostEditor.js';
import BlogPosts from './BlogPosts.js';
class DashboardContainer extends Component{

    render(){
        return (<div className="dashboard-container">
            <BlogPosts></BlogPosts>
            <PostEditor></PostEditor>
        </div>)
    }
}

export default DashboardContainer;