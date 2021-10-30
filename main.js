const { google } = require('googleapis')
require('dotenv').config()

const main = async () => {
  const client = await google.auth.getClient({
    keyFile: './credential.json', // key file
    scopes: 'https://www.googleapis.com/auth/analytics.readonly',
  })

  const analyticsreporting = await google.analyticsreporting({
    version: 'v4',
    auth: client,
  })

  const res = await analyticsreporting.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: process.env.VIEWID, // view id
          dateRanges: [
            {
              startDate: 'today',
              endDate: 'today',
            },
          ],
          metrics: [{ expression: 'ga:sessions' }],
          dimensions: [{ name:"ga:datehour" }]
        },
      ],
    },
  })

  console.log(JSON.stringify(res, null, 2))
}

main()