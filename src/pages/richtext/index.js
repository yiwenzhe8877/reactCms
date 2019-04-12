import React, {Component} from 'react';
import './index.less'
import {Button, Card, message} from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
//https://github.com/video-react/video-react

export default class Video extends Component {

    state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null),
        showarea:''
    }

    async componentDidMount () {
        // 假设此处从服务端获取html格式的编辑器内容
      //  const htmlContent = await fetchEditorContent()
        const htmlContent = ""
        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        this.setState({
            editorState: BraftEditor.createEditorState(htmlContent)
        })
    }

    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        var htmlContent = this.state.editorState.toHTML()
        console.log('我被调用了,html='+htmlContent);
        //
        const regex = new RegExp('<img', 'gi');
        htmlContent = htmlContent.replace(regex, `<img style="max-width: 100%;"`);

        this.setState({
            showarea:htmlContent
        })
      //  const result = await saveEditorContent(htmlContent)
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    render() {
        const { editorState,showarea } = this.state
        return (
            <div className=''>
                <Card>
                    <div>
                        <a target="_blank" href="https://github.com/margox/braft-editor">github地址</a>
                    </div>
                </Card>
                <Card >
                    <div className='richtextwrap'>
                        <div className='editarea'>
                            <BraftEditor
                                value={editorState}
                                onChange={this.handleEditorChange}
                                onSave={this.submitContent}
                            />
                        </div>
                        <div className='showarea' dangerouslySetInnerHTML={{__html: showarea}}>
                        </div>
                    </div>

                </Card>

            </div>
        );
    }


}