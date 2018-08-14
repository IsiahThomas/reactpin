import React, {Component} from 'react'
import {NavBar,InputItem,WingBlank,WhiteSpace,List,Button} from 'antd-mobile'
import Logo from '../../components/logo'
import {connect} from 'react-redux'
import {login} from "../../redux/actions";
import {Redirect} from 'react-router-dom'
class Login extends Component {
  state={
    username:'',
    password:''
  }
  handleChange = (name,val)=>{
    this.setState({[name]:val});
  }
  toRegister = ()=>{
    this.props.history.replace('/register');
  }
  toMain = ()=>{
    // this.props.history.replace('/main');
    this.props.login(this.state);
  }
  render() {
    const {msg,redirectTo} = this.props.user;
    if(redirectTo){
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar type="primary">凯尔直聘</NavBar>
        <WhiteSpace/>
        <WingBlank>
          <Logo/>
          <WhiteSpace/>
          <div className='error-msg'>{msg}</div>
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
export default connect(
  state=>({user:state.user}),
  {login}
)(Login)