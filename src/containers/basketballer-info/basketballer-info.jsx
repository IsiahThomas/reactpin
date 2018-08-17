import React, {Component} from 'react'
import {NavBar,List,InputItem,WhiteSpace,WingBlank,Button,TextareaItem} from 'antd-mobile'
import HeaderSelector from '../header-selector/header-selector'
import {connect} from 'react-redux'
import {updateUser} from "../../redux/actions";
import {Redirect} from 'react-router-dom'

class BasketballerInfo extends Component {
  state={
    header:'',
    post:'',
    info:''
  }
  handleChange = (name,val)=>{
    this.setState({[name]:val});
  }
  setHeader=(header)=>{ /*我详细的说明一下这个方法吧，这个方法是为了
  更新图片名信息，而这个方法是被定义在父组件中的，也就是存在header这个属性的
  组件中，然后我把这个方法传给子组件（props的方式），更新的参数是在子组件中写入的。*/
    this.setState({header});
  }
  save = ()=>{
    this.props.updateUser(this.state)
  }
  render() {
    const {type,header} = this.props.user;
    if(header){
      // debugger
      if(type === 'basketballer'){
        return <Redirect to='/basketballer'/>
      }
    }
    return (
      <div>
        <NavBar>球员信息完善</NavBar>
        <WingBlank>
          <HeaderSelector setHeader={this.setHeader}/>
          <WhiteSpace/>
          <List>
            <InputItem placeholder="请输入求职岗位" onChange={(val)=>this.handleChange('post',val)}>求职岗位</InputItem>
            <TextareaItem title="个人介绍" rows={3} onChange={(val)=>this.handleChange('info',val)}></TextareaItem>
            <Button type="primary" onClick={this.save}>保存</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default connect(
  state=>({user:state.user}),//这个user的本质就是reducers里的user.
  {updateUser}
)(BasketballerInfo)