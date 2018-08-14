import {AUTH_SUCCESS,ERRMSG} from './action-types'
import {reqRegister,reqLogin} from "../api/index"

/*const authsuccess = (user)=>{type:AUTH_SUCCESS,data:user};*///很明显了吧，这么写是报错的。

const authsuccess = (user)=>({type:AUTH_SUCCESS,data:user});
const errmsg = (msg)=>({type:ERRMSG,data:msg});

export function register({username,password,repassword,type}) {
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