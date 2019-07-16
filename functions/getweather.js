exports.handler = (event, context, callback) => {
  const city = typeof JSON.parse(event.body)
  callback(null, {
    statusCode: 200,
    body: `city: ${city}`,
  })
}
