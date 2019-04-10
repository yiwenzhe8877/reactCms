import React, {Component} from 'react';

import {Button, Card, Checkbox, Form, Input, message} from 'antd';
import {getCache, setCache} from "@models/cache";

const FormItem = Form.Item;

class Login extends Component {
    state={
        loading:true
    }

    componentDidMount(){

    }

    constructor(props){
        super(props);
    }

    submit=()=>{
        let data=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,value)=>{
            if(!err){
                console.log(value); //{username: "324", password: "123"}
                message.success("登陆成功");

                setCache({k:'token',v:'111'});

                setTimeout(()=>{
                    this.props.history.push('admin/home')
                },1000)
            }
        })
    }
    handleCloseLoading=()=>{

        this.setState({
            loading:false
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div className="homeWrap">
                <Card title="登录" className='card-wrap'>
                    <Form style={{width:300}}>
                        <FormItem>
                            {
                                getFieldDecorator('username',{
                                    initialValue :"",
                                    rules:[
                                        {
                                            required:true,
                                            message:"用户名不能为空"
                                        },
                                        {
                                            min:5,
                                            max:10,
                                            message:"用户名长度必须大于5且小于10"
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入账号" placeholder='账户:admin'/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password',{
                                    initialValue :"",
                                    rules:[]
                                })(
                                    <Input type='password' placeholder="密码:admin"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember',{
                                    initialValue :true,
                                    valuePropName:'checked'
                                })(
                                    <Checkbox >忘记密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem >
                            <Button style={{width:300+'px'}} type='primary' onClick={()=>{this.submit()}}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export  default Form.create()(Login);