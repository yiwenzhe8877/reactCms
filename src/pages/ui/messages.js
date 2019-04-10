import React, {Component} from 'react';
import {Button, Card, message} from 'antd';

import './ui.less'

export default class XMessage extends Component {


    open=(type)=>{
        message[type]('我是content',3)
    }
    render() {
        return (
            <div >
                <Card title="通知提醒框" className='card-wrap'>
                    <Button type="primary" onClick={()=>{this.open('success')}}>success</Button>
                    <Button type="primary" onClick={()=>{this.open('info')}}>info</Button>
                    <Button type="primary" onClick={()=>{this.open('warning')}}>warning</Button>
                    <Button type="primary" onClick={()=>{this.open('error')}}>error</Button>
                    <Button type="primary" onClick={()=>{this.open('warn')}}>warn</Button>
                    <Button type="primary" onClick={()=>{this.open('loading')}}>loading</Button>
                </Card>
            </div>
        );
    }


}