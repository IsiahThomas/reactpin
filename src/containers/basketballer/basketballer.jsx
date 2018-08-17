import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserList} from "../../redux/actions"
import UserList from '../user-list/user-list'
class Basketballer extends Component {
  componentDidMount(){
    this.props.getUserList('manager');
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
)(Basketballer)