const { gql } = require('apollo-server-express')
const provinces = require('../api/provinces')
const weather = require('../api/weather')

const typeDefs = gql`
  type Meta {
    copyright: String
    website: String
    url_reference: String
  }

  type Data {
    id: String
    name: String
  }

  type Error {
    message: String
    code: Int
  }

  type Value {
    unit: String
    text: String
  }

  type Timerange {
    type: String
    datetime: String
    value: [Value]
  }

  type Parameter {
    description: String
    timerange: [Timerange]
  }

  type Area {
    id: String
    latitude: String
    longitude: String
    coordinate: String
    type: String
    region: String
    level: String
    description: String
    domain: String
    tags: String
    name: [String]
    parameter: [Parameter]
  }

  type Forecast {
    domain: String
    timestamp: String
    area: [Area]
  }

  type DataWeather {
    forecast: Forecast
  }

  type ProvincesResponse {
    meta: Meta
    data: [Data]
    error: Error
  }

  type WeatherResponse {
    meta: Meta
    data: DataWeather
    error: Error
  }

  extend type Query {
    provinces: ProvincesResponse
    weather(province_id: String!): WeatherResponse
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  // Resolvers for Queries
  Query: {
    provinces,
    weather,
  },
}

module.exports = { typeDefs, resolvers }
