import { Upload, FileText, Download, ChevronRight, Eye, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast, Toaster } from 'sonner';
import { FileUploadArea } from './FileUploadArea';
import { AIBoOCharacter } from './AIBoOCharacter';

type TemplateType = 'proposal' | 'estimate' | 'invoice' | 'competitor' | null;

interface CreatedFile {
  name: string;
  type: string;
  summary: string;
  content: string;
}

interface FormData {
  recipient: string;
  recipientDepartment: string;
  creator: string;
  company: string;
  title: string;
  titleOption: 'custom' | 'auto';
  format: string;
  formatOption: 'custom' | 'auto';
  notes: string;
  date: string;
}

const templateConfig = {
  proposal: {
    title: '提案書をつくる',
    requiredFiles: ['見積書', '取引先情報'],
    description: '登録済みの情報から提案書を作成します'
  },
  estimate: {
    title: '見積書をつくる',
    requiredFiles: ['取引先情報', '商品情報'],
    description: '登録済みの情報から見積書を作成します'
  },
  invoice: {
    title: '請求書をつくる',
    requiredFiles: ['見積書', '納品書'],
    description: '登録済みの情報から請求書を作成します'
  },
  competitor: {
    title: '競合の動きを知る',
    requiredFiles: ['市場レポート', '競合情報'],
    description: '登録済みの情報から競合分析レポートを作成します'
  }
};

