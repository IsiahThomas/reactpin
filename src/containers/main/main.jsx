import React, {Component} from 'react'
import ManagerInfo from '../manager-info/manager-info'
import BasketballerInfo from '../basketballer-info/basketballer-info'
import {Switch,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Cookie from 'js-cookie'
import {getRedirect} from '../../util/index'
import {getUser} from "../../redux/actions"
import {NavBar} from 'antd-mobile'
import Manager from '../manager/manager'
import Message from '../message/message'
import Basketballer from '../basketballer/basketballer'
import Personal from '../personal/personal'
import NotFound from '../../components/not-found/not-found'
import NavFooter from '../../components/nav-footer/nav-footer'

class Main extends Component {
  // 给组件对象添加属性
  navList = [
    {
      path: '/manager', // 路由路径
      component: Manager,
      title: '球员列表',
      icon: 'basketballer',
      text: '球员',
      hide:false
    },
    {
      path: '/basketballer', // 路由路径
      component: Basketballer,
      title: '经理列表',
      icon: 'manager',
      text: '经理',
      hide:false
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
      hide:false
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
      hide:false
    }
  ]
  //对于自动登录的问题，首先在我登录过之后会在cookie中留下userid,可是当我关闭浏览器
  //之后当初redux中的登录信息已经被抹去了，所以当我下次想要登录的时候，如果cookie中
  //还存在着这个userid，而user._id是不存在的，那么我就要通过这个cookie中的id去取user的值实现自动登录
  componentDidMount(){
    const userid = Cookie.get('userid');
    if(userid&&!this.props.user._id){
      console.log('发送ajax');
      this.props.getUser();
    }
  }
  render() {
  const userid = Cookie.get('userid');
  if(!userid){//如果cookie中都没有id那肯定是要你登录的。
    return <Redirect to='/login'/>
  }
  const {user} = this.props;
  if(!user._id){
      return null;
  }else {
    let path=this.props.location.pathname;
    if(path === '/'){
      path = getRedirect(user.type,user.header);
      return <Redirect to={path}/>
    }
  }
  /*const {user} = this.props;
  if(!user._id){
    return <Redirect to='/login'/>
  }*/
  const {navList} = this;
  let path = this.props.location.pathname;
  const currentNav = navList.find(nav=>nav.path === path);

  //在数据存在的函数中对其中的属性进行修改。

    if(currentNav){
    if(user.type === 'manager'){
      navList[1].hide = true;
    }else if(user.type === 'basketballer'){
      navList[0].hide = true;
    }
  }
    return (
      <div>
        {currentNav ? <NavBar>{currentNav.title}</NavBar> :null}
          <Switch>
            {
              //此时这个nav形参其实就是上方navList数组中的每一项，这就只是遍历显示而已，跟currentNav没有必然联系
              navList.map((nav,index) => <Route path={nav.path} component={nav.component} key={index}></Route>)
            }
            <Route path='/managerinfo' component={ManagerInfo}></Route>
            <Route path='/basketballerinfo' component={BasketballerInfo}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          <NavFooter navList={navList}></NavFooter>
      </div>
    )
  }
}export default connect(
  state =>({user:state.user}),
  {getUser}
)(Main)