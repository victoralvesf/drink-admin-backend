'use strict'

class StoreType {
  get rules () {
    return {
      name: 'required',
    }
  }

  get messages () {
    return {
      'name.required': 'You must provide a value for name field.',
    }
  }
}

module.exports = StoreType