export function AITemplate({ selectedTemplate }: { selectedTemplate: TemplateType }) {
  const [missingFiles, setMissingFiles] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [createdFile, setCreatedFile] = useState<CreatedFile | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [processingSteps, setProcessingSteps] = useState<string[]>([]);
  const [showProcessingWindow, setShowProcessingWindow] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    recipient: '',
    recipientDepartment: '',
    creator: '山田 太郎',
    company: '株式会社サンプル',
    title: '',
    titleOption: 'auto',
    format: '',
    formatOption: 'auto',
    notes: '',
    date: new Date().toISOString().split('T')[0]
  });

  const checkRequiredFiles = async (template: TemplateType) => {
    if (!template) return;

    setIsProcessing(true);
    
    const toastId = toast.loading('AI起動中...', {
      style: {
        fontSize: '16px',
        padding: '16px 24px',
      }
    });

    await new Promise(resolve => setTimeout(resolve, 3000));

    toast.dismiss(toastId);

    const config = templateConfig[template];
    const missing = config.requiredFiles.filter(file => !uploadedFiles.includes(file));
    
    setMissingFiles(missing);
    setIsProcessing(false);
  };

  const handleFileUpload = async (file: File) => {
    if (!selectedTemplate) return;

    const config = templateConfig[selectedTemplate];
    const missingFile = missingFiles[0];
    
    if (missingFile) {
      const toastId = toast.loading('AI起動中...', {
        style: {
          fontSize: '16px',
          padding: '16px 24px',
        }
      });

      await new Promise(resolve => setTimeout(resolve, 3000));
      toast.dismiss(toastId);

      setUploadedFiles([...uploadedFiles, missingFile]);
      const newMissing = missingFiles.filter(f => f !== missingFile);
      setMissingFiles(newMissing);

      if (newMissing.length === 0) {
        // All files uploaded, create document
        await createDocument();
      }
    }
  };

  const handleUrlUpload = async (url: string) => {
    if (!selectedTemplate) return;

    const config = templateConfig[selectedTemplate];
    const missingFile = missingFiles[0];
    
    if (missingFile) {
      const toastId = toast.loading('AI起動中...', {
        style: {
          fontSize: '16px',
          padding: '16px 24px',
        }
      });

      await new Promise(resolve => setTimeout(resolve, 3000));
      toast.dismiss(toastId);

      setUploadedFiles([...uploadedFiles, missingFile]);
      const newMissing = missingFiles.filter(f => f !== missingFile);
      setMissingFiles(newMissing);

      if (newMissing.length === 0) {
        // All files uploaded, create document
        await createDocument();
      }
    }
  };

  const createDocument = async () => {
    if (!selectedTemplate) return;

    const toastId = toast.loading('AI起動中...', {
      style: {
        fontSize: '16px',
        padding: '16px 24px',
      }
    });

    await new Promise(resolve => setTimeout(resolve, 3000));
    toast.dismiss(toastId);

    const config = templateConfig[selectedTemplate];
    
    // テンプレートタイプに応じた実際の文書内容を生成
    let documentContent = '';
    
    switch (selectedTemplate) {
      case 'proposal':
        documentContent = generateProposalContent();
        break;
      case 'estimate':
        documentContent = generateEstimateContent();
        break;
      case 'invoice':
        documentContent = generateInvoiceContent();
        break;
      case 'competitor':
        documentContent = generateCompetitorContent();
        break;
      default:
        documentContent = '文書内容';
    }

    const mockFile: CreatedFile = {
      name: `${config.title.replace('をつくる', '').replace('を知る', '分析レポート')}_${new Date().toLocaleDateString('ja-JP').replace(/\//g, '')}.pdf`,
      type: config.title.replace('をつくる', '').replace('競合の動きを知る', '競合分析レポート'),
      summary: `AIが自動生成した${config.title.replace('をつくる', '').replace('競合の動きを知る', '競合分析レポート')}です。登録済みの情報を基に、最適な内容で作成されています。`,
      content: documentContent
    };

    setCreatedFile(mockFile);
    toast.success('作成しました', {
      duration: 3000,
      style: {
        fontSize: '16px',
        padding: '16px 24px',
      }
    });
  };

  // 提案書の内容を生成
  const generateProposalContent = () => {
    return `株式会社サンプル 御中

提案書

令和${new Date().getFullYear() - 2018}年${new Date().getMonth() + 1}月${new Date().getDate()}日
株式会社テクノロジーソリューションズ
営業部 山田 太郎

件名：基幹システム刷新に関するご提案

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【1. 提案の背景と目的】

貴社の既存基幹システムは導入から10年以上が経過しており、以下の課題が顕在化しております。

• システムの老朽化による保守コストの増加
• 新技術への対応困難
• 業務プロセスの変化への柔軟な対応が困難
• データ活用の制約

本提案では、これらの課題を解決し、貴社の更なる成長を支援するための基幹システム刷新をご提案いたします。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【2. 提案内容】

2.1 システム概要
• クラウドベースの基幹システム構築
• マイクロサービスアーキテクチャの採用
• AI/機械学習機能の実装
• モバイル対応

2.2 主要機能
• 販売管理システム
• 在庫管理システム
• 顧客管理（CRM）
• 経理・会計システム
• 人事・勤怠管理
• データ分析・BI機能

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【3. 導入スケジュール】

第1フェーズ（3ヶ月）：要件定義・基本設計
第2フェーズ（4ヶ月）：詳細設計・開発
第3フェーズ（2ヶ月）：テスト・移行準備
第4フェーズ（1ヶ月）：本番移行・運用開始

合計：10ヶ月

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【4. 費用概算】

項目別費用：
• 要件定義・設計：800万円
• 開発費用：2,200万円
• テスト・移行：500万円
• 研修・サポート：300万円

合計：3,800万円（税別）

━━━━━━━━━━━━━━━━━━━━━━━��━━━━

【5. 期待効果】

• 業務効率化��作業時間30%削減
• コスト削減：年間保守費40%削減
• データ活用：リアルタイム分析による意思決定の高速化
• セキュリティ強化：最新のセキュリティ対策

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【6. 当社の強み】

• 同業界での導入実績：50社以上
• 専門技術者：150名以上
• 24時間365日サポート体制
• ISO27001認証取得

本提案についてご不明な点がございましたら、
お気軽にお問い合わせください。

以上`;
  };

  // 見積書の内容を生成
  const generateEstimateContent = () => {
    return `御見積書

株式会社サンプル 御中

下記の通りお見積申し上げます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

見積番号：EST-2026-0213-001
見積日：令和${new Date().getFullYear() - 2018}年${new Date().getMonth() + 1}月${new Date().getDate()}日
有効期限：令和${new Date().getFullYear() - 2018}年${new Date().getMonth() + 2}月${new Date().getDate()}日

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

件名：基幹システム開発業務

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お見積金額】

合計金額：¥41,800,000（税込）
（内消費税：¥3,800,000）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【明細】

■ 1. 要件定義・基本設計
┣ 業務分析・要件定義　　　　　¥3,000,000
┣ 基本設計書作成　　　　　　　¥2,500,000
┣ プロジェクト管理費　　　　　¥1,500,000
┗ 小計　　　　　　　　　　　　¥7,000,000

■ 2. 詳細設計・開発
┣ 詳細設計　　　　　　　　　　¥4,000,000
┣ フロントエンド開発　　　　　¥5,000,000
┣ バックエンド開発　　　　　　¥8,000,000
┣ データベース設計・構築　　　¥3,000,000
┣ API開発　　　　　　　　　　 ¥2,000,000
┗ 小計　　　　　　　　　　　 ¥22,000,000

■ 3. テスト・品質管理
┣ 単体テスト　　　　　　　　　¥1,500,000
┣ 結合テスト　　　　　　　　　¥2,000,000
┣ システムテスト　　　　　　　¥1,500,000
┗ 小計　　　　　　　　　　　　¥5,000,000

■ 4. 移行・導入支援
┣ データ移行作業　　　　　　　¥2,000,000
┣ 環境構築　　　　　　　　　　¥1,000,000
┣ 運用マニュアル作成　　　　　¥800,000
┗ 小計　　　　　　　　　　　　¥3,800,000

■ 5. 研修・サポート
┣ 管理者研修（2日間）　　　　 ¥500,000
┣ ユーザー研修（3日間）　　　 ¥800,000
┣ 初期サポート（3ヶ月）　　　 ¥1,700,000
┗ 小計　　　　　　　　　　　　¥3,000,000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

税抜合計：　　　　　　　　　 ¥38,000,000
消費税（10%）：　　　　　　　¥3,800,000
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
税込合計：　　　　　　　　　 ¥41,800,000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お支払条件】
• 契約時：30%（¥12,540,000）
• 開発完了時：50%（¥20,900,000）
• 検収完了時：20%（¥8,360,000）

【納期】
契約締結後10ヶ月

【備考】
• 本見積は要件定義完了後、内容の変更が生じる場合がございます
• 追加機能のご要望は別途お見積りいたします
• 保守費用は別途ご相談させていただきます

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

株式会社テクノロジーソリューションズ
〒100-0001 東京都千代田区千代田1-1-1
TEL: 03-1234-5678
Email: sales@techsol.co.jp
担当：営業部 山田 太郎

以上`;
  };

  // 請求書の内容を生成
  const generateInvoiceContent = () => {
    return `請求書

株式会社サンプル 御中

下記の通りご請求申し上げます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

請求書番号：INV-2026-0213-001
請求日：令和${new Date().getFullYear() - 2018}年${new Date().getMonth() + 1}月${new Date().getDate()}日
お支払期限：令和${new Date().getFullYear() - 2018}年${new Date().getMonth() + 1}月末日

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【ご請求金額】

¥12,540,000（税込）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【請求明細】

件名：基幹システム開発業務（第1回目）
契約番号：CON-2025-1201-001

■ 着手金（契約金額の30%）

契約金額：　　　　　　　　　¥41,800,000
今回請求額（30%）：　　　　 ¥12,540,000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

内訳：
┣ 要件定義・基本設計費用　　　¥7,000,000
┣ 開発環境構築費用　　　　　　¥3,000,000
┣ プロジェクト管理費　　　　　¥1,400,000
┗ 小計　　　　　　　　　　　 ¥11,400,000

消費税（10%）：　　　　　　　¥1,140,000
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
合計：　　　　　　　　　　　 ¥12,540,000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お支払方法】

お振込先：
銀行名：みずほ銀行 東京支店
口座種別：普通預金
口座番号：1234567
口座名義：カ）テクノロジーソリューションズ

※ お振込手数料は貴社にてご負担くださいますようお願い申し上げます
※ 領収書が必要な場合は別途ご連絡ください

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【今後の請求予定】

第2回請求（開発完了時）：¥20,900,000
第3回請求（検収完了時）：¥8,360,000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【プロジェクト進捗状況】

現在のフェーズ：要件定義・基本設計
進捗率：10%
次回マイルストーン：基本設計完了（3ヶ月後）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

株式会社テクノロジーソリューションズ
〒100-0001 東京都千代田区千代田1-1-1
TEL: 03-1234-5678
FAX: 03-1234-5679
Email: accounting@techsol.co.jp

登録番号：T1234567890123（適格請求書発行事業者）

担当：経理部 佐藤 花子

ご不明な点がございましたら、お気軽にお問い合わせください。

以上`;
  };

  // 競合分析レポートの内容を生成
  const generateCompetitorContent = () => {
    return `競合分析レポート

作成日：令和${new Date().getFullYear() - 2018}年${new Date().getMonth() + 1}月${new Date().getDate()}日
�����析期間：${new Date().getFullYear()}年${new Date().getMonth()}月〜${new Date().getMonth() + 1}月

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【エグゼクティブサマリー】

本レポートは、システム開発業界における主要競合3社の動向を分析したものです。
市場シェア、製品戦略、価格動向、顧客満足度を中心に調査を実施しました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【1. 市場概況】

■ 市場規模
• 国内システム開発市場：12.5兆円（前年比+3.2%）
• クラウド関連開発：3.8兆円（前年比+15.8%）
• AI/機械学習関連：1.2兆円（前年比+28.5%）

■ 成長分野
1. DX（デジタルトランスフォーメーション）支援
2. クラウドマイグレーション
3. AI/データ分析サービス
4. セキュリティ強化ソリューション

━━━━━━━━━━━━━━━━���━━━━━━━━━━━

【2. 主要競合分析】

■ A社（株式会社システムイノベーション）
┣ 市場シェア：18.5%（業界2位）
┣ 強み：大規模システム開発実績、金融業界に強み
┣ 弱み：中小企業向けサービスが手薄
┣ 価格帯：大規模案件中心（平均5,000万円〜）
┗ 最近の動向：AI開発部門を新設、人員を30%増強

■ B社（テクノロジーパートナーズ株式会社）
┣ ���場シェア：15.2%（業界3位）
┣ 強み：アジャイル発、スピード対応
┣ 弱み：大規模案件の実績不足
┣ 価格帯：中小規模中心（平均1,500万円〜）
┗ 最近の動向：ノーコード/ローコード開発サービス開始

■ C社（株式会社デジタルソリューションズ）
┣ 市場シェア：12.8%（業界4位）
┣ 強み：業界特化型ソリューション、医療・製造業に強み
┣ 弱み：汎用性��低さ
┣ 価格帯：業界平均（平均3,000万円〜）
┗ 最近の動向：海外展開を加速、東南アジアに拠点開設

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【3. 価格動向分析】

■ 平均単価推移
• 要件定義：800万円〜1,200万円
• 開発費用（中規模）：2,000万円〜3,500万円
• 保守費用（年間）：開発費の15〜20%

■ 価格競争の状況
競合各社とも品質重視の姿勢を維持しながら、
段階的な値下げ圧力が継続中。
特にクラウド開発分野で価格競争が激化。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【4. 技術トレンド】

最新技術の導入状況：
┣ AI/機械学習：A社（◎）、B社（○）、C社（○）
┣ クラウドネイティブ：A社（○）、B社（◎）、C社（△）
┣ マイクロサービス：A社（◎）、B社（◎）、C社（○）
┗ DevOps/CI/CD：A社（◎）、B社（◎）、C社（○）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【5. 顧客満足度】

顧客アンケート結果（5点満点）：
• A社：4.2点（技術力4.5、対応力3.8）
• B社：4.4点（技術力4.0、対応力4.7）
• C社：4.1点（技術力4.3、対応力3.9）
• 当社：4.3点（技術力4.4、対応力4.2）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【6. SWOT分析（当社）】

■ 強み（Strengths）
• バランスの取れた技術力と対応力
• 幅広い業界での実績
• 柔軟な価格設定

■ 弱み（Weaknesses）
• ブランド認知度がやや低い
• 大規模案件の実績が競合より少ない

■ 機会（Opportunities）
• DX需要の拡大
• 中堅企業のシステム刷新需要増加
• リモートワーク関連需要

■ 脅威（Threats）
• 価格競争の激化
• 優秀なエンジニアの獲得競争
• オフショア開発の増加

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【7. 戦略提言】

■ 短期施策（3ヶ月以内）
1. DX支援サービスのパッケージ化
2. 成功事例の積極的な発信
3. 中堅企業向けマーケティング強化

■ 中期施策（6ヶ月〜1年）
1. AI/データ分析サービスの拡充
2. パートナーエコシステムの構築
3. 技術者育成プログラムの強化

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【8. 結論】

競合環境は厳しさを増していますが、当社の強みを活かした
差別化戦略により、市場シェアの拡大が十分可能と考えます。

特に中堅企業向けDX支援と、迅速な対応力を武器とした
サービス展開が有効と判断されます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

本レポートに関するお問い合わせ：
マーケティング部 分析チーム
Email: marketing@techsol.co.jp

以上`;
  };

  const handleRecreate = () => {
    if (!prompt.trim()) {
      toast.error('プロンプトを入力してください', {
        duration: 2000,
        style: {
          fontSize: '16px',
          padding: '16px 24px',
        }
      });
      return;
    }

    createDocument();
    setPrompt('');
  };

  const handleFinish = () => {
    setCreatedFile(null);
    setMissingFiles([]);
    setUploadedFiles([]);
    setPrompt('');
    toast.success('終了しました', {
      duration: 2000,
      style: {
        fontSize: '16px',
        padding: '16px 24px',
      }
    });
  };

  const handleDownload = () => {
    toast.success('ダウンロードを開始しました', {
      duration: 2000,
      style: {
        fontSize: '16px',
        padding: '16px 24px',
      }
    });
  };

  // Preview Render Functions
  const renderProposalPreview = () => {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-sm space-y-6">
        {/* タイトルスライド */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-3">基幹システム刷新に関するご提案</h1>
          <p className="text-lg opacity-90">株式会社サンプル 御中</p>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm opacity-80">株式会社テクノロジーソリューションズ</p>
            <p className="text-sm opacity-80">令和{new Date().getFullYear() - 2018}年{new Date().getMonth() + 1}月{new Date().getDate()}日</p>
          </div>
        </div>

        {/* 提案の背景と目的 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
          <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
            <span className="bg-red-100 px-3 py-1 rounded-lg">01</span>
            提案の背景と目的
          </h2>
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              貴社の既存基幹システムは導入から10年以上が経過しており、以下の課題が顕在化しております。
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-700">• システムの老朽化</p>
                <p className="text-sm text-gray-600 mt-1">保守コストの増加</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-700">• 新技術への対応困難</p>
                <p className="text-sm text-gray-600 mt-1">技術的制約</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-700">• 業務プロセスの変化</p>
                <p className="text-sm text-gray-600 mt-1">柔軟な対応が困難</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-700">• データ活用の制約</p>
                <p className="text-sm text-gray-600 mt-1">分析基盤の不足</p>
              </div>
            </div>
          </div>
        </div>

        {/* 提案内容 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
            <span className="bg-blue-100 px-3 py-1 rounded-lg">02</span>
            提案内容
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-blue-700 bg-blue-50 px-3 py-2 rounded">システム概要</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▶</span>
                  <span>クラウドベースの基幹システム構築</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▶</span>
                  <span>マイクロサービスアーキテクチャの採用</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▶</span>
                  <span>AI/機械学習機能の実装</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▶</span>
                  <span>モバイル対応</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-blue-700 bg-blue-50 px-3 py-2 rounded">主要機能</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▶</span>
                  <span>販売管理システム</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▶</span>
                  <span>在庫管理システム</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▶</span>
                  <span>顧客管理（CRM）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▶</span>
                  <span>データ分析・BI機能</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 導入スケジュール */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
            <span className="bg-green-100 px-3 py-1 rounded-lg">03</span>
            導入スケジュール
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold min-w-[120px] text-center">Phase 1</div>
              <div className="flex-1 bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-green-700">要件定義・基本設計</p>
                <p className="text-sm text-gray-600">期間：3ヶ月</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold min-w-[120px] text-center">Phase 2</div>
              <div className="flex-1 bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-green-700">詳細設計・開発</p>
                <p className="text-sm text-gray-600">期間：4ヶ月</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold min-w-[120px] text-center">Phase 3</div>
              <div className="flex-1 bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-green-700">テスト・移行準備</p>
                <p className="text-sm text-gray-600">期間：2ヶ月</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold min-w-[120px] text-center">Phase 4</div>
              <div className="flex-1 bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-green-700">本番移行・運用開始</p>
                <p className="text-sm text-gray-600">期間：1ヶ月</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg mt-4">
              <p className="text-center font-bold text-lg text-gray-800">合計：10ヶ月</p>
            </div>
          </div>
        </div>

        {/* 費用概算 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center gap-2">
            <span className="bg-yellow-100 px-3 py-1 rounded-lg">04</span>
            費用概算
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-gray-600 text-sm mb-1">要件定義・設計</p>
              <p className="text-2xl font-bold text-yellow-700">800万円</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-gray-600 text-sm mb-1">開発費用</p>
              <p className="text-2xl font-bold text-yellow-700">2,200万円</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-gray-600 text-sm mb-1">テスト・移行</p>
              <p className="text-2xl font-bold text-yellow-700">500万円</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-gray-600 text-sm mb-1">研修・サポート</p>
              <p className="text-2xl font-bold text-yellow-700">300万円</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-lg mt-4">
            <p className="text-center text-xl font-bold">合計：3,800万円（税別）</p>
          </div>
        </div>

        {/* 期待効果 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
            <span className="bg-purple-100 px-3 py-1 rounded-lg">05</span>
            期待効果
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border-2 border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
              <p className="font-semibold text-purple-700">作業時間削減</p>
              <p className="text-sm text-gray-600 mt-1">業務効率化により実現</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border-2 border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <p className="font-semibold text-purple-700">保守費削減</p>
              <p className="text-sm text-gray-600 mt-1">年間コスト削減効果</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-lg border-2 border-blue-200">
              <div className="text-2xl font-bold text-blue-600 mb-2">リアルタイム</div>
              <p className="font-semibold text-blue-700">データ分析</p>
              <p className="text-sm text-gray-600 mt-1">意思決定の高速化</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-lg border-2 border-blue-200">
              <div className="text-2xl font-bold text-blue-600 mb-2">最新</div>
              <p className="font-semibold text-blue-700">セキュリティ</p>
              <p className="text-sm text-gray-600 mt-1">セキュリティ対策強化</p>
            </div>
          </div>
        </div>

        {/* 当社の強み */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-white text-indigo-600 px-3 py-1 rounded-lg">06</span>
            当���の��み
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="font-bold text-lg mb-1">50社以上</p>
              <p className="text-sm opacity-90">同業界での導入実績</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="font-bold text-lg mb-1">150名以上</p>
              <p className="text-sm opacity-90">専門技術者</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="font-bold text-lg mb-1">24時間365日</p>
              <p className="text-sm opacity-90">サポート体制</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="font-bold text-lg mb-1">ISO27001</p>
              <p className="text-sm opacity-90">認証取得</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderEstimatePreview = () => {
    return (
      <div className="bg-white p-8 rounded shadow-sm">
        {/* Excel風のヘッダー */}
        <div className="border-b-2 border-gray-400 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-center mb-4">御見積書</h1>
          <div className="text-right text-sm mb-4">
            <p>株式会社サンプル 御中</p>
          </div>
        </div>

        {/* 見積情報テーブル */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <tbody>
              <tr>
                <td className="border border-gray-400 bg-gray-200 px-3 py-2 font-semibold w-32">見積番号</td>
                <td className="border border-gray-400 px-3 py-2">EST-2026-0213-001</td>
                <td className="border border-gray-400 bg-gray-200 px-3 py-2 font-semibold w-32">見積日</td>
                <td className="border border-gray-400 px-3 py-2">令和{new Date().getFullYear() - 2018}年{new Date().getMonth() + 1}月{new Date().getDate()}日</td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-200 px-3 py-2 font-semibold">件名</td>
                <td className="border border-gray-400 px-3 py-2" colSpan={3}>基幹システム開発業務</td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-200 px-3 py-2 font-semibold">有効期限</td>
                <td className="border border-gray-400 px-3 py-2" colSpan={3}>令和{new Date().getFullYear() - 2018}年{new Date().getMonth() + 2}月{new Date().getDate()}日</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 見積金額 */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400">
            <tbody>
              <tr>
                <td className="border border-gray-400 bg-blue-100 px-4 py-3 font-bold text-lg text-center" colSpan={2}>
                  お見積金額
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-yellow-50 px-4 py-4 text-center font-bold text-2xl text-red-600" colSpan={2}>
                  ¥41,800,000（税込）
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 text-right text-sm text-gray-600" colSpan={2}>
                  （内消費税：¥3,800,000）
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 明細テーブル */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <thead>
              <tr className="bg-blue-200">
                <th className="border border-gray-400 px-3 py-2 text-left font-bold">項目</th>
                <th className="border border-gray-400 px-3 py-2 text-left font-bold">詳細</th>
                <th className="border border-gray-400 px-3 py-2 text-right font-bold w-32">金額（円）</th>
              </tr>
            </thead>
            <tbody>
              {/* 1. 要件定義・基本設計 */}
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-3 py-2 font-semibold" colSpan={3}>1. 要件定義・基本設計</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">業務分析・要件定義</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥3,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">基本設計書作成</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥2,500,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">プロジェクト管理費</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥1,500,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-400 px-3 py-2" colSpan={2}><span className="font-semibold">小計</span></td>
                <td className="border border-gray-400 px-3 py-2 text-right font-semibold">¥7,000,000</td>
              </tr>

              {/* 2. 詳細設計・開発 */}
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-3 py-2 font-semibold" colSpan={3}>2. 詳細設計・開発</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">詳細設計</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥4,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">フロントエンド開発</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥5,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">バックエンド開発</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥8,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">データベース設計・構築</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥3,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">API開発</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥2,000,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-400 px-3 py-2" colSpan={2}><span className="font-semibold">小計</span></td>
                <td className="border border-gray-400 px-3 py-2 text-right font-semibold">¥22,000,000</td>
              </tr>

              {/* 3. テスト・品質管理 */}
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-3 py-2 font-semibold" colSpan={3}>3. テスト・品質管理</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">単体テスト</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥1,500,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">結合テスト</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥2,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">システムテスト</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥1,500,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-400 px-3 py-2" colSpan={2}><span className="font-semibold">小計</span></td>
                <td className="border border-gray-400 px-3 py-2 text-right font-semibold">¥5,000,000</td>
              </tr>

              {/* 4. 移行・導入支援 */}
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-3 py-2 font-semibold" colSpan={3}>4. 移行・導入支援</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">データ移行作業</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥2,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">環境構築</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥1,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">運用マニュアル作成</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥800,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-400 px-3 py-2" colSpan={2}><span className="font-semibold">小計</span></td>
                <td className="border border-gray-400 px-3 py-2 text-right font-semibold">¥3,800,000</td>
              </tr>

              {/* 5. 研修・サポート */}
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-3 py-2 font-semibold" colSpan={3}>5. 研修・サポート</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">管理者研修（2日間）</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥500,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">ユーザー研修（3日間）</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥800,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2"></td>
                <td className="border border-gray-400 px-3 py-2">初期サポート（3ヶ月）</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥1,700,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-400 px-3 py-2" colSpan={2}><span className="font-semibold">小計</span></td>
                <td className="border border-gray-400 px-3 py-2 text-right font-semibold">¥3,000,000</td>
              </tr>

              {/* 合計 */}
              <tr className="bg-blue-100">
                <td className="border border-gray-400 px-3 py-3 font-bold" colSpan={2}>税抜合計</td>
                <td className="border border-gray-400 px-3 py-3 text-right font-bold text-lg">¥38,000,000</td>
              </tr>
              <tr className="bg-blue-100">
                <td className="border border-gray-400 px-3 py-3 font-bold" colSpan={2}>消費税（10%）</td>
                <td className="border border-gray-400 px-3 py-3 text-right font-bold text-lg">¥3,800,000</td>
              </tr>
              <tr className="bg-blue-200">
                <td className="border border-gray-400 px-3 py-4 font-bold text-lg" colSpan={2}>税込合計</td>
                <td className="border border-gray-400 px-3 py-4 text-right font-bold text-xl text-red-600">¥41,800,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* お支払条件・納期 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <table className="w-full border-collapse border border-gray-400 text-sm">
              <thead>
                <tr className="bg-green-100">
                  <th className="border border-gray-400 px-3 py-2 font-bold text-left" colSpan={2}>お支払条件</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-3 py-2 bg-gray-50">契約時（30%）</td>
                  <td className="border border-gray-400 px-3 py-2 text-right">¥12,540,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-3 py-2 bg-gray-50">開発完了時（50%）</td>
                  <td className="border border-gray-400 px-3 py-2 text-right">¥20,900,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-3 py-2 bg-gray-50">検収完了時（20%）</td>
                  <td className="border border-gray-400 px-3 py-2 text-right">¥8,360,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="w-full border-collapse border border-gray-400 text-sm">
              <thead>
                <tr className="bg-orange-100">
                  <th className="border border-gray-400 px-3 py-2 font-bold text-left">納期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-3 py-2">契約締結後10ヶ月</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 備考 */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <thead>
              <tr className="bg-yellow-100">
                <th className="border border-gray-400 px-3 py-2 font-bold text-left">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>本見積は要件定義完了後、内容の変更が生じる場合がございます</li>
                    <li>追加機能のご要望は別途お見積りいたします</li>
                    <li>保守費用は別途ご相談させていただきます</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* フッター */}
        <div className="text-sm text-gray-700 text-center pt-4 border-t border-gray-300">
          <p className="font-semibold">株式会社テクノロジーソリューションズ</p>
          <p>〒100-0001 東京都千代田区千代田1-1-1</p>
          <p>TEL: 03-1234-5678 / Email: sales@techsol.co.jp</p>
          <p className="mt-2">担当：営業部 山田 太郎</p>
        </div>
      </div>
    );
  };

  const renderInvoicePreview = () => {
    return (
      <div className="bg-white p-8 rounded shadow-sm">
        {/* Excel風のヘッダー */}
        <div className="border-b-2 border-gray-400 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-center mb-4">請求書</h1>
          <div className="text-right text-sm mb-4">
            <p>株式会社サンプル 御中</p>
          </div>
        </div>

        {/* 請求書情報テーブル */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <tbody>
              <tr>
                <td className="border border-gray-400 bg-gray-200 px-3 py-2 font-semibold w-32">請求書番号</td>
                <td className="border border-gray-400 px-3 py-2">INV-2026-0213-001</td>
                <td className="border border-gray-400 bg-gray-200 px-3 py-2 font-semibold w-32">請求日</td>
                <td className="border border-gray-400 px-3 py-2">令和{new Date().getFullYear() - 2018}年{new Date().getMonth() + 1}月{new Date().getDate()}日</td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-200 px-3 py-2 font-semibold">お支払期限</td>
                <td className="border border-gray-400 px-3 py-2" colSpan={3}>令和{new Date().getFullYear() - 2018}年{new Date().getMonth() + 1}月末日</td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-200 px-3 py-2 font-semibold">件名</td>
                <td className="border border-gray-400 px-3 py-2" colSpan={3}>基幹システム開発業務（第1回目）</td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-200 px-3 py-2 font-semibold">契約番号</td>
                <td className="border border-gray-400 px-3 py-2" colSpan={3}>CON-2025-1201-001</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ご請求金額 */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400">
            <tbody>
              <tr>
                <td className="border border-gray-400 bg-red-100 px-4 py-3 font-bold text-lg text-center" colSpan={2}>
                  ご請求金額
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-yellow-50 px-4 py-5 text-center font-bold text-3xl text-red-600" colSpan={2}>
                  ¥12,540,000（税込）
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 請求明細 */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <thead>
              <tr className="bg-blue-200">
                <th className="border border-gray-400 px-3 py-2 text-left font-bold" colSpan={2}>請求明細</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-3 py-2 font-semibold" colSpan={2}>着手金（契約金額の30%）</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">契約金額</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥41,800,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">今回請求額（30%）</td>
                <td className="border border-gray-400 px-3 py-2 text-right font-semibold">¥12,540,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 内訳 */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <thead>
              <tr className="bg-green-200">
                <th className="border border-gray-400 px-3 py-2 text-left font-bold">内訳</th>
                <th className="border border-gray-400 px-3 py-2 text-right font-bold w-32">金額（円）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-2">要件定義・基本設計費用</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥7,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2">開発環境構築費用</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥3,000,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2">プロジェクト管理費</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥1,400,000</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-3 py-2 font-semibold">小計</td>
                <td className="border border-gray-400 px-3 py-2 text-right font-semibold">¥11,400,000</td>
              </tr>
              <tr className="bg-blue-100">
                <td className="border border-gray-400 px-3 py-2 font-bold">消費税（10%）</td>
                <td className="border border-gray-400 px-3 py-2 text-right font-bold">¥1,140,000</td>
              </tr>
              <tr className="bg-blue-200">
                <td className="border border-gray-400 px-3 py-3 font-bold text-lg">合計</td>
                <td className="border border-gray-400 px-3 py-3 text-right font-bold text-xl text-red-600">¥12,540,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* お支払方法 */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <thead>
              <tr className="bg-purple-200">
                <th className="border border-gray-400 px-3 py-2 text-left font-bold" colSpan={2}>お支払方法</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50 w-32">銀行名</td>
                <td className="border border-gray-400 px-3 py-2">みずほ銀行 東京支店</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">口座種別</td>
                <td className="border border-gray-400 px-3 py-2">��通預金</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">口座番号</td>
                <td className="border border-gray-400 px-3 py-2">1234567</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">口座名義</td>
                <td className="border border-gray-400 px-3 py-2">カ）テクノロジーソリューションズ</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2" colSpan={2}>
                  <p className="text-xs text-gray-600">※ お振込手数料は貴社にてご負担くださいますようお願い申し上げます</p>
                  <p className="text-xs text-gray-600">※ 領収書が必要な場合は別途ご連絡��ださい</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 今後の請求予定 */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <thead>
              <tr className="bg-orange-200">
                <th className="border border-gray-400 px-3 py-2 text-left font-bold" colSpan={2}>今後の請求予定</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">第2回請求（開発完了時）</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥20,900,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">第3回請求（検収完了時）</td>
                <td className="border border-gray-400 px-3 py-2 text-right">¥8,360,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* プロジェクト進捗状況 */}
        <div className="mb-6">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <thead>
              <tr className="bg-teal-200">
                <th className="border border-gray-400 px-3 py-2 text-left font-bold" colSpan={2}>プロジェクト進捗状況</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50 w-48">現在のフェーズ</td>
                <td className="border border-gray-400 px-3 py-2">要件定義・基本設計</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">進捗率</td>
                <td className="border border-gray-400 px-3 py-2">10%</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">次回マイルストーン</td>
                <td className="border border-gray-400 px-3 py-2">基本設計完了（3ヶ月後）</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* フッター */}
        <div className="border-t-2 border-gray-400 pt-4">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <tbody>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 px-3 py-2 font-semibold text-center" colSpan={2}>
                  株式会社テクノロジーソリューションズ
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50 w-32">所在地</td>
                <td className="border border-gray-400 px-3 py-2">〒100-0001 東京都千代田区千代田1-1-1</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">TEL / FAX</td>
                <td className="border border-gray-400 px-3 py-2">TEL: 03-1234-5678 / FAX: 03-1234-5679</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">Email</td>
                <td className="border border-gray-400 px-3 py-2">accounting@techsol.co.jp</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">登録番号</td>
                <td className="border border-gray-400 px-3 py-2">T1234567890123（適格請求書発行事業者）</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 bg-gray-50">担当</td>
                <td className="border border-gray-400 px-3 py-2">経理部 佐藤 花子</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderCompetitorPreview = () => {
    return (
      <div className="bg-white p-8 rounded shadow-sm">
        <pre className="text-sm text-[rgba(0,0,0,0.88)] whitespace-pre-wrap font-sans leading-relaxed">
          {generateCompetitorContent()}
        </pre>
      </div>
    );
  };

  // Initialize when template changes
  useEffect(() => {
    if (selectedTemplate) {
      setCreatedFile(null);
      setUploadedFiles([]);
      setMissingFiles([]);
      setShowForm(true);
    }
  }, [selectedTemplate]);
  
  const handleStartCreation = async () => {
    if (!selectedTemplate) return;
    
    // フォームを非表示にして処理ウィンドウを表示
    setShowForm(false);
    setShowProcessingWindow(true);
    setProcessingSteps([]);
    
    const config = templateConfig[selectedTemplate];
    const steps: string[] = [];
    
    // ステ���プ1
    steps.push('この処理には「仕切価格表」が必要です');
    setProcessingSteps([...steps]);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // ステップ2
    steps.push('2025年12月の仕切価格を発見しました');
    setProcessingSteps([...steps]);
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // ステップ3
    steps.push('この処理には「ジェイワンのロゴマーク」が必要です');
    setProcessingSteps([...steps]);
    await new Promise(resolve => setTimeout(resolve, 900));
    
    // ステップ4
    steps.push('見積書から複数のロゴマークデータをみつけました');
    setProcessingSteps([...steps]);
    await new Promise(resolve => setTimeout(resolve, 1100));
    
    // ステップ5
    steps.push('ロゴデータにピクチャラベルをつけて保存しました');
    setProcessingSteps([...steps]);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // ステップ6
    steps.push('山田社長の名刺が見つかりません');
    setProcessingSteps([...steps]);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // ステップ7
    steps.push('仕入先の見積書が見つかりません');
    setProcessingSteps([...steps]);
    await new Promise(resolve => setTimeout(resolve, 900));
    
    // ステップ8
    steps.push('出力フォーマットにパラメーターを設定しています');
    setProcessingSteps([...steps]);
    await new Promise(resolve => setTimeout(resolve, 1300));
    
    // ステップ9
    steps.push('エグゼクティブサマリーを作成しています');
    setProcessingSteps([...steps]);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // ターミナル画面を残したままモーダルを表示
    setShowCompletionModal(true);
  };

  if (!selectedTemplate) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-xl text-gray-500">左のメニューからテンプレートを選択してください</p>
      </div>
    );
  }

  const config = templateConfig[selectedTemplate];

  return (
    <div className="h-full overflow-auto">
      {/* Processing Window - Black Background with Steps */}
      {showProcessingWindow && (
        <div className="fixed inset-0 bg-black z-[60] flex items-center justify-center p-8">
          {/* Flying AIBoO - front view entrance, then side view flying */}
          <div className="aiboo-flying-hero-front fixed z-[70]">
            <AIBoOCharacter withCape={true} hidePointer={true} />
          </div>
          <div className="aiboo-flying-hero-side fixed z-[70]">
            <AIBoOCharacter pose="flying" size={136} />
          </div>
          
          <div className="w-full max-w-3xl relative z-10">
            <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="border-b border-gray-700 px-6 py-4 bg-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="size-3 rounded-full bg-red-500"></div>
                    <div className="size-3 rounded-full bg-yellow-500"></div>
                    <div className="size-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">AI Processing Terminal</span>
                </div>
              </div>
              
              {/* Processing Steps */}
              <div className="p-6 font-mono text-sm space-y-3 min-h-[400px] max-h-[600px] overflow-y-auto">
                {processingSteps.map((step, index) => (
                  <div 
                    key={index}
                    className="text-green-400 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-gray-500 mr-3">[{new Date().toLocaleTimeString('ja-JP')}]</span>
                    {step}
                  </div>
                ))}
                {processingSteps.length > 0 && processingSteps[processingSteps.length - 1] !== '✅ 完了しました！' && (
                  <div className="flex items-center gap-2 text-gray-400 animate-pulse">
                    <span className="inline-block size-2 bg-green-500 rounded-full animate-ping"></span>
                    <span>処理中...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-[60px] py-12">
        {/* Input Form */}
        {showForm && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-600">作成指示</h2>
              <button
                onClick={handleStartCreation}
                disabled={!formData.recipient || !formData.creator || !formData.company}
                className="px-8 py-3 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9] disabled:bg-gray-300 disabled:cursor-not-allowed text-base font-medium transition-colors"
              >
                作成開始
              </button>
            </div>
            
            <div className="space-y-6">
              {/* 相手先 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    相手先名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.recipient}
                    onChange={(e) => setFormData({...formData, recipient: e.target.value})}
                    placeholder="山田太郎 / 株式会社〇〇"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    相手先会社名/部署名
                  </label>
                  <input
                    type="text"
                    value={formData.recipientDepartment}
                    onChange={(e) => setFormData({...formData, recipientDepartment: e.target.value})}
                    placeholder="株式会社〇〇 営業部"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* 作成者名・会社名 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    作成者名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.creator}
                    onChange={(e) => setFormData({...formData, creator: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* タイトル */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  タイトル
                </label>
                <div className="flex gap-4 mb-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={formData.titleOption === 'auto'}
                      onChange={() => setFormData({...formData, titleOption: 'auto'})}
                      className="text-blue-600"
                    />
                    <span className="text-sm">お任せ</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={formData.titleOption === 'custom'}
                      onChange={() => setFormData({...formData, titleOption: 'custom'})}
                      className="text-blue-600"
                    />
                    <span className="text-sm">指定する</span>
                  </label>
                </div>
                {formData.titleOption === 'custom' && (
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="タイトルを入力"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>

              {/* 出力フォーマット指定 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  出力フォーマット
                </label>
                <div className="flex gap-4 mb-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={formData.formatOption === 'auto'}
                      onChange={() => setFormData({...formData, formatOption: 'auto'})}
                      className="text-blue-600"
                    />
                    <span className="text-sm">お任せ</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={formData.formatOption === 'custom'}
                      onChange={() => setFormData({...formData, formatOption: 'custom'})}
                      className="text-blue-600"
                    />
                    <span className="text-sm">指定する</span>
                  </label>
                </div>
                {formData.formatOption === 'custom' && (
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({...formData, format: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">フォーマットを選択</option>
                    <option value="formal">フォーマル</option>
                    <option value="casual">カジュアル</option>
                    <option value="detailed">詳細版</option>
                    <option value="simple">シンプ��版</option>
                  </select>
                )}
              </div>

              {/* 作成日付 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  作成日付
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 注意点 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  注意点・特記事項
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="特に注意すべき点や強調したい内容を記入してください（400字以内）"
                  maxLength={400}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-y-auto"
                />
                <p className="text-xs text-gray-500 mt-1 text-right">{formData.notes.length} / 400文字</p>
              </div>
            </div>
          </div>
        )}

        {/* Missing Files Error */}
        {!showForm && missingFiles.length > 0 && !createdFile && (
          <>
            {/* Alert Banner with Animation */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg shadow-2xl border-4 border-red-700 animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <svg className="size-12 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="inline-block size-3 bg-white rounded-full animate-ping"></span>
                      データ不足を検出
                    </h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur p-3 rounded-lg border border-white/30">
                        <span className="text-3xl">⚠️</span>
                        <p className="text-lg font-semibold">仕入先の見積書がありません</p>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur p-3 rounded-lg border border-white/30">
                        <span className="text-3xl">⚠️</span>
                        <p className="text-lg font-semibold">山田社長の名刺データが足りません</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AIBoO Character Animation */}
              <div className="mt-6 relative">
                {/* Landing Effect */}
                <div className="aiboo-landing-effect absolute left-16 bottom-0 size-24 bg-blue-500/20 rounded-full blur-xl"></div>
                
                {/* AIBoO Character */}
                <div className="aiboo-character-enter flex items-end gap-6 relative">
                  {/* Robot Character */}
                  <div className="aiboo-wave-hand">
                    <AIBoOCharacter />
                  </div>
                  
                  {/* Speech Bubble */}
                  <div className="flex-1 relative aiboo-speech-bubble">
                    {/* Comic-style thought bubbles - 4 circles at 215° angle toward AIBoO */}
                    <div className="absolute -left-3 top-24">
                      {/* Smallest circle - closest to AIBoO */}
                      <div className="absolute -left-12 top-8 size-2 rounded-full bg-white border-2 border-[#1677ff]"></div>
                      {/* Second circle */}
                      <div className="absolute -left-8 top-5 size-3 rounded-full bg-white border-2 border-[#1677ff]"></div>
                      {/* Third circle */}
                      <div className="absolute -left-4 top-3 size-4 rounded-full bg-white border-2 border-[#1677ff]"></div>
                      {/* Largest circle - closest to speech bubble */}
                      <div className="absolute left-0 top-0 size-5 rounded-full bg-white border-2 border-[#1677ff]"></div>
                    </div>
                    
                    <div className="bg-white text-gray-900 p-6 rounded-3xl shadow-2xl border-[#1677ff] relative" style={{ borderWidth: '3px' }}>
                      {/* AIBoO Label with icon */}
                      <div className="flex items-center gap-2 mb-3 pb-3 border-b-2 border-blue-100">
                        <div className="size-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <p className="text-sm text-blue-600 font-bold tracking-wide">AIBoO</p>
                      </div>
                      
                      <div className="space-y-3">
                        <p className="text-lg font-semibold leading-relaxed">
                          <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded-md text-base font-bold mr-2">⚠️ 警告</span>
                          現在のデータでは精度を確保できません。
                        </p>
                        <p className="text-lg text-red-600 font-bold leading-relaxed">
                          このままでは正確な提案書を作成できません。
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed">
                          必要なファイルをアップロードしてください。
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4 mt-4 border-t-2 border-gray-100">
                          <button
                            onClick={() => {
                              const uploadArea = document.querySelector('[class*="FileUploadArea"]');
                              uploadArea?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                          >
                            <span className="text-xl">📁</span>
                            ファイルを投入する
                          </button>
                          <button
                            onClick={async () => {
                              setMissingFiles([]);
                              await createDocument();
                            }}
                            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                          >
                            <span className="text-xl">🤖</span>
                            わたしに任せる
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* File Upload Area */}
            <div className="mb-8">
              <FileUploadArea 
                onFileSelect={handleFileUpload}
                onUrlSubmit={handleUrlUpload}
                isProcessing={false}
              />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleFinish}
                className="px-6 py-2 rounded bg-[#f1f1f1] text-[#111] text-sm font-medium hover:bg-[#e0e0e0]"
              >
                キャンセル
              </button>
            </div>
          </>
        )}

        {/* Created File Preview */}
        {createdFile && (
          <div className="space-y-6">
            {/* File Preview Card with inline preview */}
            <div className="bg-white rounded-lg border border-[#d9d9d9] overflow-hidden">
              <div className="flex items-start gap-4 p-6 border-b border-gray-200">
                <FileText className="size-8 text-[#1677ff] shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[rgba(0,0,0,0.88)] mb-2">
                    {createdFile.name}
                  </h3>
                  <p className="text-sm text-[rgba(0,0,0,0.45)]">
                    種類: {createdFile.type}
                  </p>
                </div>
              </div>

              {/* Scrollable preview area - click to open modal */}
              <div 
                className="bg-[#f9f9f9] p-6 max-h-[400px] overflow-auto cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                onClick={() => setShowPreview(true)}
                title="クリックして全体を表示"
              >
                {selectedTemplate === 'proposal' && renderProposalPreview()}
                {selectedTemplate === 'estimate' && renderEstimatePreview()}
                {selectedTemplate === 'invoice' && renderInvoicePreview()}
                {selectedTemplate === 'competitor' && renderCompetitorPreview()}
                
                <div className="text-center mt-4">
                  <p className="text-xs text-[rgba(0,0,0,0.45)] flex items-center justify-center gap-2">
                    <Eye className="size-3" />
                    クリックして全体を表示
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-4 p-6 border-t border-gray-200">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9] transition-colors"
                >
                  <Download className="size-4" />
                  ダウンロード
                </button>
              </div>
            </div>

            {/* Prompt Input */}
            <div className="bg-white rounded-lg border border-[#d9d9d9] p-6">
              <label className="block text-sm font-medium text-[rgba(0,0,0,0.88)] mb-2">
                修正指示を入力
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="修正したい内容を入力してください（例：もっとフォーマルな表現にしてください）"
                className="w-full h-24 px-4 py-2 border border-[#d9d9d9] rounded-lg text-sm outline-none focus:border-[#1677ff] resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={handleFinish}
                className="px-8 py-2.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-base font-medium transition-colors"
              >
                終了
              </button>
              <button
                onClick={handleRecreate}
                className="px-8 py-2.5 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9] text-base font-medium transition-colors"
              >
                再作成
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {showPreview && createdFile && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-8" onClick={() => setShowPreview(false)}>
          <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
              <div className="flex items-center gap-3">
                <FileText className="size-6 text-[#1677ff]" />
                <div>
                  <h2 className="text-lg font-semibold text-[rgba(0,0,0,0.88)]">{createdFile.name}</h2>
                  <p className="text-sm text-[rgba(0,0,0,0.45)]">種類: {createdFile.type}</p>
                </div>
              </div>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="size-5 text-[rgba(0,0,0,0.45)]" />
              </button>
            </div>

            {/* Modal Content - Document Preview */}
            <div className="flex-1 overflow-auto p-8 bg-[#f5f5f5]">
              {selectedTemplate === 'proposal' && renderProposalPreview()}
              {selectedTemplate === 'estimate' && renderEstimatePreview()}
              {selectedTemplate === 'invoice' && renderInvoicePreview()}
              {selectedTemplate === 'competitor' && renderCompetitorPreview()}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-4 px-6 py-4 border-t border-gray-200 shrink-0">
              <button
                onClick={() => setShowPreview(false)}
                className="px-6 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-base font-medium transition-colors"
              >
                閉じる
              </button>
              <button
                onClick={() => {
                  handleDownload();
                  setShowPreview(false);
                }}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9] text-base font-medium transition-colors"
              >
                <Download className="size-4" />
                ダウンロード
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[80] p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">解析が完了しました</h2>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowCompletionModal(false);
                    setShowProcessingWindow(false);
                    // 不足ファイル画面を表示
                    setMissingFiles(['元の見積書']);
                  }}
                  className="px-6 py-2 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9] text-sm font-medium transition-colors"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}