let initialState = {
    posts:[]
}
export const posts = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_POSTS':
            let newPosts = state.posts.concat(action.posts);
            return Object.assign({},state,{
                posts:newPosts
            })
        case 'DELETE_POST':
            return state;
        default:
            return state;
    }
}