import React from "react";

import { Form,Select} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getapi = (url,data) => {
  
  
}

const create_range=(start,end,unit)=>{
  let t=[]
  for(let i=start;i<end;i++){
    t.push(i+unit)
  }
  return t;
}

const merge_array =(origin_arr,push_arr)=>{
  for (let i = 0; i < push_arr.length; i++) {
    origin_arr.push(push_arr[i])
  }
  return origin_arr;
}

const isChinese = (temp)=>{
  var re = /[\u3220-\uFA29]/;
  var z;
  for (let i = 0; i < temp.length; i++)
   {
     z = temp.charAt(i);
    if (re.test(z)) return true;
      
   }
  return false;
}

const isEnglish = (temp) => {
  var re = /[a-zA-Z]/;
  var z;
  for (let i = 0; i < temp.length; i++) {
    z = temp.charAt(i);
    if (re.test(z)) return true;

  }
  return false;
}


const isNumber = (temp) => {
  var re = /[0-9]/;
  var z;
  for (let i = 0; i < temp.length; i++) {
    z = temp.charAt(i);
    if (re.test(z)) return true;

  }
  return false;
}



const create_waistline_range= ()=>{
 
    return [
      '25英寸（1.90尺/63.5厘米）',
      '26英寸（1.98尺/66.0厘米）',
      '27英寸（2.06尺/68.5厘米）',
      '28英寸（2.14尺/71.0厘米）',
      '29英寸（2.22尺/73.5厘米）',
      '30英寸（2.30尺/76.0厘米）',
      '31英寸（2.38尺/78.5厘米）',
      '32英寸（2.46尺/81.0厘米）',
      '33英寸（2.54尺/83.5厘米）',
      '34英寸（2.62尺/86.0厘米）',
      '35英寸（2.70尺/89.0厘米）',
      '36英寸（2.78尺/91.0厘米）',
      '37英寸（2.86尺/94.0厘米）',
      '38英寸（2.94尺/97.0厘米）',
    ];
}


const setWeight=()=>{
	let start = 40;
	let temp = [];
	for (let i = 0; i < 85; i++) {
		temp.push((start + i) * 2 + '斤' + '(' + (start + i) + '公斤)');
	}
	return temp;
}

const setBirthday=()=>{
	
	  var myDate = new Date();
    let end = myDate.getFullYear() - 13;
    let start = myDate.getFullYear() - 50;
		
		return create_range(start, end, '')
}


const cloneObj =  (obj)=> {  
    var newObj = {};  
    if (obj instanceof Array) {  
        newObj = [];  
    }  
    for (var key in obj) {  
        var val = obj[key];  
        //newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; //arguments.callee 在哪一个函数中运行，它就代表哪个函数, 一般用在匿名函数中。  
        newObj[key] = typeof val === 'object' ? cloneObj(val): val;  
    }  
    return newObj;  
}; 

const isEmpty=(v)=>{
	if(v==undefined || v==''|| v==null){
		return true;
	}
	return false;
}

const pagination =(data,callback)=>{

    return {
        onChange:(current)=>{
            callback(current)
        },
        current:data.page,
        pageSize:data.pagesize,
        total:data.total,
        showTotal:()=>{
            return `共${data.total}条`
        }
        //showQuickJumper:true
    }
}

const getOptionList=(data)=>{


    if(!data)return [];

    let options = []

    data.map((item)=>{
        options.push(<Option value={item.id} key={item.id}>{item.name}</Option>);
    })


    return options;
}


export default {
  formatTime: formatTime,
  getapi: getapi,
  create_range: create_range,
  create_waistline_range: create_waistline_range,
  merge_array: merge_array,
  isEnglish: isEnglish,
  isChinese: isChinese,
  isNumber: isNumber,
	setWeight:setWeight,
	setBirthday:setBirthday,
	cloneObj:cloneObj,
	isEmpty:isEmpty,
    pagination:pagination,
    getOptionList:getOptionList
}
