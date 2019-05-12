let initialState;
let token = window.localStorage.getItem("token");
if(token){
  initialState = {
      loggedIn: true
  }
} else {
  initialState = {
    loggedIn: false
  }
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
      default:
        return state
    }
    return state;
  }