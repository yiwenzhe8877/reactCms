import React, {Component} from 'react';
import {Button, Card, Divider, Form, message, Modal, Table} from 'antd';
import {addCity, deleteCity, fetchCityList, updateCity} from '@api/apis';

import Utils from "../../utils/utils";
import FilterForm from '../../components/BaseForm/FilterForm'
import AddForm from '../../components/BaseForm/AddForm'
import EditForm from '../../components/BaseForm/EditForm'

import './index.less'

const FormItem = Form.Item;
class XCity extends Component {

    constructor(props){
        super(props);

    }

    state={
        loading:true,
        list1:[],
        page:1,
        showAddForm:false,
        showEditForm:false,
        showDeleteForm:false,
        ids:[],
        filterlist:[
            {
                type:'SELECT',
                label:"城市",
                field:"city",
                list:[
                    {"name":"北京市",id:"北京市"},
                    {"name":"上海市",id:"2"},
                    {"name":"杭州市",id:"3"},
                ],
                initialValue:'北京市',
                width:150
            },
            {
                type:'INPUT',
                field:"operator",
                label:"操作人",
                val:"",
                placeholder:'请输入操作人姓名',

            },
            {
                type:'TIME',
            }
        ],
        addlist:[
            {
                type:'SELECT',
                label:"城市名称",
                field:"city",
                list:[
                    {"name":"北京市",id:"北京市"},
                    {"name":"上海市",id:"上海市"},
                    {"name":"杭州市",id:"杭州市"},
                ],
                initialValue:'北京市',
                width:150
            },
            {
                type:'SELECT',
                label:"用车模式",
                field:"use_type",
                list:[
                    {"name":"按次使用",id:"按次使用"},
                    {"name":"按月使用",id:"按月使用"},
                ],
                initialValue:'按月使用',
                width:150
            },
            {
                type:'INPUT',
                field:"admin_name",
                label:"城市管理员",
                val:"",
                placeholder:'请输入城市管理员',
                rules:[{
                    required:true,message:'输入城市管理员'
                }],
                initialValue:'',
            },
        ]
    }



    componentDidMount(){
        this.loadData();
    }
    loadData=()=>{

        fetchCityList({page:this.state.page}).then(res=>{
            this.setState({
                list1:res.list,
                pagination:Utils.pagination(res,(current)=>{
                    this.setState({
                        page:++this.state.page
                    },()=>{
                        this.loadData()
                    })
                })
            })
        })
    }


    search(params){
        console.log(params);
        message.info("选择的城市是="+params.city+"------------操作人="+params.operator);
    }

    filterSubmit=(fieldvalues)=>{
        message.info('点击了搜索');
    }

    showEditForm=(item)=>{
        let editlist = [...this.state.addlist]

        editlist[2]['initialValue']=item.city_admin;

        this.setState({
            editlist,
            showEditForm:true
        })
    }

    doEditForm=(name,val)=>{

        updateCity(val).then(res=>{
            message.info(res.msg)
            this.setState({
                [name]:false
            })
        })

    }

    hideModal=(name)=>{

        this.setState({
            [name]:false
        })
    }
    doDelete(item){

        deleteCity({id:item.id}).then(res=>{
            message.info(res.msg)
        })
    }
    render() {

        const columns=[
            {
                title:"城市id",
                dataIndex:'id'
            },
            {
                title:"城市名称",
                dataIndex:'city_name'
            },
            {
                title:"用车模式",
                dataIndex:'use_type'
            },
            {
                title:"授权加盟商",
                dataIndex:'auth_shopper'
            },
            {
                title:"城市管理员",
                dataIndex:'city_admin'
            },
            {
                title:"开通时间",
                dataIndex:'startline'
            },
            {
                title:"最后操作",
                dataIndex:'lastline'
            },
            {
                title:"操作人",
                dataIndex:'operator'
            },
            {
                title:"操作",
                dataIndex:'op',
                render:(text,record)=>{
                    return (<span>
                        <span className='btn_update' onClick={()=>{this.showEditForm(record)}}>编辑</span>
                        <Divider type="vertical" />
                        <span className='btn_delete' onClick={()=>{
                            this.doDelete(record)
                        }}>删除</span>
                    </span>);
                }
            },
        ]

        const {getFieldDecorator} = this.props.form;
        return (
            <div >
                <Card className='card-wrap'>

                    <FilterForm
                        filterlist={this.state.filterlist}
                        search={(val)=>{this.search(val)}}
                    >
                    </FilterForm>
                    <Button onClick={()=>{
                        this.setState({
                            showAddForm:true
                        })
                    }}>新增</Button>
                    <AddForm
                        show={this.state.showAddForm}
                        list={this.state.addlist}
                        name='showAddForm'
                        submit={(name,val)=>{this.doAddForm(name,val)}}
                        hideModal={(val)=>{this.hideModal(val)}}
                    ></AddForm>
                    <EditForm
                        show={this.state.showEditForm}
                        list={this.state.editlist}
                        name='showEditForm'
                        submit={(name,val)=>{this.doEditForm(name,val)}}
                        hideModal={(val)=>{this.hideModal(val)}}
                    >

                    </EditForm>

                    <Modal
                        title='删除'
                        visible={this.state.showDeleteForm}
                        okText="确认"
                        cancelText="取消"
                        onOk={()=>this.doDelete()}
                        onCancel={()=>{this.hideModal('showDeleteForm')}}
                    >
                        <p>是否删除当前选项</p>
                    </Modal>

                </Card>

                <Card title="城市管理" className='card-wrap'>
                    <Table
                        rowKey={item=>item.id}
                        columns={columns}
                        dataSource={this.state.list1}
                        pagination={this.state.pagination}
                    />
                </Card>


            </div>
        );
    }

    doAddForm=(name,val)=>{

        addCity(val).then(res=>{
            message.success(res.msg)
            this.setState({
                [name]:false
            })
        })
    }
}



export  default Form.create()(XCity);