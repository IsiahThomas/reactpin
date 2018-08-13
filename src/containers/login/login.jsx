import React, {Component} from 'react'
import {NavBar,InputItem,WingBlank,WhiteSpace,List,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo'
export default class Login extends Component {
  state={
    username:'',
    password:''
  }
  handleChange = (name,val)=>{
    this.setState({name,val});
  }
  toRegister = ()=>{
    this.props.history.replace('/register');
  }
  toMain = ()=>{
    this.props.history.replace('/main');
  }
  render() {
    let type = this.state.type;
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

          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={this.toMain}>登录</Button>
          <Button onClick={this.toRegister}>没有账号</Button>
        </WingBlank>
      </div>
    )
  }
}