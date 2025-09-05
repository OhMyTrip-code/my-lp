# 08_A11y_and_Perf_Checks.md - アクセシビリティ＆パフォーマンス検証

## WCAG 2.1 AA チェックリスト

### 1. 知覚可能（Perceivable）

#### 1.1 代替テキスト
- [ ] すべての画像にalt属性設定
- [ ] 装飾画像はalt=""で空設定
- [ ] 複雑な画像には詳細説明リンク
- [ ] アイコンボタンにaria-label

**検証方法**
```bash
# AXE DevToolsで確認
axe https://jprep-benesse-kids.jp --tags wcag2a,wcag2aa --save report.json
```

#### 1.2 時間依存メディア
- [ ] 動画に字幕/キャプション
- [ ] 音声コンテンツに文字起こし
- [ ] 自動再生なし（またはミュートボタン）

#### 1.3 適応可能
- [ ] 適切なHTML5セマンティック要素使用
- [ ] 見出しレベル階層が正しい（h1→h2→h3）
- [ ] テーブルにはth要素とscope属性
- [ ] フォームフィールドにlabel要素

#### 1.4 識別可能
- [ ] テキストと背景のコントラスト比 ≥ 4.5:1（通常テキスト）
- [ ] 大きいテキスト（18px以上）は ≥ 3:1
- [ ] リンクテキストが周囲と識別可能
- [ ] エラーメッセージが色以外でも識別可能

**コントラスト検証**
```javascript
// Chrome DevToolsでの確認手順
1. Elements → 対象要素選択
2. Styles → Color picker開く
3. Contrast ratioを確認（AA準拠マーク）
```

### 2. 操作可能（Operable）

#### 2.1 キーボードアクセシブル
- [ ] すべての機能がキーボードで操作可能
- [ ] Tabキーでフォーカス移動が論理的
- [ ] モーダル内でフォーカストラップ
- [ ] Escキーでモーダル/ドロップダウン閉じる

**検証スクリプト**
```javascript
// キーボードナビゲーションテスト
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    console.log('Focus:', document.activeElement);
  }
});
```

#### 2.2 十分な時間
- [ ] タイムアウトなし（または延長可能）
- [ ] 自動更新の一時停止機能
- [ ] セッション期限の事前警告

#### 2.3 発作の防止
- [ ] 1秒間に3回以上の点滅なし
- [ ] 閃光閾値を下回る

#### 2.4 ナビゲーション可能
- [ ] ページタイトルが内容を説明
- [ ] フォーカス順序が意味的
- [ ] リンクテキストが目的を明確化
- [ ] 複数の到達手段（メニュー、検索、サイトマップ）
- [ ] 見出しとラベルが内容を説明
- [ ] フォーカスが視認可能

#### 2.5 入力モダリティ
- [ ] タッチターゲット ≥ 44×44px
- [ ] ドラッグ操作に代替手段
- [ ] 誤操作の取り消し可能

### 3. 理解可能（Understandable）

#### 3.1 読みやすさ
- [ ] ページ言語設定（lang="ja"）
- [ ] 専門用語に説明/定義
- [ ] 読み方が曖昧な語句にルビ

#### 3.2 予測可能
- [ ] フォーカス移動で予期しない動作なし
- [ ] 入力で自動的なコンテキスト変更なし
- [ ] ナビゲーションが一貫
- [ ] 同一機能のラベルが一貫

#### 3.3 入力支援
- [ ] エラーの特定と説明
- [ ] 入力フィールドにラベル/説明
- [ ] エラー修正の提案
- [ ] 法的/金銭的操作の確認画面

### 4. 堅牢（Robust）

#### 4.1 互換性
- [ ] 正しいHTMLマークアップ（W3C Validator）
- [ ] WAI-ARIA属性の適切な使用
- [ ] スクリーンリーダー対応確認

**バリデーション**
```bash
# HTML検証
npx html-validator https://jprep-benesse-kids.jp --format json

# ARIA検証
npx aria-query-check ./dist/index.html
```

## パフォーマンス最適化

### Lighthouse目標値

| 指標 | 目標 | 現在値 | 対策 |
|------|------|--------|------|
| Performance | ≥90 | [計測] | 画像最適化、JS分割 |
| Accessibility | 100 | [計測] | WCAG準拠 |
| Best Practices | 100 | [計測] | HTTPS、コンソールエラー解消 |
| SEO | 100 | [計測] | メタタグ、構造化データ |

### Core Web Vitals最適化

