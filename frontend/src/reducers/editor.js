let initialState = {
    "editorVisible":false,
};
  
export const editor = (state=initialState, action)=>{
    console.log('reducer', state, action);
    switch(action.type){
        case 'SHOW_EDITOR':
            console.log('Showing editor');
            return Object.assign({},state,{
                "editorVisible":true
            })
        case 'HIDE_EDITOR':
            console.log("hiding editor")
            return Object.assign({},state,{
                "editorVisible":false
            })
        case 'CHANGE_TITLE':
            return Object.assign({},state,{
                "title":action.title
            })
        case 'CHANGE_CONTENT':
            return Object.assign({},state,{
                content:action.content
            })
        default:
            return state
    }
}