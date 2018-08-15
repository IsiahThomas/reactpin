import React, {Component} from 'react'
import ManagerInfo from '../manager-info/manager-info'
import BasketballerInfo from '../basketballer-info/basketballer-info'
import {Switch,Route} from 'react-router-dom'
export default class Main extends Component {

  render() {
    return (
      <div>
          <Switch>
            <Route path='/managerinfo' component={ManagerInfo}></Route>
            <Route path='/basketballerinfo' component={BasketballerInfo}></Route>
          </Switch>
      </div>
    )
  }
}