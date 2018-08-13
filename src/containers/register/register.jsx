import React, {Component} from 'react'
import {NavBar,InputItem,WingBlank,WhiteSpace,List,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo'
export default class Login extends Component {
  state={
    username:'',
    password:'',
    repassword:'',
    type:'manager'
  }
  handleChange = (name,val)=>{
    this.setState({name,val});
  }
  toRegister = ()=>{
    this.props.history.push('/login');
  }
  toLogin = ()=>{
    this.props.history.replace('/login');
  }
  render() {
    const {type} = this.state;
    return (
      <div>
        <NavBar type="primary">凯尔直聘</NavBar>
        <WhiteSpace/>
        <WingBlank>
          <Logo/>
          <WhiteSpace/>
          <List>
            <InputItem type="text" placeholder="请输入用户名" onChange={(val)=>this.handleChange('username',val)}>用户名：</InputItem>
            <InputItem type="text" placeholder="请输入密码" onChange={(val)=>this.handleChange('password',val)}>密码：</InputItem>
            <InputItem type="text" placeholder="确认密码" onChange={(val)=>this.handleChange('repassword',val)}>确认密码：</InputItem>
          </List>
          <WhiteSpace/>
          <List.Item>
            <span>用户类型</span>
            &nbsp;&nbsp;&nbsp;
            <Radio checked={type==='manager'} onChange={()=>this.handleChange(type,'manager')}>经理</Radio>
            &nbsp;&nbsp;&nbsp;
            <Radio checked={type==='basketballer'} onChange={()=>this.handleChange(type,'basketballer')}>球员</Radio>
          </List.Item>
          <Button type="primary" onClick={this.toLogin}>注册</Button>
          <Button onClick={this.toRegister}>已有账号</Button>
        </WingBlank>
      </div>
    )
  }
}