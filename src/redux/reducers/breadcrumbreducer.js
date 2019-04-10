
import {ADD_BREADCRUMB} from "@redux/actions/add_breadcrumb";
import {add_breadcrumb} from "@models/breadcrumbs"
import {message} from 'antd';

import { getCache,setCache,clearCache} from "@models/cache";

var initstate = []
if(getCache('breadlist')){
    initstate =  JSON.parse(getCache('breadlist'))
}

const bread=(state=initstate,action)=>{
    switch (action.type){
        case ADD_BREADCRUMB:{
            let ids =[];
            for(let j=0;j<state.length;j++){
                var item = state[j]
                ids.push(item.id);
                item.checked = false
                if(item.id==action.payload.id){
                    item.checked = true
                }
            }
            if(state.length>=15){
                message.info("标签最多不能超过15个");
                return state;
            }

            if(ids.indexOf(action.payload.id)==-1){
                var list1 = [...state,action.payload];
            }else{
                var list1 = [...state];
            }

            setCache({k:'breadlist',v:JSON.stringify(list1)})
            return list1;
        }

        case 'DELETE_BREADCRUMB':{
            clearCache(['breadlist'])
            console.log('sssssa');
            return [];
        }
        case 'DELETE_ONE':{
            let arr =[]
            for(let j=0;j<state.length;j++){
                var item = state[j]
                if(item.id!=action.payload.id){
                    arr.push(item)
                }
            }
            console.log(action.payload.id);

            return arr;
        }
        default:
            return state;
    }
}

export default bread