import React, {Component} from 'react';
import {Card, Form, message} from 'antd';
import {addCity, deleteCity, fetchCityList, updateCity} from '@api/apis';

import Utils from "../../utils/utils";

import EchartBase from '@components/Echart'

import './index.less'

const FormItem = Form.Item;
class XEchart extends Component {

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
        const data1={
            title: { text: '例子1' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
        const data2= {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        };

        const data3= {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        };
        return (
            <div >
                <Card>
                    <div>
                        <a href="https://www.echartsjs.com/examples/">官方例子(只需要替换配置即可)</a>
                    </div>
                </Card>
                <Card className='card-wrap'>

                    <div className='item'>
                        <EchartBase
                            id='main'
                            width='400'
                            height='400'
                            data={data1}
                        >
                        </EchartBase>
                    </div>
                    <div className='item'>
                        <EchartBase
                            id='main2'
                            width='400'
                            height='400'
                            data={data2}
                        >
                        </EchartBase>
                    </div>
                    <div className='item'>
                        <EchartBase
                            id='main3'
                            width='400'
                            height='400'
                            data={data3}
                        >
                        </EchartBase>
                    </div>
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



export  default Form.create()(XEchart);