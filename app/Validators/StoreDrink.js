'use strict'

class StoreDrink {
  get rules () {
    return {
      brand: 'required',
      flavor: 'required',
      price: 'required|number',
      milimiters: 'required|integer',
      quantity: 'required|integer',
    }
  }

  get messages () {
    return {
      'brand.required': 'You must provide a value for brand field.',
      'flavor.required': 'You must provide a value for flavor field.',
      'price.required': 'You must provide a value for price field.',
      'price.number': 'The price field have a float number format.',
      'milimiters.required': 'You must provide a value for milimiter field',
      'milimiters.integer': 'The milimiters field have a integer number format',
      'quantity.required': 'You must provide a value for quantity field',
      'quantity.integer': 'The quantity field have a integer number format',
    }
  }
}

module.exports = StoreDrink
