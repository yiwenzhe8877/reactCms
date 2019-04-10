import React, {Component} from 'react';
import {Button, Card, Modal} from 'antd';

import './ui.less'

export default class XButton extends Component {

    state={
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    }

    showModal=(type)=>{
        this.setState({
            [type]:true
        })
    }
    showConfirm=(type)=>{

        Modal[type]({
            title:'确认',
            content:'内容部分',
            onOk(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancel')
            },
        });
    }

    hideModal=(type)=>{
        this.setState({
            [type]:false
        })
    }
    render() {
        return (
            <div >
                <Card title="基础模态框" className='card-wrap'>
                    <Button type='primary' onClick={()=>{this.showModal('showModal1')}}>open</Button>
                    <Button type='primary' onClick={()=>{this.showModal('showModal2')}}>自定义页脚</Button>
                    <Button type='primary' onClick={()=>{this.showModal('showModal3')}}>顶部弹框</Button>
                </Card>

                <Card title="信息确认框" className='card-wrap'>
                    <Button type='primary' onClick={()=>{this.showConfirm('confirm')}}>confirm</Button>
                    <Button type='primary' onClick={()=>{this.showConfirm('info')}}>info</Button>
                    <Button type='primary' onClick={()=>{this.showConfirm('success')}}>success</Button>
                    <Button type='primary' onClick={()=>{this.showConfirm('warning')}}>warning</Button>
                </Card>
                <Modal
                    title='React'
                    visible={this.state.showModal1}
                    onCancel={()=>{this.hideModal('showModal1')}}
                >
                    <p>基础modal</p>
                </Modal>
                <Modal
                    title='React'
                    okText="ok"
                    cancelText="不改了"
                    visible={this.state.showModal2}
                    onCancel={()=>{this.hideModal('showModal2')}}
                >
                    <p>自定义底部modal</p>
                </Modal>

                <Modal
                    title='React'
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={()=>{this.hideModal('showModal3')}}
                >
                    <p>顶部modal</p>
                </Modal>


            </div>
        );
    }


}