import {AUTH_SUCCESS,ERRMSG,RECEIVE_USER,RESET_USER} from './action-types'
import {reqRegister,reqLogin,reqUpdate} from "../api/index"

/*const authsuccess = (user)=>{type:AUTH_SUCCESS,data:user};*///很明显了吧，这么写是报错的。
/*声明同步登录注册成功或者失败的action*/
const authsuccess = (user)=>({type:AUTH_SUCCESS,data:user});
const errmsg = (msg)=>({type:ERRMSG,data:msg});
const receiveuser = (user) =>({type:RECEIVE_USER,data:user});
const resetuser = (msg)=>({type:RESET_USER,data:msg});

export function register({username,password,repassword,type}) {
  /*一个异步的注册函数，包含了同步的返回结果。*/
  return async dispatch=>{
    const response = await reqRegister({username,password,type});
    const result = response.data;
    if(!username||!password||!type){
      return dispatch(errmsg('输入值不能为空'));
    }
    if(password!==repassword){
      return dispatch(errmsg('两次密码不一致'));
    }
    if(result.code === 0){
      // debugger
      return dispatch(authsuccess(result.data))
    }else{
      return dispatch(errmsg(result.msg));
    }
  }
}
export function login({username,password}) {
  return async dispatch=>{
    const response = await reqLogin({username,password});
    const result = response.data;//{code:0,data:xxx}/{code:1,msg:xx}

    if(!username||!password){
      return dispatch(errmsg('输入值不能为空'));
    }
    if(result.code === 0){
      return dispatch(authsuccess(result.data));
    }else{
      return dispatch(errmsg(result.msg))
    }
  }
}
export function updateUser(user) {
  return async dispatch=>{
    const response = await reqUpdate(user);
    const result = response.data;
    if(result.code === 0){
      return dispatch(receiveuser(result.data));
    }else if(result.code === 1){
      return dispatch(resetuser(result.msg))
    }
  }
}