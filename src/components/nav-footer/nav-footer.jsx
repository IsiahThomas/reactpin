import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
const Item = TabBar.Item;
class NavFooter extends Component {

  render() {
  let {navList} = this.props;
  const path = this.props.location.pathname;
  //在显示tab的页面对不显示的Item进行过滤。
  navList = navList.filter(nav => !nav.hide)
    //这个函数的意思是留下hide为false的，括号里传的参数是留下的信息
    return (
      <div>
        <TabBar>
          {
            navList.map((nav)=>
              <Item key={nav.path}
                    title={nav.title}
                    icon={{uri:require(`./images/${nav.icon}.png`)}}
                    selectedIcon={{uri:require(`./images/${nav.icon}-selected.png`)}}
                    selected={nav.path===path}
                    onPress={()=>this.props.history.replace(nav.path)}
                    //在这个位置就证明了一点，如果你不写这种匿名箭头函数，那么他就会
                    //立即执行，并且停不下来，如果你想让他受控制就得写匿名箭头函数。
              />
            )
          }
        </TabBar>
      </div>
    )
  }
}
NavFooter.propTypes = {
  navList:PropTypes.array.isRequired
}
export default withRouter(NavFooter) //这个函数的作用是把组件包装成路由组件