import { google } from 'googleapis'

const main = async () => {
  const client = await google.auth.getClient({
    keyFile: './credential.json', // key file
    scopes: 'https://www.googleapis.com/auth/analytics.readonly',
  })

  const analyticsreporting = await google.analyticsreporting({
    version: 'v4',
    auth: client,
  })

  analyticsreporting.reports.batchGet

  const res = await analyticsreporting.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: '204896850', // view id
          metrics: [{ expression: 'sg:sessions' }],
        },
      ],
    },
  })

  console.log(JSON.stringify(res, null, 2))
}

main()