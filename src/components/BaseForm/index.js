import React, {Component} from 'react';
import {Button, Checkbox, Form, Input, Modal, Select} from 'antd';
import Utils from '../../utils/utils'
import './index.less'

const FormItem = Form.Item;
const Option = Select.Option;

class BaseForm extends Component {

    initFormFilter=()=>{
        const {getFieldDecorator} = this.props.form;
        const formfilter = this.props.filterlist;
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


    initFormAdd=()=>{
        const {getFieldDecorator} = this.props.form;

        const formfilter = this.props.addlist;
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

        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form layout='inline'>
                    {this.initFormFilter()}
                    <FormItem>
                        <Button type='primary' onClick={()=>{this.search()}}>搜索</Button>
                        <Button type='primary' onClick={()=>{this.add()}}>添加</Button>
                    </FormItem>
                </Form>
                <Modal
                    title='新增'
                    style={{top:20}}
                    okText="确认"
                    cancelText="取消"
                    visible={this.props.addVisible}
                    onOk={()=>{this.addok()}}
                    onCancel={()=>{this.hideModal('add')}}
                >
                </Modal>
            </div>
        );
    }
    search=()=>{

        let fieldsValue = this.props.form.getFieldsValue();

        this.props.form.validateFields((err,value)=>{
            if(!err){
                this.props.filterSubmit(fieldsValue);
            }
        })
    }
    add=()=>{
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,value)=>{
             if(!err){
                 this.props.filterSubmit(fieldsValue);
             }
         })
    }
    addok=()=>{

    }

    hideModal=(params)=>{

     //   this.props.hideModal(params);
    }

    reset=()=>{
        console.log(123);
    }

    handleCloseLoading=()=>{

        this.setState({
            loading:false
        })
    }
}

class FilterForm extends Component {

}



export default Form.create()(BaseForm);