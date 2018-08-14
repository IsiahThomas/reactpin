import React, {Component} from 'react'
import {NavBar,InputItem,WingBlank,WhiteSpace,List,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo'
import {connect} from 'react-redux'
import {register} from "../../redux/actions";
import {Redirect} from 'react-router-dom'
class Register extends Component {
  state={
    username:'',
    password:'',
    repassword:'',
    type:'manager'
  }
  handleChange = (name,val)=>{
    this.setState({[name]:val});
    /*你是为了改变它的值,正常那种它是固定值，这个不是固定值，所以要这样写*/

  }
  toRegister = ()=>{
    this.props.history.push('/login');
  }
  toLogin = ()=>{
    /* reqRegister(this.state).then(response=>{
       console.log(response.data);
     });*///这个方法返回的是promise对象，所以我们可以使用then方法。
    this.props.register(this.state);

    // this.props.history.replace('/login');
  }
  render() {
    const {type} = this.state;
    const {msg,redirectTo} = this.props.user;
    if(redirectTo){
      return <Redirect to={redirectTo}/>  //该返回一定是要return的，别再忘了
    }
    return (
      <div>
        <NavBar type="primary">凯尔直聘</NavBar>
        <WhiteSpace/>
        <WingBlank>
          <Logo/>
          <div className='error-msg'>{msg}</div>
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
            <Radio checked={type==='manager'} onChange={()=>this.handleChange('type','manager')}>经理</Radio>
            &nbsp;&nbsp;&nbsp;
            <Radio checked={type==='basketballer'} onChange={()=>this.handleChange('type','basketballer')}>球员</Radio>
          </List.Item>
          <Button type="primary" onClick={this.toLogin}>注册</Button>
          <Button onClick={this.toRegister}>已有账号</Button>
        </WingBlank>
      </div>
    )
  }
}
export default connect(
  state => ({user:state.user}),
  {register}
)(Register)