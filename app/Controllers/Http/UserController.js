'use strict'

const User = use('App/Models/User')

class UserController {
  async create({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return {
      status: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    }
  }

}

module.exports = UserController
