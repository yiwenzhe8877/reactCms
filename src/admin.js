import React, {Component} from 'react';
import {Col, Row} from 'antd';

import Header from '@components/Header'
import Footer from '@components/Footer'
import NavLeft from '@components/NavLeft'
import '@style/common.less'
import {Route, Switch,BrowserRouter} from "react-router-dom";
import NotFound from "@pages/other/NotFound";

import XButton from '@pages/ui/buttons'
import XModal from '@pages/ui/modals'
import XLoading from '@pages/ui/loadings'
import XNotice from './pages/ui/notices'
import XMessage from '@pages/ui/messages'
import XTabs from '@pages/ui/tabs'
import XTables from '@pages/ui/tables'
import XForms from '@pages/ui/forms'

import XLogin from '@pages/form/login';
import XBasetable from '@pages/basetable/index';
import XBaseechart from '@pages/baseechart/index';
import XHome from '@pages/home/index';

import {getCache} from "./models/cache";

// import { connect } from 'react-redux'

 class Admin extends Component {


    componentDidMount(){

    }
    nav(params){

        this.props.history.push(params.path)
    }

    render() {
        return (
            <div className='container'>
                <Row>
                    <Col span={4} className="nav-left">
                        <NavLeft
                            nav={(param)=>{this.nav(param)}}
                        >
                        </NavLeft>
                    </Col>
                    <Col span={20} className='main'>
                        <Header
                            nav={(param)=>{this.nav(param)}}
                        ></Header>
                        <Row className='content'>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={XButton}/>
                                    <Route path="/admin/ui/modals" component={XModal}/>
                                    <Route path="/admin/ui/loadings" component={XLoading}/>
                                    <Route path="/admin/ui/notices" component={XNotice}/>
                                    <Route path="/admin/ui/messages" component={XMessage}/>
                                    <Route path="/admin/ui/tabs" component={XTabs}/>
                                    <Route path="/admin/ui/tables" component={XTables}/>
                                    <Route path="/admin/ui/forms" component={XForms}/>
                                    <Route path="/admin/home" component={XHome}/>
                                    <Route path="/admin/form/login" component={XLogin}/>
                                    <Route path="/admin/basetable/index" component={XBasetable}/>
                                    <Route path="/admin/baseechart/index" component={XBaseechart}/>

                                    <Route  component={NotFound}/>
                                </Switch>
                        </Row>
                        <Footer>
                        </Footer>
                    </Col>
                </Row>
            </div>
        );
    }
}


// const mapStateToProps =(state,ownProps)=>{
//     return {
//         num:0
//     }
// }

//通过connect 链接 redux和组件
//export default connect(mapStateToProps)(Header);
export  default  Admin;
