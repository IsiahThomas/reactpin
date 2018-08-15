import React, {Component} from 'react'
import {NavBar,List,InputItem,WhiteSpace,WingBlank,Button,TextareaItem} from 'antd-mobile'
import {connect} from 'react-redux'
import HeaderSelector from '../header-selector/header-selector'
import {updateUser} from '../../redux/actions'
import {Redirect} from 'react-router-dom'
class ManagerInfo extends Component {
  state={
    header:'',//头像图片
    post:'',
    info:'',
    company:'',
    salary:''
  }
  handleChange = (name,val)=>{
    this.setState({[name]:val});
  }
  /*更新头像状态的函数*/
  setHeader = (header)=>{
    this.setState({header});
  }
  save =()=>{
    this.props.updateUser(this.state);
  }
  render() {
    const {type,header} = this.props.user;
    if(header){
      if(type === 'manager'){
        return <Redirect to='/manager'/>
      }
    }
    return (
      <div>
        <NavBar>经理信息完善</NavBar>
        <WingBlank>
          <HeaderSelector setHeader={this.setHeader}/>
          <WhiteSpace/>
          <List>
            <InputItem placeholder="请输入招聘职位" onChange={(val)=>this.handleChange('post',val)}>招聘职位</InputItem>
            <InputItem placeholder="请输入公司名称" onChange={(val)=>this.handleChange('company',val)}>公司名称</InputItem>
            <InputItem placeholder="请输入职业薪资" onChange={(val)=>this.handleChange('salary',val)}>职业薪资</InputItem>
            <TextareaItem title="请输入职业" rows={3} onChange={(val)=>this.handleChange('info',val)}></TextareaItem>
          </List>
          <Button type="primary" onClick={this.save}>保存</Button>
        </WingBlank>

      </div>
    )
  }
}
export default connect(
  state => ({user:state.user}),
  {updateUser}
)(ManagerInfo)