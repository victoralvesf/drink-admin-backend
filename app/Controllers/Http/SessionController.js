'use strict'

class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }

  async getCurrentUser({ auth }) {
    const { id, username, email } = auth.current.user

    return { id, username, email }
  }
}

module.exports = SessionController
