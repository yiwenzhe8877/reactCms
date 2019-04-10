import React, {Component} from 'react';
import {Button, Card, Checkbox, Form, Input} from 'antd';

const FormItem = Form.Item;

class XLogin extends Component {

    constructor(props){
        super(props);
        console.log(this.props);
    }

    state={
        loading:true
    }

    render() {

        const {getFieldDecorator} = this.props.form;
        return (
            <div >
                <Card title="登录行内表单" className='card-wrap'>
                    <Form layout='inline'>
                        <FormItem>
                            <Input placeholder="请输入账号"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type='primary'>登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title="登录表单" className='card-wrap'>
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
                                    <Input placeholder="请输入账号"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password',{
                                    initialValue :"",
                                    rules:[]
                                })(
                                    <Input type='password' placeholder="请输入密码"/>
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
                        <FormItem>
                            <Button type='primary' onClick={()=>{this.submit()}}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>

            </div>
        );
    }
    submit=()=>{
        let data=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,value)=>{
            if(!err){
              console.log(value); //{username: "324", password: "123"}
            }
        })
    }
    handleCloseLoading=()=>{

        this.setState({
            loading:false
        })
    }
}

export  default Form.create()(XLogin);
