import { useState, useRef } from 'react';
import { X, ChevronRight, ChevronLeft, Check, Upload, Link as LinkIcon, Sparkles, Folder, File, FolderOpen } from 'lucide-react';
import { FileUploadArea } from './FileUploadArea';

interface TemplateWizardProps {
  onClose: () => void;
  onSave: (template: any) => void;
  initialData?: {
    name: string;
    description: string;
    icon: string;
    color: string;
    selectedFiles?: string[];
    urls?: string[];
    outputFormat?: File | null;
    useAutoFormat?: boolean;
    relationshipPrompt?: string;
    fileTypes?: string[];
  };
  isEditMode?: boolean;
}

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

// モックデータ: ファイル投入から取得したファイル一覧
const mockFileTree = [
  {
    id: '1',
    name: '2024年度資料',
    type: 'folder',
    children: [
      { id: '1-1', name: '営業資料_Q1.pdf', type: 'file' },
      { id: '1-2', name: '営業資料_Q2.pdf', type: 'file' },
      { id: '1-3', name: '競合分析レポート.xlsx', type: 'file' }
    ]
  },
  {
    id: '2',
    name: '顧客データ',
    type: 'folder',
    children: [
      { id: '2-1', name: '顧客リスト_A社.csv', type: 'file' },
      { id: '2-2', name: '顧客リスト_B社.csv', type: 'file' }
    ]
  },
  { id: '3', name: '製品カタログ.pdf', type: 'file' },
  { id: '4', name: '価格表_2024.xlsx', type: 'file' }
];

