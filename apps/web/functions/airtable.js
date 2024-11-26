const Airtable = require('airtable')

exports.handler = function (event, context, callback) {

  const respondWith = (body) => callback(null, {
    statusCode: 200,
    body: JSON.stringify(body)
  })

  const respondError = () => callback(null, { statusCode: 500 })

  const { AIRTABLE_API_KEY } = process.env
  Airtable.configure({ apiKey: AIRTABLE_API_KEY })

  const { baseId, tableName, viewName } = event.queryStringParameters

  if(!baseId || !tableName) respondError()

  const base = Airtable.base(baseId)

  base(tableName)
    .select({ view: viewName || "Grid view"})
    .firstPage((err, records) => {
      if (err) respondError()
      else respondWith(records)
    })  

}