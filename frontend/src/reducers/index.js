let initialState = {
  "editorVisible":false
};
let token = window.localStorage.getItem("token");
if(token){
  initialState["loggedIn"] = true;
} else {
  initialState["loggedIn"] = false;
}
export const reducer = (state=initialState, action)=>{
    console.log('reducer', state, action);
    switch(action.type){
      case 'LOGIN':
        console.log('logging in');
        return Object.assign({},state,{
            "loggedIn":true
        })
      case 'LOGOUT':
        console.log('Logging out');
        return Object.assign({},state,{
          "loggedIn":false
        })
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
      default:
        return state
    }
  }