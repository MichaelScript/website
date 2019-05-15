let initialState = {
    posts:[]
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
            let deleteIndex;
            for(let i = 0; i < state.posts.length; i++){
                if(state.posts[i].id = action.id){
                    deleteIndex = i;
                }
            }
            let newPosts = [...state.posts];
            newPosts.splice(deleteIndex,1);
            return Object.assign({},state,{
                posts:newPosts
            });
        }
        default:{
            return state;
        }
    }
}