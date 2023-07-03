module.exports = {
  get: {
    tags: ['Province'],
    description: 'Get provinces',
    operationId: 'getProvinces',
    parameters: [],
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
                    id: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
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
