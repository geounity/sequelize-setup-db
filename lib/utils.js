'use strict'

const crypto = require('crypto')

function encrypt (password) {
  let shasum = crypto.createHash('sha256')
  shasum.update(password)
  return shasum.digest('hex')
}

const utils = {
  encrypt
}

module.exports = utils
