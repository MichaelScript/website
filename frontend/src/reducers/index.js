import {combineReducers} from 'redux';
import {editor} from './editor';
import {posts} from './posts';

let initialState = {};
let token = window.localStorage.getItem("token");
if(token){
  initialState["loggedIn"] = true;
} else {
  initialState["loggedIn"] = false;
}
let login = (state=initialState, action)=>{
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
}

export const reducer = combineReducers({login,editor,posts});