import React, {Component} from 'react';
import {Card, Icon, message, Tabs} from 'antd';

import './ui.less'

export default class XMessage extends Component {
    
    open=(type)=>{
        message[type]('我是content',3)
    }
    change=(key)=>{
        message.info('我是:'+key,3)
    }
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <div >
                <Card title="选项卡切换" className='card-wrap'>
                    <Tabs defaultActiveKey="1" onChange={this.change}>
                        <TabPane tab="老大" key="1">我是老大</TabPane>
                        <TabPane tab="老二" key="2">老二</TabPane>
                        <TabPane tab="老三" key="3">啊三</TabPane>
                    </Tabs>
                </Card>

                <Card title="选项卡切换带icon" className='card-wrap'>
                    <Tabs defaultActiveKey="2">
                        <TabPane tab={<span><Icon type="apple" />老大</span>} key="1">
                            Tab 1
                        </TabPane>
                        <TabPane tab={<span><Icon type="android" />老二</span>} key="2">
                            Tab 2
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        );
    }


}