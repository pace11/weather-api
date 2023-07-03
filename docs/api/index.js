const getProvinces = require('./provinces')
const weather = require('./weather')

module.exports = {
  paths: {
    '/provinces': {
      ...getProvinces,
    },
    '/weather/{province_id}': {
      ...weather,
    },
  },
}
