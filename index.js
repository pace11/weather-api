const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const convert = require('xml-js')
const XMLHttpRequest = require('xhr2')
const swaggerUI = require('swagger-ui-express')

const { responseApi, responseError, transformData } = require('./utils')
const { PROVINCE } = require('./constant')
const docs = require('./docs')

require('dotenv').config()

const PORT = process.env.PORT || 8080

const app = express()
app.use(helmet()) // security api
app.use(bodyParser.json()) // body parser
app.use(cors()) // handing cors

app.get('/', async (req, res) => {
  try {
    res.status(200).json({
      message: 'Please contact developer for more information',
      documentation: `${process.env.HOST}/api-docs`,
    })
  } catch (error) {
    healthcheck.message = error
    res.status(503).send()
  }
})

app.get('/health', async (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    responsetime: process.hrtime(),
    message: 'Ok',
    timestamp: Date.now(),
  }
  try {
    res.status(200).json(healthcheck)
  } catch (error) {
    healthcheck.message = error
    res.status(503).json()
  }
})

app.get('/provinces', async (req, res) => {
  try {
    responseApi({ res, data: PROVINCE })
  } catch (error) {
    console.log('err => ', error)
    res.status(503).json()
  }
})

app.get('/weather/:province_id', async (req, res) => {
  try {
    let xhr = new XMLHttpRequest()
    xhr.open(
      'GET',
      `${process.env.URL_BMKG_CUACA}/DigitalForecast-${req.params.province_id}.xml`,
    )
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = convert.xml2json(xhr.responseText, {
          compact: true,
          spaces: 4,
        })
        responseApi({ res, data: transformData(JSON.parse(data)), xhr })
      }

      if (xhr.readyState === 4 && xhr.status === 404) {
        responseApi({ res, xhr })
      }
    }
    xhr.send()
  } catch (error) {
    responseError({ res })
  }
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
