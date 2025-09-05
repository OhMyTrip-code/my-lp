# 09_Implementation_Recipe.md - No-Code実装レシピ

## 推奨ツールスタック

### Option A: STUDIO（推奨）
**月額費用**: ¥3,280（Starterプラン）
**選定理由**: 
- 日本語UI完備
- レスポンシブ設計優秀
- GTM/GA4統合簡単
- Stripe決済対応

### Option B: Webflow
**月額費用**: $29（CMS Plan）
**選定理由**:
- 高度なインタラクション
- CMS機能充実
- グローバルスタンダード

### Option C: Framer
**月額費用**: $20（Pro Plan）
**選定理由**:
- リアルタイムプレビュー
- コンポーネント管理優秀
- アニメーション豊富

## STUDIO実装手順（推奨）

### 1. 初期セットアップ

#### プロジェクト作成
1. STUDIOアカウント作成
2. 新規プロジェクト「jprep-benesse-kids」
3. カスタムドメイン設定
4. SSL証明書有効化

#### デザイントークン設定
```
カラー設定：
- Primary: #FF69B4
- Secondary: #5AA9E6
- Tertiary: #FFD166
- Text: #222222
- Background: #FFFFFF

フォント設定：
- 見出し: Noto Sans JP 700
- 本文: Noto Sans JP 400
- サイズ: 16px（ベース）
```

### 2. コンポーネント実装

#### ヘッダー（固定）
```
設定手順：
1. Box追加 → Position: Fixed, Top: 0, Width: 100%
2. ロゴ画像配置（左寄せ）
3. CTAボタン×2配置（右寄せ）
4. Z-index: 1000設定
5. 背景: rgba(255,255,255,0.95)
```

#### 年齢タブコンポーネント
```javascript
// STUDIOのカスタムコード
<script>
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.age-tab');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Remove active class
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      
      // Add active class
      tab.classList.add('active');
      contents[index].classList.add('active');
      
      // GA4 Event
      gtag('event', 'tab_switch', {
        to_tab: tab.dataset.age,
        tab_index: index
      });
    });
  });
});
</script>
```

#### 固定フッターCTA
```
設定手順：
1. Box追加 → Position: Fixed, Bottom: 0
2. 高さ: 80px, パディング: 16px
3. ボタン2個横並び（Flexbox）
4. スクロールトリガー設定（300px以上で表示）
```

### 3. フォーム実装（Tally統合）

#### Tallyフォーム作成
1. Tallyアカウント作成
2. 新規フォーム「体験会申込」
3. フィールド設定：
   - プラン選択（ラジオボタン）
   - 希望日時（ドロップダウン）
   - お子様情報（テキスト）
   - 保護者情報（テキスト）
   - メールアドレス（Email）

#### STUDIO埋め込み
```html
<!-- Tally埋め込みコード -->
<iframe
  data-tally-src="https://tally.so/r/YOUR_FORM_ID"
  width="100%"
  height="600"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  title="体験会申込フォーム">
</iframe>
<script src="https://tally.so/widgets/embed.js"></script>
```

#### Webhook設定
```javascript
// Tally Webhook → Zapier
{
  "event": "FORM_RESPONSE",
  "data": {
    "responseId": "xxx",
    "submittedAt": "2025-10-01T10:00:00Z",
    "fields": {
      "plan": "exploration",
      "schedule": "2025-10-01 16:00",
      "childName": "山田太郎",
      "parentName": "山田花子",
      "email": "yamada@example.com"
    }
  }
}
```

### 4. 決済統合（Stripe Checkout）

#### Stripe設定
```javascript
// Stripe Checkout セッション作成
const stripe = Stripe('pk_live_YOUR_PUBLISHABLE_KEY');

async function createCheckoutSession(plan) {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      priceId: plan.priceId,
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cancel',
    }),
  });
  
  const session = await response.json();
  
  // Redirect to Stripe Checkout
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });
  
  if (result.error) {
    alert(result.error.message);
  }
}
```

#### 価格設定（Stripe Dashboard）
```
商品名: J PREP Kids 体験会
価格: ¥0（体験会）

商品名: J PREP Kids 本講座
価格: ¥10,000/回
```

### 5. カレンダー統合（Calendly）

