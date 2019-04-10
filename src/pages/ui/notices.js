import React, {Component} from 'react';
import {Button, Card, notification} from 'antd';

import './ui.less'

export default class XButton extends Component {

    state={
        loading:true
    }
    open=(type)=>{
        notification[type]({
             message:"我是消息",
             description:"我是描述"
         })
    }
    render() {
        return (
            <div >
                <Card title="通知提醒框" className='card-wrap'>
                    <Button type="primary" onClick={()=>{this.open('success')}}>success</Button>
                    <Button type="primary" onClick={()=>{this.open('info')}}>info</Button>
                    <Button type="primary" onClick={()=>{this.open('warning')}}>warning</Button>
                    <Button type="primary" onClick={()=>{this.open('error')}}>error</Button>

                </Card>


            </div>
        );
    }

    handleCloseLoading=()=>{

        this.setState({
            loading:false
        })
    }
}