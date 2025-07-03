# AGU知技能ロボティクス研究室 - オープンラボ・同窓会出席管理システム

## 📋 概要

青山学院大学知技能ロボティクス研究室の卒業生向けオープンラボ・同窓会の出席状況を効率的に管理するWebアプリケーションです。

## 🌟 主な機能

### ✅ 視覚的な出席状況管理
- **出席状況の色分け表示**
  - 🟢 出席：緑色
  - 🔴 欠席：赤色
  - 🟡 未回答：オレンジ色

### ✅ 卒業生情報表示
- 顔写真付きプロフィール（現在はアバター生成）
- 日本語名・英語名
- 卒業年度・課程（修士/学士）
- 就職先企業

### ✅ 高度なフィルタリング機能
- **年度別フィルター**：2019年〜2024年
- **課程別フィルター**：修士課程・学士課程
- **出席状況フィルター**：出席・欠席・未回答

### ✅ 統計ダッシュボード
- 総卒業生数
- 出席予定者数
- 欠席予定者数
- 未回答者数

### ✅ イベント切り替え
- オープンラボ
- 同窓会

## 🚀 セットアップ方法

### 1. 基本セットアップ
```bash
# ファイルをダウンロード
git clone [リポジトリURL]
cd agu-isr-attendance-system

# ブラウザで開く
open index.html
```

### 2. Webサーバーでの運用（推奨）
```bash
# Python簡易サーバー
python3 -m http.server 8000

# Node.js live-server
npx live-server

# アクセス
http://localhost:8000
```

## 📊 データ管理

### 卒業生データの追加・編集

`script.js`の`alumniData`配列を編集してください：

```javascript
{
    id: 31, // 一意のID
    nameJa: "山田 太郎",
    nameEn: "Taro Yamada",
    year: 2024,
    course: "master", // "master" または "bachelor"
    company: "株式会社サンプル",
    attendance: {
        openlab: "pending", // "attending", "absent", "pending"
        alumni: "pending"
    }
}
```

### 出席状況の更新

管理者は以下の方法で出席状況を更新できます：

1. **直接編集**：`script.js`内のデータを編集
2. **ブラウザコンソール**：開発者ツールで以下を実行
```javascript
// 例：ID 1の卒業生のオープンラボ出席状況を「出席」に変更
updateAttendanceStatus(1, 'openlab', 'attending');
```

## 🖼️ 顔写真の設定

### 現在の実装
- UI Avatarsサービスを使用した自動生成アバター
- 名前を基にしたユニークな色とデザイン

### 実際の写真への変更方法

1. **画像フォルダの作成**
```bash
mkdir images/alumni
```

2. **画像ファイルの命名規則**
```
images/alumni/1.jpg  # ID 1の卒業生
images/alumni/2.png  # ID 2の卒業生
```

3. **コードの修正**（`script.js`の`createAlumniCard`関数）
```javascript
// 変更前
const photoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(alumni.nameEn)}&size=100&background=random&color=fff&format=png`;

// 変更後
const photoUrl = `images/alumni/${alumni.id}.jpg`;
```

## 🌐 研究室での共有方法

### Option 1: GitHub Pages（推奨）
1. GitHubリポジトリを作成
2. ファイルをアップロード
3. Settings → Pages で公開
4. 研究室メンバーにURLを共有

### Option 2: 研究室サーバー
1. 研究室のWebサーバーにファイルをアップロード
2. 適切な権限設定
3. アクセスURLを共有

### Option 3: Google Drive/Dropbox
1. HTMLファイル一式をアップロード
2. 共有リンクを作成
3. ※JavaScript制限により一部機能が制限される場合があります

## 📱 レスポンシブデザイン

- **デスクトップ**：フルグリッド表示
- **タブレット**：最適化されたレイアウト
- **スマートフォン**：縦一列表示

## 🔧 カスタマイズ

### テーマカラーの変更
`styles.css`の以下の変数を編集：
```css
/* メインカラー */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* アクセントカラー */
.event-btn.active {
    background: linear-gradient(135deg, #00b894 0%, #00a085 100%);
}
```

### 新しいイベントタイプの追加
1. HTMLにボタンを追加
2. CSSでスタイリング
3. JavaScriptでイベント処理を追加

## 📈 データエクスポート機能

開発者コンソールで以下を実行：
```javascript
exportData(); // CSV形式でダウンロード
```

## 🔒 セキュリティ考慮事項

### 本格運用時の推奨事項
1. **認証システムの実装**
2. **HTTPS接続の強制**
3. **データベースの暗号化**
4. **アクセスログの記録**

## 🐛 トラブルシューティング

### よくある問題

**Q: 画像が表示されない**
A: ブラウザのCORS制限が原因。Webサーバー経由でアクセスしてください。

**Q: データが保存されない**
A: 現在はブラウザのメモリ上のみ。永続化にはサーバーサイド実装が必要です。

**Q: スマートフォンで表示が崩れる**
A: 最新ブラウザを使用し、JavaScriptが有効になっているか確認してください。

## 🤝 貢献・フィードバック

改善提案や新機能のアイデアがありましたら、以下まで：
- 研究室内Slack
- GitHubのIssue
- 直接連絡

## 📄 ライセンス

研究室内での使用に限定。外部配布時は事前相談が必要です。

## 📞 サポート

技術的な質問や問題については、システム管理者まで連絡してください。

---

**最終更新**: 2024年12月
**バージョン**: 1.0.0
**開発者**: AGU ISR Lab 