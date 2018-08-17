import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERRMSG,RESET_USER,RECEIVE_USER,RECEIVE_USER_LIST} from './action-types'
import {getRedirect} from "../util/index";

const initUser = {
  username:'',
  type:'',
  msg:'',
  redirectTo:''
}
const initUserList = [];
function user(state=initUser,action) { //action中有两个属性，一个是type,一个是data
  switch (action.type){
    case AUTH_SUCCESS:
      // debugger
      const {type,header} = action.data;
      console.log("-------"+type);
      return {...action.data, redirectTo:getRedirect(type,header)};
    case ERRMSG:
      return {msg:action.data};
    case RECEIVE_USER:
      return action.data;
    case RESET_USER:
      return {...initUser,msg:action.data};
    default:
      return state;
  }
}
function userList(state=initUserList,action) {
  switch (action.type){
    case RECEIVE_USER_LIST:
      return action.data;
    default:
      return state;
  }
}
export default combineReducers({
  user,
  userList
})