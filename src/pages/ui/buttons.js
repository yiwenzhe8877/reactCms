import React, {Component} from 'react';
import {Button, Card} from 'antd';

import './ui.less'

export default class XButton extends Component {

    state={
        loading:true
    }


    render() {
        return (
            <div className='buttons'>
               <Card title="基础按钮" className='card-wrap'>
                   <Button type="primary" >主按钮</Button>
                   <Button>主按钮</Button>
                   <Button type="dashed">虚线</Button>
                   <Button type="danger">删除</Button>
                   <Button disabled>禁用</Button>
               </Card>

                <Card title="图形按钮" className='card-wrap'>
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button  icon="delete">删除</Button>
                    <Button icon='search' shape='circle'></Button>
                    <Button icon='search'type='primary' >搜索</Button>
                    <Button  icon="download" type='primary'>下载</Button>
                    <Button icon='left' type='primary'>向左</Button>
                    <Button icon='right' type='primary'>向右</Button>
                </Card>

                <Card title="loading按钮" className='card-wrap'>
                    <Button  loading={this.state.loading} type='primary'>确认</Button>
                    <Button  loading={this.state.loading} type='primary' shape='circle'></Button>
                    <Button  loading={this.state.loading}>点击加载</Button>
                    <Button  loading={this.state.loading} shape='circle'></Button>
                    <Button   type='primary' onClick={()=>{this.handleCloseLoading()}}>关闭</Button>
                </Card>

                <Card title='按钮尺寸' className='card-wrap'>
                    <Button size='large' type='primary'>大</Button>
                    <Button type='primary'>中</Button>
                    <Button size='small' type='primary'>小</Button>
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