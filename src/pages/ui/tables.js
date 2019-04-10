import React, {Component} from 'react';
import {Card, message, Table} from 'antd';
import './ui.less'

export default class XTables extends Component {

    //工程化  mock数据 axois 封装，错误拦截, loading封装

    /*
    * {
        "code": 0,
        "msg": "",
        "data|100": [{
        "id|+1": 1,
        username: "@cname",
        "sex|1-2": 1,
        status: "1",
        birthday: "1990-01-01",
        address: "xx皇家学院",
        phone: '18658888888'
        }]
       }
    *
    *
    * */


    state={
        dataSource2:[]
    }

    componentDidMount(){

        var dataSource=[];
        for(let i=0;i<100;i++){
            var obj= {
                id: "0",
                username: "张三",
                sex: '1',
                status: "1",
                birthday: "1990-01-01",
                address: "xx皇家学院",
                phone: '18658888888'
            }
            obj.id=i;
            dataSource.push(obj);
        }



        this.setState({
            dataSource
        })
    }
    onRowClick(row,index){
        message.info("点击的id是"+row.id);

        // this.setState({
        //     selectedRowKeys:selectKey,
        //     selectedItem:row
        // })
    }
    render() {
        const columns = [
            {
                title:"id",
                dataIndex:'id'
            },
            {
                title:"用户名",
                dataIndex:'username'
            },
            {
                title:"性别",
                dataIndex:'sex',
                render(state){
                    let config = {
                        "1":"男",
                        "2":"女",
                    }
                    return config[state];
                }
            },
            {
                title:"状态",
                dataIndex:'status',
                render(state){
                    let config = {
                        "1":"不太好哦",
                        "2":"一般般",
                        "3":"可以了"
                    }
                    return config[state];
                }
            },
            {
                title:"生日",
                dataIndex:'birthday'
            },
            {
                title:"地址",
                dataIndex:'address'
            },
            {
                title:"手机号",
                dataIndex:'phone'
            }
        ];


        const selectedRowKeys = this.state.selectedKeys;

        const rowSelection={
            type:'radio',
        }

        const rowCheckSelection={
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                let ids=[];

                // selectedRows.map((item)=>{
                //     ids.push(item.id)
                // })
                // this.setState({
                //     selectedRowKeys,
                //     selectedids:ids
                // })
            }
        }
        return (
            <div >
                <Card title="基础表格" className='card-wrap'>
                    <Table
                        rowKey={item=>item.id}
                        columns={columns}
                        dataSource={this.state.dataSource}
                    />
                </Card>
                <Card title="动态数据表格" className='card-wrap'>
                    <Table
                        rowKey={item=>item.id}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                    />
                </Card>
                <Card title="单选表格" className='card-wrap'>
                    <Table
                        bordered
                        onRow={(row,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(row,index)
                                }
                            }
                        }}
                        rowSelection={rowSelection}
                        rowKey={item=>item.id}
                        columns={columns}
                        dataSource={this.state.dataSource}
                    />
                </Card>

                <Card title="多选表格" className='card-wrap'>
                    <Table
                        bordered
                        onRow={(row,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(row,index)
                                }
                            }
                        }}
                        rowSelection={rowCheckSelection}
                        rowKey={item=>item.id}
                        columns={columns}
                        dataSource={this.state.dataSource}
                    />
                </Card>

                <Card title="分页表格" className='card-wrap'>
                    <Table
                        bordered
                        rowKey={item=>item.id}
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={this.state.pagination}
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