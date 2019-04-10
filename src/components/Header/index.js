import React, {Component} from 'react';
import {Col, message, Row, Tabs} from 'antd';

import './index.less'
import {get_breadcrumb} from '@models/breadcrumbs'
import {connect} from 'react-redux'

const TabPane = Tabs.TabPane;
class Header extends Component {

    constructor(props){
        super(props);

        if(this.props.list.bread.length>0){
            this.state = {
                activeKey: this.props.list.bread[0].id+'',
            };
        }

    }

    componentWillMount(){
        this.setState({
            userName :'' || 'admin'
        })

    }
    logout(){
        // clearCache(['token']);
        message.success("退出登录");
        //this.props.history.push('login')
        this.props.nav({path:'/login'});
    }
    onChange = (activeKey) => {

        if(activeKey=='9999'){
            this.props.deleteAllBread();
            return;
        }
        let panes =this.props.list.bread ;
        for(var i=0;i<panes.length;i++){

            panes[i].checked=false;

        }
        for(var i=0;i<panes.length;i++){

            if(panes[i].id==activeKey){
                panes[i].checked=true;
                this.props.nav({path:panes[i].path});
            }
        }



    }

    deleteAll=()=>{

        this.props.deleteAllBread();
    }

    onEdit = (targetKey, action) => {
        //this[action](targetKey);
        if(action=='remove'){
            message.info("单个删除暂不做哦~~");
            return;
        }


    }

    render() {

        let list = this.props.list.bread;
        let active =0;
        for(let m=0;m<list.length;m++){
            if(list[m].checked){
                active = list[m].id+''
            }
        }

        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24}>
                        <span>欢迎,{this.state.userName}</span>
                        <a onClick={()=>{this.logout()}}>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>

                    {(this.props.list.bread && this.props.list.bread.length>0)?(


                        <Tabs
                            onChange={this.onChange}
                            activeKey={active}
                            type="editable-card"
                            onEdit={this.onEdit}
                        >
                            {this.props.list.bread.map(pane =><TabPane tab={pane.title} key={pane.id+''} ></TabPane>)}
                            <TabPane tab='清除全部' key={'9999'}><a  onClick={this.deleteAll}>清除全部</a></TabPane>
                        </Tabs>):''
                    }



                </Row>
            </div>
        );
    }
};



 const mapStateToProps =(state,ownProps)=>{
     return {
         list:state
     }
 }

function mapDispatchToProps(dispatch) {
    return {
        deleteAllBread: (data) => dispatch({
            type:'DELETE_BREADCRUMB',
            payload:{

            }
        }),
        deleteOne:(data)=> dispatch({
            type:'DELETE_ONE',
            payload:{
                id:data.id
            }
        }),
    }
}
//通过connect 链接 redux和组件
export default connect(mapStateToProps,mapDispatchToProps)(Header);
