# Cancer Login Sample (XAMPP + MySQL)

このプロジェクトは、XAMPP上で動く登録/ログイン機能のサンプルです。

## 1. 前提

- `C:/xampp/htdocs/Cancer` に配置されていること
- XAMPP Control Panel で `Apache` と `MySQL` を `Start` していること

## 2. データベース作成

### phpMyAdminで作成する場合

1. ブラウザで `http://localhost/phpmyadmin/` を開く
2. 「インポート」から `database.sql` を選択して実行

### SQLで作成する場合

`http://localhost/phpmyadmin/` の SQL タブで、`database.sql` の内容を実行してください。

## 3. アプリ起動

1. ブラウザで `http://localhost/Cancer/` を開く
2. 「新規登録」でユーザー作成
3. 作成したユーザーでログイン

## 4. 実装ファイル

- `index.php`: ログイン / 新規登録画面
- `gacha.php`: 認証済みガチャ画面
- `assets/css/style.css`: 共通スタイル
- `assets/js/login.js`: ログイン / 登録画面のクライアント処理
- `assets/js/script.js`: ガチャ画面のクライアント処理
- `api/db.php`: PDO接続とJSONレスポンス共通処理
- `api/register.php`: ユーザー登録API
- `api/login.php`: ログインAPI
- `api/logout.php`: ログアウトAPI
- `api/me.php`: ログイン状態確認API

## 5. DB接続設定を変える場合

`api/db.php` の下記定数を環境に合わせて変更してください。

- `DB_HOST`
- `DB_NAME`
- `DB_USER`
- `DB_PASS`
