# AiBoO コンポーネント構成

## ディレクトリ構造

```
/src/app/components/
├── AIBoO.tsx                  # メインアプリケーションコンポーネント
├── AIBoOCharacter.tsx         # AIBoOロボットキャラクター（統合版）
├── Logo.tsx                   # アプリケーションロゴ
│
├── Dashboard.tsx              # ダッシュボードページ
├── FileUpload.tsx             # ファイル投入ページ
├── FileView.tsx               # ファイル閲覧ページ
├── AITemplate.tsx             # AIテンプレートページ
├── Contact.tsx                # お問合せページ
├── Settings.tsx               # 設定ページ
│
├── FileUploadArea.tsx         # ファイルアップロード共通コンポーネント
├── CompanyInfoForm.tsx        # 法人情報フォーム
├── TemplateWizard.tsx         # テンプレート作成ウィザード
│
├── figma/                     # Figmaインポート用コンポーネント
│   └── ImageWithFallback.tsx
│
└── ui/                        # UI共通コンポーネント（shadcn/ui）
    ├── accordion.tsx
    ├── alert-dialog.tsx
    ├── button.tsx
    ├── card.tsx
    ├── checkbox.tsx
    ├── dialog.tsx
    ├── input.tsx
    ├── select.tsx
    ├── table.tsx
    ├── tabs.tsx
    └── ... (その他shadcn/uiコンポーネント)
```

## 主要コンポーネント

### AIBoO.tsx
- アプリケーションのルートコンポーネント
- ページルーティング管理
- サイドバーメニュー
- ユーザー認証状態管理
- 入力完了度の状態管理（completionRate）

### AIBoOCharacter.tsx
**統合されたキャラクターコンポーネント**

#### Props:
- `withCape?: boolean` - マントの表示
- `hidePointer?: boolean` - 指示棒を非表示
- `mood?: 'happy' | 'neutral' | 'angry'` - 表情
- `pose?: 'standing' | 'flying' | 'reading'` - 姿勢
- `size?: number` - サイズ（デフォルト: 136）

#### 使用例:
```tsx
// サイドバー（通常姿勢、表情変化）
<AIBoOCharacter mood={getAIBoOMood()} hidePointer />

// ダッシュボード（小サイズ）
<AIBoOCharacter mood={status.mood} hidePointer />

// AIテンプレート（飛行姿勢）
<AIBoOCharacter pose="flying" size={136} />

// ファイルアップロード（読書姿勢、大サイズ）
<AIBoOCharacter pose="reading" size={384} />
```

### ページコンポーネント

#### Dashboard.tsx
- ダッシュボード画面
- 入力完了度表示
- クイックアクション
- 最近のアクティビティ
- ヒント＆おすすめ

#### FileUpload.tsx
- ファイル投入画面
- ドラッグ&ドロップアップロード
- URLからのインポート
- AI解析アニメーション（読書姿勢のAIBoO）

#### FileView.tsx
- ファイル閲覧画面
- データテーブル
- 検索・フィルタリング機能

#### AITemplate.tsx
- AIテンプレート画面
- 提案書・見積書・請求書作成
- 競合分析
- 飛行アニメーション（飛行姿勢のAIBoO）

#### Settings.tsx
- 設定画面
- あなたの情報（法人情報管理）
- AIテンプレート設定
- アカウント設定
- 通知設定
- セキュリティ設定

#### Contact.tsx
- お問合せ画面
- フォーム送信

### 共通コンポーネント

#### FileUploadArea.tsx
**統一されたファイルアップロードエリア**
- ドラッグ&ドロップ対応
- ファイル選択
- URLペースト機能

#### CompanyInfoForm.tsx
法人情報の詳細フォーム（10セクション）:
1. 履歴事項証明書
2. 定款
3. 会社案内
4. 決算書
5. 返済表
6. 賃金台帳
7. 社員名簿
8. 商品カタログ
9. 商品単価表
10. URL情報

#### TemplateWizard.tsx
5ステップの対話型ウィザード:
1. 基本情報
2. 参照データ
3. 出力形式
4. 作成指示
5. 表示設定

## リファクタリング履歴

### 2026年3月20日
1. **不要ファイルの削除**
   - `AIBoO_mock.tsx` - 使用されていないモックコンポーネント

2. **キャラクターコンポーネントの統合**
   - `FlyingAIBoOCharacter.tsx` → `AIBoOCharacter.tsx` (pose="flying")
   - `ReadingAIBoOCharacter.tsx` → `AIBoOCharacter.tsx` (pose="reading")
   - 3つのキャラクターコンポーネントを1つに統合
   - プロップスで姿勢を制御

3. **メリット**
   - コードの重複を削減
   - メンテナンス性の向上
   - 一貫性のあるAPI
   - グラデーション定義の共有

## 状態管理

### グローバル状態（AIBoO.tsx）
- `currentPage`: 現在のページ
- `completionRate`: 入力完了度（0-100）
- `isLoggedIn`: ログイン状態
- `selectedTemplate`: 選択中のテンプレート
- `selectedSetting`: 選択中の設定

### 入力完了度による表示制御
```typescript
const getAIBoOMood = (): 'happy' | 'neutral' | 'angry' => {
  if (completionRate <= 50) return 'angry';
  if (completionRate <= 80) return 'neutral';
  return 'happy';
};
```

## スタイリング

### Tailwind CSS v4
- インラインクラスでスタイリング
- `/src/styles/theme.css` でトークン管理
- カスタムアニメーション（aiboo-float, animate-pulse等）

### カスタムアニメーション
- `aiboo-float`: キャラクターの浮遊アニメーション
- `aiboo-flying-hero-side`: 飛行アニメーション
- `aiboo-jump-in`: ジャンプインアニメーション
- `sweat-drop-1`, `sweat-drop-2`: 汗のアニメーション
- `reading-status-light`: 読書中のステータスライト

## 今後の改善案

1. **型定義の分離**
   - `types/`ディレクトリを作成
   - 共通の型定義を集約

2. **カスタムフックの抽出**
   - `hooks/`ディレクトリを作成
   - ファイルアップロードロジック
   - フィルタリングロジック

3. **定数の管理**
   - `constants/`ディレクトリを作成
   - モックデータ
   - 設定値

4. **テストの追加**
   - 主要コンポーネントのユニットテスト
   - インテグレーションテスト
