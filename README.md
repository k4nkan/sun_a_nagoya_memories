# School Memories in Sunday Nagoya A
## 📸&nbsp;&nbsp;はじめに
スクールでの思い出をおしゃれに見られたらいいなぁ
## 📝&nbsp;&nbsp;概要
撮った写真をオンライン上でおしゃれに見るためのwebアプリケーションです。    
フロントエンドでは、HTML、CSS、JSを用いながらバックエンドから取得した画像をおしゃれに表示します。  
バックエンドでは、TypeScript、Node.js、Express、Supabase などを用いた api を作成しました。  
ユーザーが画像をアップロードした画像をWebP形式へ変換し、Supabase のストレージとデータベースに保存しています。
認証には JWT（JSON Web Token）を採用し、パスワードを知っているユーザーのみが操作できるようにルートを保護しています。  
インフラ面では、フロントエンドは Netlify、バックエンドは Renader (初期は Railway) 上でホスティングしました。  
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
