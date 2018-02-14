/**
* ccrypto is from Node.js
* shortage: The hash is always the same if the input does not change
*/
// const crypto = require('crypto')
// const hash = crypto.createHash('sha256')
//
// hash.update('password124')
// console.log(hash.digest('base64'))


const bcrypt = require('bcrypt')
const userInputPassword = 'password123'
bcrypt.genSalt(10, (error, salt) => {
  console.log('salt: ', salt)

  bcrypt.hash(userInputPassword, salt, (error, hash) => {
    console.log('hash: ', hash)
  })
})

const hashPassword = '$2a$10$EOCtbTXSkI660BmzjwVk9u8q7iuSKApL.j4ceCOkNKfDfSGd5tUFm'
bcrypt.compare(userInputPassword, hashPassword)
.then(result => console.log(result))
