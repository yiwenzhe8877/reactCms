import React, {Component} from 'react';
import './index.less'
import { Player } from 'video-react';
import {Button, Card, message} from 'antd';

//https://github.com/video-react/video-react

export default class Video extends Component {

    render() {
        return (
            <div className='video'>
                <Card>
                    <div>
                        <a href="https://github.com/video-react/video-react">github地址</a>
                    </div>
                </Card>
                <Card className='videowrap'>
                    <Player >
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>
                </Card>
                <Card>
                    <div>
                        <a href="">oss文档</a>
                    </div>
                    <div>
                        <Button type="primary" onClick={()=>{this.uploadvideo()}}>上传到oss</Button>
                    </div>
                </Card>
            </div>
        );
    }
    uploadvideo=()=>{
        message.info("还没做呢")
    }

}