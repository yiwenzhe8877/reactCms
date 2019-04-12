import React, {Component} from 'react';
import './index.less'
import { Player ,BigPlayButton,ControlBar,PlayToggle,VolumeMenuButton,PlaybackRateMenuButton  } from 'video-react';
import {Button, Card, message} from 'antd';

//https://github.com/video-react/video-react

export default class Video extends Component {

    render() {
        return (
            <div className='video'>
                <Card>
                    <div>
                        <a  target="_blank" href="https://github.com/video-react/video-react">github地址</a>
                    </div>
                    <div>
                        <a href="https://jingyan.baidu.com/article/9113f81b41e6272b3214c7f5.html">网页不能播放视频解决方法(转视频格式)</a>
                    </div>
                </Card>
                <Card className='videowrap'>
                    <Player
                        src="http://www.niaodo.com/render.mp4"
                    >
                        <BigPlayButton position="center" />
                        <ControlBar autoHide='false' />
                        <VolumeMenuButton vertical />
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
        message.info("太贵了,做不起~~")
    }

}