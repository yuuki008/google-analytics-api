import { google } from 'googleapis'

const main = async () => {
  const client = await google.auth.getClient({
    keyFile: './core-computer-322705-a4a051eb79ac.json', // キー JSON ファイルを配置した場所を指定する
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
          viewId: '253964314', // ビュー ID を指定する
          dateRanges: [
            {
              startDate: '7daysAgo',
              endDate: 'today',
            },
          ],
          metrics: [{ expression: 'ga:pageviews' }],
          dimensions: [{ name: 'ga:pagePath' }, { name: 'ga:pageTitle' }],
          orderBys: [{ fieldName: 'ga:pageviews', sortOrder: 'DESCENDING' }],
        },
      ],
    },
  })
  console.log(JSON.stringify(res.data, null, 2))
}

main()