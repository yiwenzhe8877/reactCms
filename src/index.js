import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IRouter from './router'
import { Provider } from 'react-redux'
import store from  '@redux/store'


//通过provide把react和redux链接，store传到react项目中
ReactDOM.render(
        <Provider store={store}>
            <IRouter />
        </Provider>
       ,document.getElementById('root'))

