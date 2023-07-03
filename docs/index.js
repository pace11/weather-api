const basicInfo = require('./basic-info')
const servers = require('./server')
const api = require('./api')

module.exports = {
  ...basicInfo,
  ...servers,
  ...api,
}
