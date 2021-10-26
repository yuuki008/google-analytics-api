
- javascript https://developers.google.com/analytics/devguides/reporting/core/v4/quickstart/web-js?hl=ja
- https://dev.classmethod.jp/articles/ga-api-v4-node/
- https://fwywd.com/tech/ga-popular-node-ts
- https://ponsuke-tarou.hatenablog.com/entry/2021/03/19/120046

1. GCP -> APIとサービス -> ライブラリ -> Google Analytics Reporting API 有効に
2. GCP -> APIとサービス -> 認証情報 -> 鍵作成 -> JSON型でファイルダウンロード
3. GA -> 管理 -> アカウントユーザーの管理 -> 2で作成したclient_emailでユーザー追加

GCPで叩くようのサービスアカウント作成 -> 叩きたいanalyticsアカウントで1で作成したemailを追加することで、GCP経由でanalytics apiを叩ける