module.exports = {
  get: {
    tags: ['Weather'],
    description: 'Get weather by province_id',
    operationId: 'getWeatherByProvinceId',
    parameters: [
      {
        name: 'province_id',
        in: 'path',
        schema: {
          properties: {
            province_id: {
              type: 'string',
            },
          },
        },
        required: true,
      },
    ],
    responses: {
      200: {
        description: 'Ok',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                meta: {
                  type: 'object',
                  properties: {
                    copyright: {
                      type: 'string',
                    },
                    website: {
                      type: 'string',
                    },
                    url_reference: {
                      type: 'string',
                    },
                  },
                },
                data: {
                  type: 'object',
                  properties: {
                    forecast: {
                      type: 'object',
                      properties: {
                        domain: {
                          type: 'string',
                        },
                        timestamp: {
                          type: 'string',
                        },
                        area: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              id: {
                                type: 'string',
                              },
                              latitude: {
                                type: 'string',
                              },
                              longitude: {
                                type: 'string',
                              },
                              coordinate: {
                                type: 'string',
                              },
                              type: {
                                type: 'string',
                              },
                              region: {
                                type: 'string',
                              },
                              level: {
                                type: 'string',
                              },
                              description: {
                                type: 'string',
                              },
                              domain: {
                                type: 'string',
                              },
                              tags: {
                                type: 'string',
                              },
                              name: {
                                type: 'array',
                                items: {
                                  type: 'string',
                                },
                              },
                              parameter: {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    description: {
                                      type: 'string',
                                    },
                                    timerange: {
                                      type: 'array',
                                      items: {
                                        type: 'object',
                                        properties: {
                                          type: {
                                            type: 'string',
                                          },
                                          datetime: {
                                            type: 'string',
                                          },
                                          value: {
                                            type: 'array',
                                            items: {
                                              type: 'object',
                                              properties: {
                                                unit: {
                                                  type: 'string',
                                                },
                                                text: {
                                                  type: 'string',
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                error: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                    },
                    code: {
                      type: 'number',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}
