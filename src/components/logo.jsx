import React, {Component} from 'react'
import imgs from './timg.png'
import '../containers/login/login.less'
export default class Logo extends Component {

  render() {
    return (
      <div className="logoScreen">
        <img src={imgs} alt="图片"/>
      </div>
    )
  }
}