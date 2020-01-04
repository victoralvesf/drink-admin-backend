'use strict'

class CreateUser {
  get rules () {
    return {
      username: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:6'
    }
  }

  get messages () {
    return {
      'username.required': 'You must provide an username.',
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered. Do a login instead.',
      'password.required': 'You must provide a password.',
      'password.min': 'Password should have atleast 6 characters.'
    }
  }
}

module.exports = CreateUser
