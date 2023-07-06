module.exports = async (root, args, context) => {
  try {
    const response = await fetch(
      `${process.env.HOST}/weather/${args?.province_id || ''}`,
      {
        method: 'GET',
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
