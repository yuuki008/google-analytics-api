1. GCP -> APIとサービス -> ライブラリ -> Google Analytics Reporting API 有効に
2. GCP -> APIとサービス -> 認証情報 -> 鍵作成 -> JSON型でファイルダウンロード
3. GA -> 管理 -> アカウントユーザーの管理 -> 2で作成したclient_emailでユーザー追加

GCPで叩くようのサービスアカウント作成 -> 叩きたいanalyticsアカウントで1で作成したemailを追加することで、GCP経由でanalytics apiを叩ける