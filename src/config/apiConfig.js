
export const set = 'set$'


// 开发环境默认配置
let _serverIp = ' https://www.easy-mock.com/mock/5c8ef5806336eb1e21910655/mockapi'
let _port = ''
let _baseURL = `${_serverIp}`
let _mockURL = 'http://localhost:1111/'

if (process.env.NODE_ENV === 'testing') { // 测试环境
    _mockURL = 'http://localhost:1111/'
    _port = '1111'
    _baseURL = `${_serverIp}:${_port}`
}
if (process.env.NODE_ENV === 'production') { // 发布环境
    _port = ''
    _serverIp = ' https://www.easy-mock.com/mock/5c8ef5806336eb1e21910655/mockapi'
    _baseURL = `${_serverIp}`
}


export const baseURL = _baseURL

