/**
 *
 * @param {Any} data
 * @return Object[]
 */
const transformData = (data) => {
  const tmp = { ...data }
  const areaArr = tmp?.data?.forecast?.area
  return {
    forecast: {
      domain: tmp?.data?.forecast?._attributes?.domain || null,
      timestamp: tmp?.data?.forecast?.issue?.timestamp?._text || null,
      area: areaArr?.map((el) => ({
        id: el?._attributes?.id || null,
        latitude: el?._attributes?.latitude || null,
        longitude: el?._attributes?.longitude || null,
        coordinate: el?._attributes?.coordinate || null,
        type: el?._attributes?.type || null,
        region: el?._attributes?.region || null,
        level: el?._attributes?.level || null,
        description: el?._attributes?.description || null,
        domain: el?._attributes?.domain || null,
        tags: el?._attributes?.tags || null,
        name: el?.name?.map((item) => item?._text) || null,
        parameter: el?.parameter?.map((item) => ({
          description: item?._attributes?.description || null,
          timerange: item?.timerange?.map((item) => ({
            type: item?._attributes?.type || null,
            datetime: item?._attributes?.datetime || null,
            value: item?.value.length
              ? item?.value?.map((item) => ({
                  unit: item?._attributes?.unit || null,
                  text: item?._text || null,
                }))
              : [
                  {
                    unit: item?.value?._attributes?.unit || null,
                    text: item?.value?._text || null,
                  },
                ],
          })),
        })),
      })),
    },
  }
}

/**
 *
 * @param {Any} param.res
 * @param {Any} param.data
 * @returns Object[]
 */
const responseApi = ({ res, data, xhr }) => {
  const meta = {
    copyright: process.env.BMKG_NAME,
    website: xhr?.['_url']?.host
      ? `${xhr?.['_url']?.protocol}//${xhr?.['_url']?.host}`
      : process.env.BMKG_HOST,
    url_reference: xhr?.['_url']?.href || null,
  }
  const error = {
    message: xhr?.statusText || 'Ok',
    code: xhr?.status || 200,
  }
  const responseData = [200].includes(xhr?.status ?? 200) ? data : null
  return res.status(xhr?.status ?? 200).json({
    meta,
    ...(![200].includes(xhr?.status ?? 200) && { error }),
    data: responseData,
  })
}

/**
 *
 * @param {Any} param.res
 * @returns Object[]
 */
const responseError = ({ res }) => {
  const error = {
    message: 'Service Unavailable',
    code: 503,
  }
  return res.status(error?.code).json(error)
}

module.exports = {
  transformData,
  responseApi,
  responseError,
}
