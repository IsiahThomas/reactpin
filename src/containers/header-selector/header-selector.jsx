import React, {Component} from 'react'
import {Grid,List} from 'antd-mobile'
import PropTypes from 'prop-types'
export default class HeaderSelector extends Component {
  state={
    icon:null //初始图片的状态
  }
  constructor(props){
    super(props);
    this.headerList = [];
    for (let i = 0; i < 20; i++) {
      this.headerList.push({
        text:'头像'+(i+1),
        icon:require(`../../assets/images/头像${i+1}.png`)/*可以动态引入图片，如果你用import的话就是静态引入所有的。*/
      })
    }
  }
  handleClick = ({text,icon})=>{
    console.log("handleClick()------");
    /*更新当前组件状态*/
    this.setState({icon});
    /*更新父组件状态*/
    this.props.setHeader(text);
  }
  render() {
    const head = this.state.icon?(
    <div>已选择头像：<img src={this.state.icon}/></div>):"请选择头像";
    return (
      <div>
        <List renderHeader={()=>head}>{/*通过一个回调函数的形式把head渲染在页面上*/}
          <Grid data={this.headerList} columNum={5} onClick={this.handleClick}/>
        </List>
      </div>
    )
  }
}
HeaderSelector.propTypes = {
 setHeader:PropTypes.func.isRequired
};