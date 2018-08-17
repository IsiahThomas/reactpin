import React from 'react'
import {Result, List, WhiteSpace, Button,Modal} from 'antd-mobile'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {resetuser} from "../../redux/actions";

const Item = List.Item
const Brief = Item.Brief

class Personal extends React.Component {
  logout = ()=>{
    Modal.alert('退出','确认退出吗？',[{
      text:'取消'
    },{
      text:'确认',
      onPress:()=>{
        Cookies.remove('userid');
        this.props.resetuser();
      }
    }])
  }

  render() {
    const {username,info,company,header,salary,post} = this.props.user;
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/images/${header}.png`)} style={{width: 50}} alt="header"/>}
          title={username}
          message={company}
        />

        <List renderHeader={()=>'相关信息'}> {/*渲染头部标签你就这样写，肯定不会错*/}
          <Item multipleLine>
            <Brief>职位:{post}</Brief>
            <Brief>简介:{info}</Brief>
            {/*对于在标签中判断是否显示的方式，要把他们整体包到一个{}中，然后再判断*/}
            {salary?<Brief>薪资:{salary}</Brief>:null}
          </Item>
        </List>
        <WhiteSpace/>
        <List>
          <Button type='warning' onClick={this.logout}>退出登录</Button>
        </List>
      </div>
    )
  }
}
export default connect(
  state=>({user:state.user}),
  {resetuser}
)(Personal)