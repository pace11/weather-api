require('dotenv').config()

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Weather API',
    description: `Unofficial Weather API Wrapper from XML to JSON references from API ${process.env.BMKG_NAME} website: ${process.env.BMKG_HOST}`,
    contact: {
      name: `Developer: ${process.env.GITHUB_USERNAME}`,
      url: `${process.env.GITHUB_URL}`,
    },
  },
}
