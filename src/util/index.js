/*工具函数，用来实现动态跳转路由的*/

export function getRedirect(type,header) {
  let path;
  if(type === 'manager'){
    path = '/manager';
  }else if(type === 'basketballer'){
    path = '/basketballer';
  }
  /*if(!header){
    path+='info';
  }*/
  if(!header && type === 'manager'){
    path = '/managerinfo';
  }else if(!header && type === 'basketballer'){
    path = '/basketballerinfo';
  }
  return path;
}