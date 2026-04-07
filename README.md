# satoclinic_202603

佐藤医院サイトの静的HTML一式です。

## 構成

- `index.html`: トップページ（ヒーローカルーセルあり）
- `info.html`: お知らせ
- `details.html`: 診療内容
- `about.html`: 当院について
- `access.html`: 診療時間・所在地
- `faq.html`: よくある質問
- `reservation.html`: Web予約案内ページ
- `style.css`: 全ページ共通スタイル
- `common.js`: 全ページ共通スクリプト
  - ハンバーガーメニュー
  - フローティング予約バナー表示制御
- `image/`: 画像アセット

## フローティングバナー

- 対象ページ: `index.html`, `about.html`, `access.html`, `details.html`, `faq.html`, `info.html`
- 画像: `image/Attention.png`
- リンク先: `reservation.html`
- 表示条件: スクロール量 `360px` 以上で表示
- 閉じる操作: 右上 `×` で非表示（当該ページ表示中は再表示しない）
- 表示位置:
  - PC: 画面右下
  - SP: 画面下中央

## 補足

- 文字コードは UTF-8（BOMなし）で管理
- ページ固有スクリプト:
  - `index.html`: ヒーローカルーセル
  - `about.html`: アコーディオン（医院の理念・方針）
