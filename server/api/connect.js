
const axios = require('axios')
const qs = require('qs')
const moment = require('moment')
const adapter = require('./adapter')
const { decrypt } = require('./decipher')

const baseApi = process.env.BASE_URL
const instance = axios.create()
instance.defaults.baseURL = `${baseApi}/3/cartoon`
instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

// 請求攔截
instance.interceptors.request.use(
  config => {
    Object.assign(config.headers, adapter(config.data))
    config.data = qs.stringify(config.data)
    return config
  },
  error => {
    console.log('request error: ', error)
    return Promise.reject(error)
  }
)

// 響應攔截
instance.interceptors.response.use(
  response => {
    const { data: { data } } = response
    if (data) response.data.data = decrypt(response.data.data)
    return Promise.resolve(response.data)
  },
  error => {
    console.log('server error: ', error)
    return Promise.reject(error)
  }
)


const post = (path, params, token) =>
  new Promise((resolve, reject) => {
    instance.defaults.headers['Access-Token'] = token
    const start = new Date().getTime()
    instance
    .post(path, params)
    .then(res => {
      const end = new Date().getTime(), timeDifference = end - start
      console.log(`${timeDifference > 100 ? '[High]' : ''} cost: ${timeDifference} ms, apibase: ${baseApi}, path: ${path}`)
      resolve(res)
    })
    .catch(err => {
      console.log(err)
      const time = moment().format('YYYY-MM-DD HH:mm:ss')
      console.log(`[${time}] An error occur when call api path: ${path} !!`)
      reject(err)
    })
  })

module.exports = { post }