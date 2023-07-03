require('dotenv').config()

module.exports = {
  servers: [
    {
      url: `${process.env.HOST}`,
      description: 'Url Api',
    },
  ],
}
