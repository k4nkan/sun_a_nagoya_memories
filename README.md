# School Memories in Sunday Nagoya A
## 📸&nbsp;&nbsp;はじめに
スクールでの思い出をおしゃれに見られたらいいなぁ
## 📝&nbsp;&nbsp;概要
このプロダクトは、ユーザーが画像をアップロードするだけで、バックエンド側で自動的に WebP 形式へ変換し、Supabase のストレージとデータベースに保存するアプリケーションです。  
アップロード処理には multer を使ってファイルを受け取り、sharp で画像のフォーマット変換・最適化を行います。  
保存された画像情報は Supabase のテーブルに記録され、フロントエンドから一覧表示が可能です。  
認証には JWT（JSON Web Token）を採用し、パスワードを知っているユーザーのみが操作できるようにルートを保護しています。  
インフラ面では、フロントエンドは Netlify、バックエンドは Renader (初期はRailway) 上でホスティングしています。  
## 🔗&nbsp;&nbsp;リンク
- [**サイトURL**](https://nagoya-sun-a-memories.netlify.app/)
- [**Figma URL**](https://www.figma.com/design/b4jBlq8sMQ4byhgoOr12uL/memories)
- [**備忘録 Zenn**](https://zenn.dev/litkyan/scraps/f9b230a250953c)
## 🛠️&nbsp;&nbsp;技術構成
- **Frontend** : HTML / CSS / JavaScript
- **Backend** : TypeScript / Node.js / Express / dotenv / multer / sharp / uuid / Supabase
- **その他** : Netlify / Render / Railway
## 🎉&nbsp;&nbsp;Special Thanks
- あるちゃん
- りっちゃん
- ほしょさん
- さりゅさん
