const CryptoJS = require('crypto-js')

const key = CryptoJS.enc.Utf8.parse('nice#comic2022&%')
const iv = CryptoJS.enc.Utf8.parse('0123456789abcdef')

const encrypt = data =>　{
  const enc = CryptoJS.AES.encrypt(data, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  console.log(enc.ciphertext.toString())
  return enc.ciphertext.toString()
}

const decrypt = base64String =>　{
  const dec = CryptoJS.AES.decrypt(base64String, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })

  const decryptedString = dec.toString(CryptoJS.enc.Utf8)
  const result = JSON.parse(decryptedString)
  return result
}

module.exports = { encrypt, decrypt }
