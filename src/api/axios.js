import axios from 'axios';
import {Modal} from 'antd';
import {baseURL} from '@config/apiConfig'

axios.defaults.timeout = 5000;
axios.defaults.baseURL =baseURL;

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }

        //  config.params = {'token':'FFE23FD9CD6C7D67C39DD69AE848C8C7F9A51884390C9B9DAA891E23A11DBD396976C48DF92AFBE8D6FC49BE51995B95757AB728453C7FD0DC9AF65A563B392C'}

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {

        //错误处理
        // if(response.data.code=='0'){
        //     return response.data.data;
        // }
        // Modal.info({
        //     title:"提示",
        //     content:response.msg
        // })

        return response;
    },
    error => {
        return Promise.reject(error)
    }
)


export  function  createApi(url,method){

    //开启loading
    // let loading;
    // loading = document.getElementById('loading');
    // loading.style.display='block';
    return  params=> {
        return new Promise((resolve,reject) => {
            axios[method](url,{
                params:params
            })
            .then(response => {
                //关闭loading

                if(method=='get'){
                    resolve(response.data.result);
                }
                if(method=='post'){
                    resolve(response.data);
                }

            })
            .catch(err => {
                reject(err)
            })
        })
    }
}


