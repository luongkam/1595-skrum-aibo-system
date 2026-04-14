import { useState } from 'react';
import { ArrowLeft, Plus, Check, Upload, X, Link as LinkIcon, Sparkles, ChevronRight, ChevronLeft, Folder, File, Search, Star, Download, TrendingUp, Crown, Users } from 'lucide-react';
import { TemplateWizard } from './TemplateWizard';
import { CompanyInfoForm } from './CompanyInfoForm';

type SettingType = 'userInfo' | 'aiTemplate' | 'account' | 'notification' | 'security' | null;
type AITemplateTab = 'common' | 'template' | 'marketplace';

const iconOptions = [
  { value: 'document', label: 'ドキュメント', path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { value: 'calculator', label: '計算機', path: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { value: 'receipt', label: 'レシート', path: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z' },
  { value: 'chart', label: 'チャート', path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { value: 'clipboard', label: 'クリップボード', path: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { value: 'briefcase', label: 'ブリーフケース', path: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
];

const colorOptions = [
  { value: 'blue', label: 'ブルー', bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-200', border: 'border-blue-500' },
  { value: 'green', label: 'グリーン', bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-200', border: 'border-green-500' },
  { value: 'purple', label: 'パープル', bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-200', border: 'border-purple-500' },
  { value: 'orange', label: 'オレンジ', bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-200', border: 'border-orange-500' },
  { value: 'pink', label: 'ピンク', bg: 'bg-pink-100', text: 'text-pink-600', hover: 'hover:bg-pink-200', border: 'border-pink-500' },
  { value: 'indigo', label: 'インディゴ', bg: 'bg-indigo-100', text: 'text-indigo-600', hover: 'hover:bg-indigo-200', border: 'border-indigo-500' }
];

export function Settings({ selectedSetting }: { selectedSetting: SettingType }) {
  const [activeTab, setActiveTab] = useState<AITemplateTab>('template');
  const [editingTemplate, setEditingTemplate] = useState<string | null>(null);
  const [showWizard, setShowWizard] = useState(false);
  const [wizardInitialData, setWizardInitialData] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [priceFilter, setPriceFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'newest'>('popular');
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [relationshipPrompt, setRelationshipPrompt] = useState('');
  const [templateForm, setTemplateForm] = useState({
    name: '',
    description: '',
    icon: 'document',
    color: 'blue',
    fileTypes: [] as string[]
  });

  // マーケットプレイステンプレートのモックデータ生成
  const generateMarketplaceTemplates = () => {
    const templateTypes = [
      { name: '提案書', color: 'blue', path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
      { name: '見積書', color: 'green', path: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
      { name: '請求書', color: 'purple', path: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z' },
      { name: '競合分析', color: 'orange', path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
      { name: '事業計画書', color: 'indigo', path: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
      { name: '営業レポート', color: 'blue', path: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
      { name: 'マーケティング企画書', color: 'pink', path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
      { name: '契約書', color: 'gray', path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
    ];
    
    const prefixes = ['プロフェッショナル', 'シンプル', '基本', '詳細', 'ビジネス', '実用的', '高度な', 'スタンダード', 'カスタマイズ可能な', 'モダン', 'クラシック', 'エレガント', '包括的な', '効率的な', '戦略的'];
    const authors = ['デザインマスター', 'ビジネスPro', '経理サポート', 'アナリスト田中', 'セールスPro', 'スタートアップ支援', 'コンサルタント佐藤', 'マーケター山田', '財務アドバイザー', 'プロジェクトマネージャー', '営業部長', 'テンプレート工房', 'オフィスサポート', 'ドキュメント専門家', 'ビジネスデザイナー'];
    const descriptions = [
      '洗練されたデザインと構成で、プロフェッショナルな印象を与えます。',
      '必要な項目が揃った実用的なテンプレート。すぐに使えて便利です。',
      'シンプルで使いやすいデザイン。初めての方にもおすすめです。',
      '詳細な分析と戦略立案に役立つ構成になっています。',
      '効果的なプレゼンテーションを実現するテンプレートです。',
      'ビジネスシーンで即戦力となる高品質なテンプレートです。',
      'カスタマイズしやすい柔軟な構造で、様々な用途に対応します。',
      '成果を最大化するために最適化されたフォーマットです。',
      '時間を節約し、生産性を向上させるテンプレートです。',
      'モダンなデザインと機能性を兼ね備えています。'
    ];

    const templates = [];
    for (let i = 0; i < 150; i++) {
      const type = templateTypes[i % templateTypes.length];
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const author = authors[Math.floor(Math.random() * authors.length)];
      const description = descriptions[Math.floor(Math.random() * descriptions.length)];
      const isFree = Math.random() > 0.6;
      const isPremium = !isFree && Math.random() > 0.8;
      const rating = (4.3 + Math.random() * 0.7).toFixed(1);
      const reviews = Math.floor(50 + Math.random() * 300);
      const downloads = Math.floor(100 + Math.random() * 2000);
      const price = isFree ? 0 : Math.floor(980 + Math.random() * 3000);

      templates.push({
        id: i + 1,
        name: `${prefix}${type.name}`,
        author,
        description,
        icon: type.path,
        color: type.color,
        isFree,
        isPremium,
        rating: parseFloat(rating),
        reviews,
        downloads,
        price
      });
    }
    return templates;
  };

  const marketplaceTemplates = generateMarketplaceTemplates();

  // 既存テンプレートのモックデータ
  const existingTemplates: Record<string, any> = {
    'estimate': {
      name: '見積書',
      description: '見積書テンプレートの設定',
      icon: 'calculator',
      color: 'green',
      selectedFiles: ['1-1', '4'], // 営業資料_Q1.pdf, 価格表_2024.xlsx
      urls: ['https://example.com/pricing'],
      useAutoFormat: false,
      outputFormat: null,
      relationshipPrompt: '価格表を参照して、各項目の単価を入力し、見積書を作成してください。',
      fileTypes: ['PDF', 'Excel']
    },
    'proposal': {
      name: '提案書',
      description: '提案書テンプレートの設定',
      icon: 'document',
      color: 'blue',
      selectedFiles: ['1-1', '3'], // 営業資料_Q1.pdf, 製品カタログ.pdf
      urls: [],
      useAutoFormat: true,
      outputFormat: null,
      relationshipPrompt: '製品カタログを参照して、提案書を作成してください。',
      fileTypes: ['PDF', 'PowerPoint']
    },
    'invoice': {
      name: '請求書',
      description: '請求書テンプレートの設定',
      icon: 'receipt',
      color: 'purple',
      selectedFiles: ['4'], // 価格表_2024.xlsx
      urls: [],
      useAutoFormat: false,
      outputFormat: null,
      relationshipPrompt: '',
      fileTypes: ['PDF', 'Excel']
    },
    'competitor': {
      name: '競合分析',
      description: '競合分析レポートの設定',
      icon: 'chart',
      color: 'orange',
      selectedFiles: ['1-3'], // 競合分析レポート.xlsx
      urls: ['https://example.com/competitor-a', 'https://example.com/competitor-b'],
      useAutoFormat: true,
      outputFormat: null,
      relationshipPrompt: '競合他社の情報を収集し、比較分析レポートを作成してください。',
      fileTypes: ['PDF', 'PowerPoint', 'Excel']
    }
  };

  const handleEditTemplate = (templateId: string, name?: string, description?: string, icon?: string, color?: string) => {
    if (templateId === 'new') {
      setIsEditMode(false);
      setWizardInitialData(null);
      setShowWizard(true);
    } else {
      // 既存テンプレートの場合
      const templateData = existingTemplates[templateId];
      if (templateData) {
        setIsEditMode(true);
        setWizardInitialData(templateData);
        setShowWizard(true);
      }
    }
  };

  const handleSaveTemplate = (templateData: any) => {
    console.log('Saved template:', templateData);
    setShowWizard(false);
    setIsEditMode(false);
    setWizardInitialData(null);
  };

  const handleCloseWizard = () => {
    setShowWizard(false);
    setIsEditMode(false);
    setWizardInitialData(null);
  };

  const handleCancelEdit = () => {
    setEditingTemplate(null);
    setUploadedFile(null);
    setUrlInput('');
  };

  const toggleFileType = (type: string) => {
    setTemplateForm(prev => ({
      ...prev,
      fileTypes: prev.fileTypes.includes(type)
        ? prev.fileTypes.filter(t => t !== type)
        : [...prev.fileTypes, type]
    }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const renderSettingContent = () => {
    if (!selectedSetting) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-lg text-gray-500 mb-2">設定項目を選択してください</p>
            <p className="text-sm text-gray-400">左側のメニューから設定したい項目を選んでください</p>
          </div>
        </div>
      );
    }

    switch (selectedSetting) {
      case 'userInfo':
        return <CompanyInfoForm />;

      case 'aiTemplate':
        if (editingTemplate) {
          const selectedIcon = iconOptions.find(i => i.value === templateForm.icon) || iconOptions[0];
          const selectedColor = colorOptions.find(c => c.value === templateForm.color) || colorOptions[0];
          
          return (
            <div className="p-8">
              <button
                onClick={handleCancelEdit}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
              >
                <ArrowLeft className="size-5" />
                <span>テンプレート一覧に戻る</span>
              </button>

              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {editingTemplate === 'new' ? '新規テンプレート作成' : 'テンプレート編集'}
                </h3>
                <p className="text-sm text-gray-500 mb-8">
                  テンプレートの基本情報と外観を設定します
                </p>

                <div className="grid grid-cols-3 gap-8">
                  <div className="col-span-2 space-y-6">
                    {/* 基本情報 */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">基本情報</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            テンプレート名 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={templateForm.name}
                            onChange={(e) => setTemplateForm({ ...templateForm, name: e.target.value })}
                            placeholder="例: 営業提案書"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            説明
                          </label>
                          <textarea
                            value={templateForm.description}
                            onChange={(e) => setTemplateForm({ ...templateForm, description: e.target.value })}
                            placeholder="テンプレートの用途や特徴を入力"
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 出力フォーマット */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">出力フォーマット</h4>
                      <p className="text-sm text-gray-500 mb-4">あなたが作りたいアウトプットの書式があれば格納してください</p>
                      
                      {!uploadedFile ? (
                        <div>
                          <label className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                            <Upload className="size-12 mx-auto text-gray-400 mb-3" />
                            <p className="text-sm font-medium text-gray-700 mb-3">
                              ファイルを選択またはここにドラッグ＆ドロップ
                            </p>
                            <button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 mx-auto">
                              <LinkIcon className="size-4" />
                              URLを貼り付け
                            </button>
                            <input
                              type="file"
                              onChange={handleFileSelect}
                              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                              className="hidden"
                            />
                          </label>
                          <div className="mt-4 text-center">
                            <button className="text-sm text-gray-600 hover:text-gray-800">キャンセル</button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded bg-blue-100 flex items-center justify-center">
                              <Upload className="size-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                              <p className="text-xs text-gray-500">
                                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button 
                              title="AI解析"
                              className="size-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center transition-colors"
                            >
                              <Sparkles className="size-4" />
                            </button>
                            <button
                              onClick={removeFile}
                              title="削除"
                              className="size-8 rounded-lg hover:bg-gray-200 flex items-center justify-center transition-colors"
                            >
                              <X className="size-4 text-gray-500" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* デザイン設定 */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">デザイン設定</h4>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            アイコン
                          </label>
                          <div className="grid grid-cols-6 gap-2">
                            {iconOptions.map((icon) => (
                              <button
                                key={icon.value}
                                onClick={() => setTemplateForm({ ...templateForm, icon: icon.value })}
                                className={`p-3 rounded-lg border-2 transition-all ${
                                  templateForm.icon === icon.value
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                                title={icon.label}
                              >
                                <svg className="size-6 mx-auto text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.path} />
                                </svg>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            カラー
                          </label>
                          <div className="grid grid-cols-6 gap-2">
                            {colorOptions.map((color) => (
                              <button
                                key={color.value}
                                onClick={() => setTemplateForm({ ...templateForm, color: color.value })}
                                className={`p-4 rounded-lg border-2 transition-all ${color.bg} ${
                                  templateForm.color === color.value
                                    ? `${color.border}`
                                    : 'border-transparent hover:border-gray-300'
                                }`}
                                title={color.label}
                              >
                                {templateForm.color === color.value && (
                                  <Check className={`size-5 mx-auto ${color.text}`} />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 対応ファイルタイプ */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">対応ファイルタイプ</h4>
                      <p className="text-sm text-gray-500 mb-4">このテンプレートで使用できるファイル形式を選択</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {['PDF', 'Word', 'Excel', 'PowerPoint', 'Image', 'Text'].map((type) => (
                          <label
                            key={type}
                            className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              templateForm.fileTypes.includes(type)
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={templateForm.fileTypes.includes(type)}
                              onChange={() => toggleFileType(type)}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="text-sm font-medium text-gray-700">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* プレビュー */}
                  <div className="col-span-1">
                    <div className="sticky top-8">
                      <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">プレビュー</h4>
                        
                        <div className={`p-6 border-2 border-gray-200 rounded-lg ${selectedColor.hover} transition-all`}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`size-12 rounded-lg ${selectedColor.bg} flex items-center justify-center transition-colors`}>
                              <svg className={`size-7 ${selectedColor.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={selectedIcon.path} />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-base font-semibold text-gray-900 truncate">
                                {templateForm.name || 'テンプレート名'}
                              </h5>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-3">
                            {templateForm.description || 'テンプレートの説明が表示されます'}
                          </p>
                        </div>

                        {templateForm.fileTypes.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-xs font-medium text-gray-700 mb-2">対応形式:</p>
                            <div className="flex flex-wrap gap-1">
                              {templateForm.fileTypes.map((type) => (
                                <span key={type} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                                  {type}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleCancelEdit}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    キャンセル
                  </button>
                  <button
                    onClick={handleSaveTemplate}
                    disabled={!templateForm.name}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    保存
                  </button>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className="p-8">
            <div className="flex gap-1 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('template')}
                className={`px-6 py-3 text-base font-medium border-b-2 transition-colors ${
                  activeTab === 'template'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                テンプレート設定
              </button>
              <button
                onClick={() => setActiveTab('common')}
                className={`px-6 py-3 text-base font-medium border-b-2 transition-colors ${
                  activeTab === 'common'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                共通設定
              </button>
              <button
                onClick={() => setActiveTab('marketplace')}
                className={`px-6 py-3 text-base font-medium border-b-2 transition-colors ${
                  activeTab === 'marketplace'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                マーケットプレイス
              </button>
            </div>

            {activeTab === 'common' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">作成者</label>
                    <input type="text" defaultValue="山田 太郎" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">社名</label>
                    <input type="text" defaultValue="株式会社サンプル" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">役職</label>
                    <input type="text" defaultValue="営業部長" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">部署</label>
                    <input type="text" defaultValue="営業部" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">日付</label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="dateOption" defaultChecked className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500" />
                        <span className="text-sm text-gray-700">自動</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="dateOption" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500" />
                        <span className="text-sm text-gray-700">都度入力</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">出力フォーマット</label>
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">出力フォーマット</h4>
                      <p className="text-sm text-gray-500 mb-4">あなたが作りたいアウトプットの書式があれば格納してください</p>
                      
                      {!uploadedFile ? (
                        <div>
                          <label className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                            <Upload className="size-12 mx-auto text-gray-400 mb-3" />
                            <p className="text-sm font-medium text-gray-700 mb-3">
                              ファイルを選択またはここにドラッグ＆ドロップ
                            </p>
                            <button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 mx-auto">
                              <LinkIcon className="size-4" />
                              URLを貼り付け
                            </button>
                            <input
                              type="file"
                              onChange={handleFileSelect}
                              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                              className="hidden"
                            />
                          </label>
                          <div className="mt-4 text-center">
                            <button className="text-sm text-gray-600 hover:text-gray-800">キャンセル</button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded bg-blue-100 flex items-center justify-center">
                              <Upload className="size-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                              <p className="text-xs text-gray-500">
                                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={removeFile}
                            className="size-8 rounded-lg hover:bg-gray-200 flex items-center justify-center transition-colors"
                          >
                            <X className="size-4 text-gray-500" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">保存</button>
              </div>
            )}

            {activeTab === 'template' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-sm text-gray-600 mb-6">テンプレートをクリックして詳細設定を行います</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => setShowWizard(true)} className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center group">
                    <div className="flex flex-col items-center gap-3">
                      <div className="size-12 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                        <Plus className="size-7 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">新規テンプレート</h4>
                        <p className="text-sm text-gray-500 mt-1">テンプレートを追加</p>
                      </div>
                    </div>
                  </button>

                  <button onClick={() => handleEditTemplate('proposal', '提案書', '提案書テンプレートの設定', 'document', 'blue')} className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg className="size-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">提案書</h4>
                    </div>
                    <p className="text-sm text-gray-500">提案書テンプレートの設定</p>
                  </button>

                  <button onClick={() => handleEditTemplate('estimate', '見積書', '見積書テンプレートの設定', 'calculator', 'green')} className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-10 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <svg className="size-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">見積書</h4>
                    </div>
                    <p className="text-sm text-gray-500">見積書テンプレートの設定</p>
                  </button>

                  <button onClick={() => handleEditTemplate('invoice', '請求書', '請求書テンプレートの設定', 'receipt', 'purple')} className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-10 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <svg className="size-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">請求書</h4>
                    </div>
                    <p className="text-sm text-gray-500">請求書テンプレートの設定</p>
                  </button>

                  <button onClick={() => handleEditTemplate('competitor', '競合分析', '競合分析レポートの設定', 'chart', 'orange')} className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <svg className="size-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">競合分析</h4>
                    </div>
                    <p className="text-sm text-gray-500">競合分析レポートの設定</p>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'marketplace' && (
              <div>
                {/* 検索とフィルター */}
                <div className="mb-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="テンプレートを検索..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button 
                      onClick={() => setShowPublishModal(true)}
                      className="px-2.5 py-0 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-1 text-xs font-medium shadow-sm h-6"
                    >
                      <Upload className="size-3" />
                      <span>出展</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setPriceFilter('all')}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        priceFilter === 'all' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      すべて
                    </button>
                    <button 
                      onClick={() => setPriceFilter('free')}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        priceFilter === 'free' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      無料
                    </button>
                    <button 
                      onClick={() => setPriceFilter('paid')}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        priceFilter === 'paid' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      有料
                    </button>
                    <div className="h-6 w-px bg-gray-300 mx-2"></div>
                    <button 
                      onClick={() => setSortBy('popular')}
                      className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                        sortBy === 'popular' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <TrendingUp className="size-4" />
                      人気順
                    </button>
                    <button 
                      onClick={() => setSortBy('newest')}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        sortBy === 'newest' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      新着順
                    </button>
                    
                    {/* 統計情報 */}
                    <div className="flex items-center gap-3 ml-auto">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-200">
                        <Users className="size-3.5 text-blue-600" />
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-semibold text-blue-900">12,450</span>
                          <span className="text-xs text-blue-600">ユーザー</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-200">
                        <Download className="size-3.5 text-green-600" />
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-semibold text-green-900">45,678</span>
                          <span className="text-xs text-green-600">DL</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg border border-amber-200">
                        <Star className="size-3.5 text-amber-500 fill-amber-500" />
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-semibold text-amber-900">4.8</span>
                          <span className="text-xs text-amber-600">評価</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* テンプレートグリッド */}
                <div className="grid grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2">
                  {(() => {
                    const filteredTemplates = marketplaceTemplates
                      .filter((template) => {
                        if (priceFilter === 'free') return template.isFree;
                        if (priceFilter === 'paid') return !template.isFree;
                        return true; // 'all'
                      })
                      .sort((a, b) => {
                        if (sortBy === 'popular') {
                          // 人気順: ダウンロード数が多い順
                          return b.downloads - a.downloads;
                        } else {
                          // 新着順: IDが大きい順（新しい順）
                          return b.id - a.id;
                        }
                      });

                    if (filteredTemplates.length === 0) {
                      return (
                        <div className="col-span-4 flex flex-col items-center justify-center py-16 text-center">
                          <div className="size-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <Search className="size-8 text-gray-400" />
                          </div>
                          <p className="text-lg font-medium text-gray-900 mb-1">
                            該当するテンプレートが見つかりません
                          </p>
                          <p className="text-sm text-gray-500">
                            別のフィルターをお試しください
                          </p>
                        </div>
                      );
                    }

                    return filteredTemplates.map((template) => {
                    const colorClasses: Record<string, string> = {
                      blue: 'bg-blue-100 text-blue-600',
                      green: 'bg-green-100 text-green-600',
                      purple: 'bg-purple-100 text-purple-600',
                      orange: 'bg-orange-100 text-orange-600',
                      indigo: 'bg-indigo-100 text-indigo-600',
                      pink: 'bg-pink-100 text-pink-600',
                      gray: 'bg-gray-100 text-gray-600'
                    };

                    return (
                      <div
                        key={template.id}
                        className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden group relative ${
                          template.isPremium ? 'border-2 border-yellow-400' : 'border border-gray-200'
                        }`}
                      >
                        {template.isPremium && (
                          <div className="absolute top-2 right-2 z-10">
                            <div className="flex items-center gap-1 px-2 py-0.5 bg-yellow-400 text-yellow-900 rounded-full text-xs font-semibold">
                              <Crown className="size-3" />
                              Premium
                            </div>
                          </div>
                        )}
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`size-10 rounded-lg ${colorClasses[template.color] || colorClasses.blue} flex items-center justify-center flex-shrink-0`}>
                              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={template.icon} />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 truncate">{template.name}</h4>
                              <p className="text-xs text-gray-500 truncate">by {template.author}</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mb-3 line-clamp-2 h-8">
                            {template.description}
                          </p>
                          <div className="flex items-center gap-3 mb-3 text-xs">
                            <div className="flex items-center gap-1 text-yellow-600">
                              <Star className="size-3 fill-current" />
                              <span className="font-semibold">{template.rating}</span>
                              <span className="text-gray-500">({template.reviews})</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-600">
                              <Download className="size-3" />
                              <span>{template.downloads}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                            <div>
                              {template.isFree ? (
                                <p className="text-lg font-bold text-green-600">無料</p>
                              ) : (
                                <p className="text-lg font-bold text-gray-900">¥{template.price.toLocaleString()}</p>
                              )}
                            </div>
                            <button
                              onClick={() => console.log(`Template ${template.id} clicked`)}
                              className={`px-3 py-1.5 rounded-lg transition-colors text-xs font-medium ${
                                template.isFree
                                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1'
                                  : 'bg-blue-600 text-white hover:bg-blue-700'
                              }`}
                            >
                              {template.isFree ? (
                                <>
                                  <Download className="size-3" />
                                  <span>DL</span>
                                </>
                              ) : (
                                '購入'
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  });
                  })()}
                </div>


              </div>
            )}
          </div>
        );

      case 'account':
        return (
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">料金プラン</h2>
              <p className="text-sm text-gray-600">ビジネスに最適なプランをお選びください</p>
            </div>

            {/* 料金プラン */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* 個人事業主プラン */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">個人事業主プラン</h3>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">¥9,800</span>
                    <span className="text-gray-600">/月</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">1人まで</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AIテンプレート基本機能</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">月間10ドキュメント作成</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">データテーブル機能</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">ファイル投入（5GBまで）</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">メールサポート</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  プラン変更
                </button>
              </div>

              {/* オーナー経営者プラン（現在のプラン） */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-500 p-6 relative shadow-lg transform scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                    現在のプラン
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">オーナー経営者プラン</h3>
                  <Crown className="size-6 text-blue-600" />
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-blue-900">¥29,800</span>
                    <span className="text-blue-700">/月</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-1 font-medium">3人まで</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900 font-medium">個人事業主プランの全機能</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900">月間500ドキュメント作成</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900">チーム共有機能</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900">ファイル投入（50GBまで）</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900">優先サポート</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900">カスタムテンプレート作成</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md">
                  利用中
                </button>
              </div>

              {/* 経営コンサルプラン */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-purple-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">経営コンサルプラン</h3>
                  <Sparkles className="size-6 text-purple-600" />
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">¥98,000</span>
                    <span className="text-gray-600">/月</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">5人まで</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">オーナー経営者プランの全機能</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">無制限ドキュメント作成</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">高度な競合分析AI</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">ファイル投入（無制限）</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">専任コンサルタント</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">APIアクセス</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">24時間チャットボットサポート</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all font-medium shadow-md">
                  アップグレード
                </button>
              </div>
            </div>

            {/* 現在の使用状況 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">今月の使用状況</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">ドキュメント作成</span>
                    <span className="text-sm font-semibold text-gray-900">247 / 500</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '49.4%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">ストレージ使用量</span>
                    <span className="text-sm font-semibold text-gray-900">32GB / 50GB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '64%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">チームメンバー</span>
                    <span className="text-sm font-semibold text-gray-900">2 / 3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '66.7%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notification':
        return (
          <div className="p-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">通知の受信設定</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <p className="text-sm font-medium text-gray-900">ファイル投入完了</p>
                    <p className="text-xs text-gray-500">ファイルの投入とAI解析が完了したときに通知</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <p className="text-sm font-medium text-gray-900">ドキュメント作成完了</p>
                    <p className="text-xs text-gray-500">AIテンプレートでドキュメントが作成されたときに通知</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <p className="text-sm font-medium text-gray-900">システムメンテナンス</p>
                    <p className="text-xs text-gray-500">定期メンテナンスやアップデート情報を通知</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">新機能のお知らせ</p>
                    <p className="text-xs text-gray-500">新機能や便利な使い方の情報を通知</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">保存</button>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="p-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">パスワード変更</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">現在のパスワード</label>
                  <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">新しいパスワード</label>
                  <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">新しいパスワード（確認）</label>
                  <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">パスワードを変更</button>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">二段階認証</h3>
              <p className="text-sm text-gray-600 mb-4">アカウントのセキュリティを強化するために二段階認証を有効にします</p>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">二段階認証</p>
                  <p className="text-xs text-gray-500">現在は無効です</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">有効にする</button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 h-full">
      {renderSettingContent()}
      {showWizard && (
        <TemplateWizard
          onClose={handleCloseWizard}
          onSave={handleSaveTemplate}
          initialData={wizardInitialData}
          isEditMode={isEditMode}
        />
      )}
      
      {/* 出展モーダル */}
      {showPublishModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">マーケットプレイスに出展</h2>
              <button
                onClick={() => setShowPublishModal(false)}
                className="size-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X className="size-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* テンプレート名 */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  テンプレート名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="例: プロフェッショナル提案書"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 説明 */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  説明 <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="テンプレートの特徴や使い方を説明してください"
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">最低50文字以上記入してください</p>
              </div>

              {/* カテゴリ */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  カテゴリ <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">選択してください</option>
                  <option value="proposal">提案書</option>
                  <option value="estimate">見積書</option>
                  <option value="invoice">請求書</option>
                  <option value="analysis">競合分析</option>
                  <option value="business-plan">事業計画書</option>
                  <option value="report">レポート</option>
                  <option value="contract">契約書</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* 価格設定 */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  価格設定 <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="relative flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                    <input type="radio" name="pricing" value="free" className="size-4 text-blue-600" defaultChecked />
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-gray-900">無料</p>
                      <p className="text-xs text-gray-500">誰でもダウンロード可能</p>
                    </div>
                  </label>
                  <label className="relative flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                    <input type="radio" name="pricing" value="paid" className="size-4 text-blue-600" />
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-gray-900">有料</p>
                      <p className="text-xs text-gray-500">価格を設定</p>
                    </div>
                  </label>
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium text-gray-900">¥</span>
                    <input
                      type="number"
                      placeholder="980"
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">推奨価格: ¥980 〜 ¥3,980</p>
                </div>
              </div>

              {/* プレビュー画像 */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  プレビュー画像
                </label>
                <label className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                  <Upload className="size-12 mx-auto text-gray-400 mb-3" />
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    ファイルを選択またはここにドラッグ＆ドロップ
                  </p>
                  <button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 mx-auto">
                    <LinkIcon className="size-4" />
                    URLを貼り付け
                  </button>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    className="hidden"
                  />
                </label>
                <div className="mt-4 text-center">
                  <button className="text-sm text-gray-600 hover:text-gray-800">キャンセル</button>
                </div>
              </div>

              {/* タグ */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  タグ
                </label>
                <input
                  type="text"
                  placeholder="例: ビジネス, 営業, プレゼン"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">カンマ区切りで入力してください</p>
              </div>

              {/* 利用規約 */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="size-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
                  <div className="text-xs text-gray-600">
                    <span className="font-medium text-gray-900">利用規約とガイドラインに同意します</span>
                    <p className="mt-1">出展されたテンプレートは審査後、マーケットプレイスに公開されます。不適切なコンテンツは削除される場合があります。</p>
                  </div>
                </label>
              </div>
            </div>

            {/* フッター */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setShowPublishModal(false)}
                className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                キャンセル
              </button>
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                <Upload className="size-4" />
                出展する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}