#### Calendly設定
1. イベントタイプ作成：
   - 体験会（90分）
   - 定員: 6組
   - 予約可能期間: 2週間先まで

2. 埋め込みコード：
```html
<!-- Calendly inline widget -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/jprep-kids/trial?hide_event_type_details=1"
     style="min-width:320px;height:630px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
```

### 6. GA4/GTM統合

#### GTMコンテナ設定
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
```

#### カスタムイベントトリガー
```javascript
// CTA クリックトラッキング
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', () => {
    dataLayer.push({
      'event': 'click_cta',
      'button_text': button.innerText,
      'button_location': button.dataset.location,
      'button_type': button.dataset.type
    });
  });
});

// スクロール深度トラッキング
let scrollDepths = [25, 50, 75, 100];
let triggeredDepths = [];

window.addEventListener('scroll', () => {
  const scrollPercentage = (window.scrollY / 
    (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
  scrollDepths.forEach(depth => {
    if (scrollPercentage >= depth && !triggeredDepths.includes(depth)) {
      triggeredDepths.push(depth);
      dataLayer.push({
        'event': 'scroll_depth',
        'scroll_percentage': depth
      });
    }
  });
});
```

### 7. Zapier自動化フロー

#### フロー1: フォーム送信→メール送信
```
トリガー: Tally新規回答
アクション1: Gmail送信（確認メール）
アクション2: Google Calendar イベント作成
アクション3: Slack通知（運営チーム）
```

#### フロー2: 決済完了→処理
```
トリガー: Stripe決済成功
アクション1: Google Sheets行追加
アクション2: SendGrid領収書送信
アクション3: LINE Notify通知
```

#### フロー3: リマインダー送信
```
トリガー: スケジュール（毎日10:00）
フィルター: 3日後の予約あり
アクション: メールリマインダー送信
```

### 8. 画像最適化（Cloudinary）

#### 自動変換設定
```
Upload Preset:
- Format: Auto (WebP/JPEG)
- Quality: Auto
- Resize: Limit to 1920px
- Optimization: Aggressive

変換URL例:
https://res.cloudinary.com/YOUR_CLOUD/image/upload/
  f_auto,q_auto,w_1920/v1/hero-image.jpg
```

### 9. パフォーマンス最適化

#### STUDIO設定
```
最適化設定：
1. 画像の遅延読み込み: ON
2. Gzip圧縮: ON
3. ブラウザキャッシュ: 7日
4. CDN: CloudFront自動
```

#### カスタムCSS最適化
```css
/* Critical CSS（インライン） */
<style>
  /* Above the fold styles only */
  .hero { ... }
  .cta-button { ... }
</style>

/* Non-critical CSS（遅延読込） */
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### 10. テスト環境構築

#### ステージング環境
```
URL: https://staging-jprep-kids.studio.site
Basic認証:
- Username: preview
- Password: [ランダム生成]

テストデータ:
- Stripeテストモード
- GA4デバッグモード
- フォームテストモード
```

## トラブルシューティング

### よくある問題と解決策

| 問題 | 原因 | 解決策 |
|------|------|--------|
| フォームが表示されない | CSPエラー | frame-src追加 |
| 決済ボタンが動作しない | APIキー設定ミス | 公開鍵確認 |
| GA4イベント発火しない | GTM公開忘れ | コンテナ公開 |
| モバイル表示崩れ | Viewport未設定 | metaタグ追加 |
| 画像読込遅い | 最適化不足 | Cloudinary利用 |

## 月額コスト見積もり

| サービス | プラン | 月額 |
|----------|--------|------|
| STUDIO | Starter | ¥3,280 |
| Tally | Pro | $29 |
| Calendly | Professional | $12 |
| Cloudinary | Plus | $89 |
| Zapier | Starter | $19.99 |
| **合計** | - | **約¥20,000** |

## デプロイチェックリスト

### 本番公開前確認

- [ ] すべてのリンク動作確認
- [ ] フォーム送信テスト（本番環境）
- [ ] 決済フローテスト（少額決済）
- [ ] GA4イベント発火確認
- [ ] レスポンシブ表示確認
- [ ] ページ速度測定（Lighthouse）
- [ ] SSL証明書確認
- [ ] 404ページ設定
- [ ] robots.txt設定
- [ ] sitemap.xml生成