export function TemplateWizard({ onClose, onSave, initialData, isEditMode }: TemplateWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['1', '2']);
  const fileInputRefStep2 = useRef<HTMLInputElement>(null);
  const fileInputRefStep3 = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    selectedFiles: initialData?.selectedFiles || [] as string[],
    urls: initialData?.urls || [] as string[],
    outputFormat: initialData?.outputFormat || null as File | null,
    useAutoFormat: initialData?.useAutoFormat || false,
    relationshipPrompt: initialData?.relationshipPrompt || '',
    icon: initialData?.icon || 'document',
    color: initialData?.color || 'blue',
    fileTypes: initialData?.fileTypes || [] as string[]
  });

  const [urlInput, setUrlInput] = useState('');

  const steps = [
    { number: 1, title: '基本情報', description: 'テンプレート名と説明を入力' },
    { number: 2, title: '参照データ', description: '参照するファイルやURLを指定' },
    { number: 3, title: '出力形式', description: 'アウトプットの書式を設定' },
    { number: 4, title: '作成指示', description: 'AIへの指示を記述' },
    { number: 5, title: '表示設定', description: 'デザインと対応形式を設定' }
  ];

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== '';
      case 2:
        return formData.selectedFiles.length > 0 || formData.urls.length > 0;
      case 3:
        return formData.outputFormat !== null || formData.useAutoFormat;
      case 4:
        return true; // プロンプトは任意
      case 5:
        return formData.fileTypes.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceedToNext() && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    onSave(formData);
  };

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev =>
      prev.includes(folderId)
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  const toggleFileSelection = (fileId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedFiles: prev.selectedFiles.includes(fileId)
        ? prev.selectedFiles.filter(id => id !== fileId)
        : [...prev.selectedFiles, fileId]
    }));
  };

  const addUrl = () => {
    if (urlInput.trim()) {
      setFormData(prev => ({
        ...prev,
        urls: [...prev.urls, urlInput.trim()]
      }));
      setUrlInput('');
    }
  };

  const removeUrl = (index: number) => {
    setFormData(prev => ({
      ...prev,
      urls: prev.urls.filter((_, i) => i !== index)
    }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, outputFormat: e.target.files![0] }));
    }
  };

  const toggleFileType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      fileTypes: prev.fileTypes.includes(type)
        ? prev.fileTypes.filter(t => t !== type)
        : [...prev.fileTypes, type]
    }));
  };

  const renderFileTree = (items: any[], level: number = 0) => {
    return items.map((item) => (
      <div key={item.id} style={{ marginLeft: `${level * 20}px` }}>
        {item.type === 'folder' ? (
          <div>
            <button
              onClick={() => toggleFolder(item.id)}
              className="flex items-center gap-2 py-2 px-3 hover:bg-gray-100 rounded transition-colors w-full text-left"
            >
              {expandedFolders.includes(item.id) ? (
                <FolderOpen className="size-4 text-blue-600" />
              ) : (
                <Folder className="size-4 text-gray-600" />
              )}
              <span className="text-sm font-medium text-gray-700">{item.name}</span>
            </button>
            {expandedFolders.includes(item.id) && item.children && (
              <div>{renderFileTree(item.children, level + 1)}</div>
            )}
          </div>
        ) : (
          <label className="flex items-center gap-2 py-2 px-3 hover:bg-gray-50 rounded cursor-pointer transition-colors">
            <input
              type="checkbox"
              checked={formData.selectedFiles.includes(item.id)}
              onChange={() => toggleFileSelection(item.id)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <File className="size-4 text-gray-500" />
            <span className="text-sm text-gray-700">{item.name}</span>
          </label>
        )}
      </div>
    ));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                テンプレート名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="例: 営業提案書"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                説明
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="テンプレートの用途や特徴を入力してください"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">新しいファイルを投入</h4>
              <FileUploadArea 
                onFileSelect={(file) => {
                  // ファイル選択時の処理（モックデータ追加など）
                  console.log('File selected:', file);
                }}
                onUrlSubmit={(url) => {
                  // URL追加処理
                  setFormData(prev => ({
                    ...prev,
                    urls: [...prev.urls, url]
                  }));
                }}
                isProcessing={false}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-gray-50 px-2 text-gray-500">または</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">投入したファイルから選択</h4>
              <div className="border border-gray-300 rounded-lg p-4 max-h-80 overflow-y-auto bg-white">
                {renderFileTree(mockFileTree)}
              </div>
              {formData.selectedFiles.length > 0 && (
                <p className="text-xs text-gray-500 mt-2">
                  {formData.selectedFiles.length} 件のファイルを選択中
                </p>
              )}
            </div>

            {formData.urls.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">追加されたURL</h4>
                <div className="space-y-2">
                  {formData.urls.map((url, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <span className="text-sm text-gray-700 truncate flex-1">{url}</span>
                      <button
                        onClick={() => removeUrl(index)}
                        className="ml-2 size-6 flex items-center justify-center hover:bg-gray-200 rounded transition-colors"
                      >
                        <X className="size-4 text-gray-500" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={!formData.useAutoFormat}
                  onChange={() => setFormData({ ...formData, useAutoFormat: false })}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-sm font-medium text-gray-700">フォーマットを指定</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={formData.useAutoFormat}
                  onChange={() => setFormData({ ...formData, useAutoFormat: true, outputFormat: null })}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-sm font-medium text-gray-700">AIにお任せ</span>
              </label>
            </div>

            {!formData.useAutoFormat && (
              <div>
                {!formData.outputFormat ? (
                  <FileUploadArea 
                    onFileSelect={(file) => {
                      setFormData(prev => ({ ...prev, outputFormat: file }));
                    }}
                    onUrlSubmit={(url) => {
                      console.log('Format URL submitted:', url);
                      // URLからフォーマットを取得する処理
                    }}
                    isProcessing={false}
                  />
                ) : (
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded bg-blue-100 flex items-center justify-center">
                        <Upload className="size-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{formData.outputFormat.name}</p>
                        <p className="text-xs text-gray-500">
                          {(formData.outputFormat.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        title="AI解析"
                        className="size-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center transition-colors"
                      >
                        <Sparkles className="size-5" />
                      </button>
                      <button
                        onClick={() => setFormData({ ...formData, outputFormat: null })}
                        title="削除"
                        className="size-10 rounded-lg hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <X className="size-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {formData.useAutoFormat && (
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Sparkles className="size-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-semibold text-blue-900 mb-2">AIが最適なフォーマットを提案</h4>
                    <p className="text-sm text-blue-800">
                      選択したファイルとプロンプトの内容から、AIが最適な出力フォーマットを自動生成します。
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ファイルやURLの関係性を記述してください
              </label>
              <textarea
                value={formData.relationshipPrompt}
                onChange={(e) => setFormData({ ...formData, relationshipPrompt: e.target.value })}
                placeholder="概算見積書を参照して、摘要行に記載されている内容を、価格表ページを参照して最新の仕切り価格を入力してください。そして提案書の変更箇所をUpdateして、作成してください。"
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <p className="text-xs text-gray-500 mt-2">
                選択したファイルやURLをどのように活用するか、AIへの指示を記述してください（任意）
              </p>
            </div>

            {(formData.selectedFiles.length > 0 || formData.urls.length > 0) && (
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">選択中のデータソース</h4>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600">
                    ファイル: {formData.selectedFiles.length}件
                  </p>
                  <p className="text-xs text-gray-600">
                    URL: {formData.urls.length}件
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case 5:
        const selectedIcon = iconOptions.find(i => i.value === formData.icon) || iconOptions[0];
        const selectedColor = colorOptions.find(c => c.value === formData.color) || colorOptions[0];

        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">アイコン</label>
              <div className="grid grid-cols-6 gap-2">
                {iconOptions.map((icon) => (
                  <button
                    key={icon.value}
                    onClick={() => setFormData({ ...formData, icon: icon.value })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.icon === icon.value
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
              <label className="block text-sm font-medium text-gray-700 mb-3">カラー</label>
              <div className="grid grid-cols-6 gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setFormData({ ...formData, color: color.value })}
                    className={`p-4 rounded-lg border-2 transition-all ${color.bg} ${
                      formData.color === color.value
                        ? `${color.border}`
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    title={color.label}
                  >
                    {formData.color === color.value && (
                      <Check className={`size-5 mx-auto ${color.text}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                対応ファイルタイプ <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['PDF', 'Word', 'Excel', 'PowerPoint', 'Image', 'Text'].map((type) => (
                  <label
                    key={type}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.fileTypes.includes(type)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.fileTypes.includes(type)}
                      onChange={() => toggleFileType(type)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-4">プレビュー</h4>
              <div className={`p-6 border-2 border-gray-200 rounded-lg ${selectedColor.hover} transition-all`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`size-12 rounded-lg ${selectedColor.bg} flex items-center justify-center`}>
                    <svg className={`size-7 ${selectedColor.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={selectedIcon.path} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-base font-semibold text-gray-900 truncate">
                      {formData.name || 'テンプレート名'}
                    </h5>
                  </div>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {formData.description || 'テンプレートの説明が表示されます'}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {isEditMode ? 'テンプレート編集' : '新規テンプレート作成'}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{steps[currentStep - 1].description}</p>
          </div>
          <button
            onClick={onClose}
            className="size-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="size-6 text-gray-500" />
          </button>
        </div>

        {/* ステップインジケーター */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`size-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      currentStep > step.number
                        ? 'bg-blue-600 text-white'
                        : currentStep === step.number
                        ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="size-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className={`text-xs mt-2 font-medium ${
                    currentStep === step.number ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 transition-all ${
                      currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* コンテンツエリア - 2カラムレイアウト */}
        <div className="flex-1 overflow-hidden flex">
          {/* 左側：アクション部分 */}
          <div className="flex-[2] overflow-y-auto p-6 border-r border-gray-200">
            {renderStepContent()}
          </div>

          {/* 右側：設定情報サマリー */}
          <div className="flex-[1] overflow-y-auto p-6 bg-gray-50">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">設定内容</h3>
            
            <div className="space-y-4">
              {/* 基本情報 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className={`size-5 rounded-full flex items-center justify-center text-xs ${
                    formData.name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>1</span>
                  基本情報
                </h4>
                {formData.name ? (
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-gray-500">テンプレート名</p>
                      <p className="text-sm font-medium text-gray-900">{formData.name}</p>
                    </div>
                    {formData.description && (
                      <div>
                        <p className="text-xs text-gray-500">説明</p>
                        <p className="text-sm text-gray-700 line-clamp-2">{formData.description}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400">未設定</p>
                )}
              </div>

              {/* 参照データ */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className={`size-5 rounded-full flex items-center justify-center text-xs ${
                    formData.selectedFiles.length > 0 || formData.urls.length > 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>2</span>
                  参照データ
                </h4>
                {formData.selectedFiles.length > 0 || formData.urls.length > 0 ? (
                  <div className="space-y-2">
                    {formData.selectedFiles.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">ファイル ({formData.selectedFiles.length}件)</p>
                        <div className="space-y-1">
                          {formData.selectedFiles.map((fileId) => {
                            // ファイル名を取得
                            const findFileName = (items: any[]): string | null => {
                              for (const item of items) {
                                if (item.id === fileId) return item.name;
                                if (item.children) {
                                  const found = findFileName(item.children);
                                  if (found) return found;
                                }
                              }
                              return null;
                            };
                            const fileName = findFileName(mockFileTree);
                            return (
                              <p key={fileId} className="text-xs text-gray-700 truncate flex items-center gap-1">
                                <File className="size-3 text-gray-400 flex-shrink-0" />
                                <span className="truncate">{fileName}</span>
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    {formData.urls.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">URL ({formData.urls.length}件)</p>
                        <div className="space-y-1">
                          {formData.urls.map((url, index) => (
                            <p key={index} className="text-xs text-gray-700 truncate flex items-center gap-1">
                              <LinkIcon className="size-3 text-gray-400 flex-shrink-0" />
                              <span className="truncate">{url}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400">未設定</p>
                )}
              </div>

              {/* 出力形式 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className={`size-5 rounded-full flex items-center justify-center text-xs ${
                    formData.outputFormat || formData.useAutoFormat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>3</span>
                  出力形式
                </h4>
                {formData.useAutoFormat ? (
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-3 text-blue-600 flex-shrink-0" />
                    <p className="text-xs text-gray-700">AIにお任せ</p>
                  </div>
                ) : formData.outputFormat ? (
                  <div className="flex items-center gap-2">
                    <File className="size-3 text-gray-400 flex-shrink-0" />
                    <p className="text-xs text-gray-700 truncate">{formData.outputFormat.name}</p>
                  </div>
                ) : (
                  <p className="text-xs text-gray-400">未設定</p>
                )}
              </div>

              {/* 作成指示 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className={`size-5 rounded-full flex items-center justify-center text-xs ${
                    formData.relationshipPrompt ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>4</span>
                  作成指示
                </h4>
                {formData.relationshipPrompt ? (
                  <p className="text-xs text-gray-700 line-clamp-3">{formData.relationshipPrompt}</p>
                ) : (
                  <p className="text-xs text-gray-400">未設定（任意）</p>
                )}
              </div>

              {/* 表示設定 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className={`size-5 rounded-full flex items-center justify-center text-xs ${
                    formData.fileTypes.length > 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>5</span>
                  表示設定
                </h4>
                {formData.fileTypes.length > 0 ? (
                  <div className="space-y-2">
                    {formData.icon && formData.color && (
                      <div className="flex items-center gap-2">
                        <div className={`size-8 rounded ${
                          colorOptions.find(c => c.value === formData.color)?.bg || 'bg-blue-100'
                        } flex items-center justify-center`}>
                          <svg className={`size-5 ${
                            colorOptions.find(c => c.value === formData.color)?.text || 'text-blue-600'
                          }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                              iconOptions.find(i => i.value === formData.icon)?.path || iconOptions[0].path
                            } />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-700">
                          {colorOptions.find(c => c.value === formData.color)?.label || 'ブルー'}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {formData.fileTypes.map((type) => (
                        <span key={type} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-gray-400">未設定</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="size-5" />
            戻る
          </button>

          <div className="text-sm text-gray-500">
            ステップ {currentStep} / {steps.length}
          </div>

          {currentStep < 5 ? (
            <button
              onClick={handleNext}
              disabled={!canProceedToNext()}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              次へ
              <ChevronRight className="size-5" />
            </button>
          ) : (
            <button
              onClick={handleSave}
              disabled={!canProceedToNext()}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <Check className="size-5" />
              保存
            </button>
          )}
        </div>
      </div>
    </div>
  );
}