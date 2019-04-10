import React, {Component} from 'react';
import {Menu} from 'antd';

import MenuConfig from '@config/menuConfig'
import {add_breadcrumb} from "@models/breadcrumbs"
import {connect} from 'react-redux'

import './index.less'
import {ADD_BREADCRUMB} from "@redux/actions/add_breadcrumb";

const SubMenu = Menu.SubMenu;

 class NavLeft extends Component {

    componentWillMount(){
       const menuTreeNodes= this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNodes
        })

    }

    navMenu(item){
        let title = item.item.props.children[0];
        let path = item.item.props.eventKey;
        let id = item.item.props.vid;

        let obj ={
            title:title,
            path:path,
            checked:true,
            id:id
        }

        //this.props.nav(obj);
        this.props.nav(obj);

        this.props.addBread(obj);

    }
    renderMenu=(data)=>{
        return data.map((item)=>{

            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key} >
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }

            return <Menu.Item title={item.title} vid={item.id} key={item.key} onClick={(item)=>{this.navMenu(item)}}  >{item.title} </Menu.Item>

        })
    }


    render() {
        return (
            <div className='nav-left'>
                  <div className="logo">
                      <div className='title'>后台管理</div>
                  </div>
                  <Menu
                    theme="dark"
                    mode="inline">
                    {this.state.menuTreeNodes}
                  </Menu>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list:state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addBread: (data) => dispatch({
            type:ADD_BREADCRUMB,
            payload:{
                title:data.title,
                path:data.path,
                checked:data.checked,
                id:data.id
            }
        }),
    }
}

//通过connect 链接 redux和组件
export default connect(mapStateToProps,mapDispatchToProps)(NavLeft);
//export default  NavLeft;
