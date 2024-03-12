const qs = require('qs')
const { MD5 } = require('crypto-js')

const adapter = params => {
  const key = 'Cartoon$2019&#'
  const timestamp = Date.parse(new Date()).toString().substr(0, 13)
  const newParams = { ...params, timestamp }
  const resultParams = Object.keys(newParams)
    .sort()
    .reduce((obj, k) => {
      obj[k] = encodeURI(newParams[k])
      return obj
    }, {})
  const sign = MD5(qs.stringify({ ...resultParams, key }, { encode: false }))
    .toString()
    .toUpperCase()
  return {
    timestamp,
    sign
  }
}

module.exports = adapter
