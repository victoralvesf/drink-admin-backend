'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/', 'UserController.store').validator('CreateUser')

}).prefix('users')

Route.group(() => {
  Route.post('/', 'SessionController.create').validator('UserLogin')
  Route.get('/current_user', 'SessionController.getCurrentUser').middleware(['auth'])

}).prefix('sessions')

Route.group(() => {
  Route.get('/', 'DrinkController.index')
  Route.post('/', 'DrinkController.store').validator('StoreDrink')
  Route.get('/:id', 'DrinkController.show')
  Route.put('/:id', 'DrinkController.update').validator('StoreDrink')
  Route.delete('/:id', 'DrinkController.destroy')

}).prefix('drinks').middleware(['auth'])

Route.group(() => {
  Route.get('/', 'DrinkTypeController.index')
  Route.post('/', 'DrinkTypeController.store').validator('StoreType')
  Route.get('/:id', 'DrinkTypeController.show')
  Route.put('/:id', 'DrinkTypeController.update').validator('StoreType')
  Route.delete('/:id', 'DrinkTypeController.destroy')

}).prefix('drink_types').middleware(['auth'])
