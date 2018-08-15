import ajax from './ajax'
/*下面的是接口函数，是可以用来向路由请求数据的函数*/
export const reqRegister = (data)=>ajax('/register',data,'POST');
export const reqLogin = (data) => ajax('/login',data,'POST');
export const reqUpdate = (data) =>ajax('/update',data,'POST');