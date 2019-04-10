import React, {Component} from 'react';
import {Alert, Card, Spin} from 'antd';

import './ui.less'

export default class Loadings extends Component {

    state={
        loading:true
    }

    render() {
        return (
            <div >
                <Card title="loading" className='card-wrap'>
                    <Spin size='small'/>
                    <Spin />
                    <Spin size='large'/>
                </Card>
                <Card title="内容遮盖" className='card-wrap'>
                    <Alert
                        message="React"
                        description="欢迎来到我的github"
                        type="info"
                    />
                    <Alert
                        message="React"
                        description="欢迎来到我的github"
                        type="warning"
                    />
                    <Alert
                        message="React"
                        description="欢迎来到我的github"
                        type="success"
                    />
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