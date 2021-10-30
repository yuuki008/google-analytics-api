const { google } = require('googleapis')
const fs = require('fs')
require('dotenv').config()

const json = JSON.parse(fs.readFileSync('./credential.json', 'utf8'));
const scopes = ['https://www.googleapis.com/auth/analytics.readonly']
const jwtClient = new google.auth.JWT(json.client_email, null, json.private_key, scopes)

async function main() {
  await jwtClient.authorize()
  let response = await google.analytics('v3').data.realtime.get({
    'auth': jwtClient,
    'ids': 'ga:204896850',
    'metrics': 'rt:activeUsers'
  })
  console.log(response.data)
}

main()