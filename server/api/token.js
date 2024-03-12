const createToken = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  for (let i = 0; i < 32; i++) uuid.push(chars[0 | (Math.random() * 62)])
  return uuid.join('')
}

module.exports = { createToken }