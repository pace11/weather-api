const verifyApiToken = (req, res, next) => {
  const token = req?.query?.api_token
  const isAuthorized = token === process.env.API_TOKEN
  if (!isAuthorized) {
    return res
      .status(401)
      .json({ success: false, message: 'Unauthorized' })
  }
  return next()
}

module.exports = verifyApiToken
