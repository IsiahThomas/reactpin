import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'
import store from './redux/store'
import {Provider} from 'react-redux'
/*为什么Main这个路由组件没有写路径呢？因为只要不是请求前两个路径，剩下其他的都要经过Main,所以不用写*/
ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <Switch>
    <Route path='/register' component={Register}></Route>
    <Route path='/login' component={Login}></Route>
    <Route component={Main}></Route>
    </Switch>
  </HashRouter></Provider>,document.getElementById('root'));