#### LCP（Largest Contentful Paint）< 2.5秒

**最適化タスク**
- [ ] ヒーロー画像をWebP形式に変換
- [ ] 画像にwidth/height属性設定
- [ ] Critical CSSインライン化
- [ ] フォントのpreload設定

**実装例**
```html
<!-- フォントpreload -->
<link rel="preload" href="/fonts/NotoSansJP-Regular.woff2" as="font" type="font/woff2" crossorigin>

<!-- ヒーロー画像の優先読み込み -->
<img src="hero.webp" alt="..." fetchpriority="high" loading="eager" width="1200" height="600">
```

#### FID（First Input Delay）< 100ms

**最適化タスク**
- [ ] JavaScriptの分割と遅延読込
- [ ] メインスレッドブロッキング削減
- [ ] Web Workerで重い処理を分離

**実装例**
```javascript
// 重い処理を遅延実行
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // 非クリティカルな初期化処理
  });
}
```

#### CLS（Cumulative Layout Shift）< 0.1

**最適化タスク**
- [ ] 画像・動画にサイズ指定
- [ ] 動的コンテンツ用スペース確保
- [ ] Webフォントのfont-display: swap

**実装例**
```css
/* アスペクト比でスペース確保 */
.image-container {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

/* フォントスワップ */
@font-face {
  font-family: 'Noto Sans JP';
  font-display: swap;
}
```

### 画像最適化

#### 変換コマンド
```bash
# WebP一括変換
for img in images/*.{jpg,png}; do
  cwebp -q 80 "$img" -o "${img%.*}.webp"
done

# srcset生成
npx sharp-cli resize 320,640,1024,1920 --format webp input.jpg
```

#### 実装パターン
```html
<picture>
  <source type="image/webp" srcset="
    image-320w.webp 320w,
    image-640w.webp 640w,
    image-1024w.webp 1024w
  ">
  <img src="image.jpg" alt="..." loading="lazy" width="1024" height="768">
</picture>
```

### JavaScript最適化

#### バンドル分割設定
```javascript
// webpack.config.js
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        priority: 10
      },
      common: {
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true
      }
    }
  }
}
```

#### 遅延読込
```javascript
// 条件付きインポート
const loadGallery = () => {
  if ('IntersectionObserver' in window) {
    import('./gallery.js').then(module => {
      module.initGallery();
    });
  }
};
```

## 自動テストスクリプト

### Lighthouse CI設定
```yaml
# .lighthouserc.yml
ci:
  collect:
    url:
      - https://jprep-benesse-kids.jp
    numberOfRuns: 3
  assert:
    assertions:
      first-contentful-paint:
        - error
        - maxNumericValue: 2000
      largest-contentful-paint:
        - error
        - maxNumericValue: 2500
      cumulative-layout-shift:
        - error
        - maxNumericValue: 0.1
      total-blocking-time:
        - error
        - maxNumericValue: 300
  upload:
    target: temporary-public-storage
```

### AXE自動テスト
```javascript
// axe-test.js
const { AxePuppeteer } = require('@axe-core/puppeteer');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://jprep-benesse-kids.jp');
  
  const results = await new AxePuppeteer(page)
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();
  
  if (results.violations.length > 0) {
    console.error('Accessibility violations found:', results.violations);
    process.exit(1);
  }
  
  await browser.close();
})();
```

### パフォーマンス監視
```javascript
// performance-monitor.js
const perfData = performance.getEntriesByType('navigation')[0];

const metrics = {
  domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
  loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
  domInteractive: perfData.domInteractive,
  firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime,
  firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime
};

// GA4に送信
gtag('event', 'performance_metrics', metrics);
```

## チェックリストまとめ

### リリース前必須確認

1. **アクセシビリティ**
   - [ ] AXE検証：エラー0件
   - [ ] キーボード操作：全機能動作
   - [ ] スクリーンリーダー：主要要素読み上げ

2. **パフォーマンス**
   - [ ] Lighthouse Performance：≥90
   - [ ] LCP：<2.5秒
   - [ ] 画像：WebP変換済み

3. **クロスブラウザ**
   - [ ] Chrome最新
   - [ ] Safari最新
   - [ ] Firefox最新
   - [ ] Edge最新
   - [ ] iOS Safari
   - [ ] Android Chrome

4. **レスポンシブ**
   - [ ] 375px（iPhone SE）
   - [ ] 768px（iPad）
   - [ ] 1024px（Desktop）
   - [ ] 1920px（Full HD）