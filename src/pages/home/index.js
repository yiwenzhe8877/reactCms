import React, {Component} from 'react';

import './index.less'

export default class Home extends Component {
    render() {
        return (
            <div className="homeWrap">
                欢迎来到,该项目帮助你快速搭建后台,包括基础ui,表单(已经组件化,只要传对应结构的数据即可,实现对应的方法即可快速开发)，
                <br/>
                技术栈:react+react-router+axios+redux+antd+mockjs
                <br/>
                作者微信:100000356,项目合作请咨询
            </div>
        );
    }
}