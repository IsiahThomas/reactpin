import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {WingBlank,WhiteSpace,Card} from 'antd-mobile'
export default class UserList extends Component {
  static propTypes = {
    userList:PropTypes.array.isRequired
  }
  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    const {userList} = this.props;
    return (
      <WingBlank>
        {
          userList.map(user => (

              <div key={user._id}>
                <WhiteSpace/>
                <Card>
                {user.header?
                 <Header
                    thumb={require(`../../assets/images/${user.header}.png`)}
                  extra={user.username}
                  />: <Header
                    thumb={require('../../assets/images/头像1.png')}
                    extra={user.username}
                  />}
                  <Body>
                    <div>职位：{user.post}</div>
                    {user.company ?<div>公司：{user.company}</div>:null}
                    {user.salary ? <div>薪资：{user.salary}</div>:null}
                    <div>描述：{user.info}</div>
                  </Body>
                </Card>
              </div>
            )
          )
        }
      </WingBlank>
    )
  }
}
