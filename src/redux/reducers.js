import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERRMSG} from './action-types'

const initUser = {
  username:'',
  type:'',
  msg:'',
  redirectTo:''

}
function user(state=initUser,action) { //action中有两个属性，一个是type,一个是data
  switch (action.type){
    case AUTH_SUCCESS:
      return {...action.data, redirectTo: '/'};
    case ERRMSG:
      return {msg:action.data};
    default:
      return state;
  }
}

export default combineReducers({
  user
})