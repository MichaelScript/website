let initialState = {
    posts:[]
}

function findPostIndex(posts,actionId){
    for(let i = 0; i < posts.length; i++){
        if(posts[i].id == actionId){
            return i;
        }
    }
}
export const posts = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_POSTS':{
            let newPosts = state.posts.concat(action.posts);
            return Object.assign({},state,{
                posts:newPosts
            })
        }
        case 'DELETE_POST':{
            let deleteIndex = findPostIndex(state.posts,action.id);
            let newPosts = [...state.posts];
            newPosts.splice(deleteIndex,1);
            return Object.assign({},state,{
                posts:newPosts
            });
        }
        case 'EDIT_POST':{
            let editIndex = findPostIndex(state.posts,action.id);
            let newPosts = [...state.posts];
            newPosts[editIndex] = {
                title: action.title,
                content: action.content,
                id: action.id
            }
            return Object.assign({},state,{
                posts:newPosts
            })
        }
        default:{
            return state;
        }
    }
}