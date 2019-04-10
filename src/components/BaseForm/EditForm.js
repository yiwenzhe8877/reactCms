import React, {Component} from 'react';
import {Checkbox, Form, Input, Modal, Select} from 'antd';
import Utils from '../../utils/utils'
import './index.less'

const FormItem = Form.Item;


class XForm extends Component {

    initForm=()=>{
        const {getFieldDecorator} = this.props.form;
        const formfilter = this.props.list;
        const formitemlist=[];

        if(formfilter &&formfilter.length>0){
            formfilter.forEach((item,index)=>{
                let label = item.label;
                let field = item.field;
                let initialValue = item.initialValue || '';
                let placeholder = item.placeholder || '';
                let width = item.width || '120';
                let type = item.type;
                let list = item.list || [];
                let rules = item.rules || []
                if(type=='SELECT'){
                    var ITEM = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator(field,{
                                initialValue:initialValue,
                                rules:rules
                            })(
                                <Select
                                    style={{ width: width }}
                                >
                                    {Utils.getOptionList(list)}
                                </Select>
                            )
                        }
                    </FormItem>
                    formitemlist.push(ITEM)
                }
                if(type=='INPUT'){

                    var ITEM = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator(field,{
                                initialValue:initialValue,
                                rules:rules
                            })(
                                <Input type='text' placeholder={placeholder}/>
                            )
                        }
                    </FormItem>
                    formitemlist.push(ITEM)
                }
                if(type=='CHECKBOX'){
                    var ITEM = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator(field,{
                                initialValue:initialValue, //true \ false
                                valuePropName:'checked'
                            })(
                                <Checkbox>
                                    {label}
                                </Checkbox>
                            )
                        }
                    </FormItem>
                    formitemlist.push(ITEM)
                }
            })
        }
        return formitemlist;
    }

    render() {

        return (
            <div >
                <Modal
                    title='更新'
                    okText="确认"
                    cancelText="取消"
                    visible={this.props.show}
                    onCancel={()=>{this.hideModal('add')}}
                    onOk={()=>{
                        this.submit();
                    }}
                >
                    <Form className='addform'>
                        {this.initForm()}
                    </Form>
                </Modal>
            </div>
        );
    }

    hideModal=()=>{
        this.props.hideModal(this.props.name);

    }

    submit=(params)=>{
        let data=this.props.form.getFieldsValue();

        this.props.form.validateFields((err,value)=>{
            if(!err){
                this.props.submit(this.props.name,value);
            }
        })
    }
}
export default Form.create()(XForm);