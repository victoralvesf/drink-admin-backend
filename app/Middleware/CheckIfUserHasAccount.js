'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')

class CheckIfUserHasAccount {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.reponse
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const { email } = request.only('email');

    const user = await User.query().where('email', email).fetch()

    const result = user.toJSON()

    if (result.length !== 0) {
      return response
        .badRequest(`O email ${email} já possui cadasto, tente realizar o login`)
    }

    await next()
  }
}

module.exports = CheckIfUserHasAccount
