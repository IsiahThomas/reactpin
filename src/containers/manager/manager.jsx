import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserList} from "../../redux/actions";
import UserList from '../user-list/user-list'
class Manager extends Component {
  componentDidMount(){
    this.props.getUserList('basketballer');
  }
  render() {
    return (
      <UserList userList={this.props.userList}/>
    )
  }
}
export default connect(
  state=>({userList:state.userList}),
  {getUserList}
)(Manager)