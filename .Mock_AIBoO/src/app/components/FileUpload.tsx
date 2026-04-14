import { FileText, Calendar, Building2, DollarSign, FolderOpen, User, BarChart3, Zap, Star, Tag, ChevronLeft, ChevronRight, ZoomIn, Clock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { FileUploadArea } from './FileUploadArea';
import { AIBoOCharacter } from './AIBoOCharacter';
import invoicePreview from "figma:asset/8cf21eeaf480c587d8baa6979205bda26df5ca21.png";

interface AnalyzedFile {
  originalName: string;
  name: string;
  documentDate: string;
  client: string;
  type: string;
  direction?: string;
  amount?: string;
  taxType?: string;
  project?: string;
  department?: string;
  assignee?: string;
  status?: string;
  priority?: string;
  tags?: string[];
  summary: string;
}

export function FileUpload() {
  const [analyzedFile, setAnalyzedFile] = useState<AnalyzedFile | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showReadingAIBoO, setShowReadingAIBoO] = useState(false);
  const [editableFileName, setEditableFileName] = useState('');
  const [editingField, setEditingField] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(5);
  const [showZoomModal, setShowZoomModal] = useState(false);

  // Preset options for each field
  const presetOptions = {
    type: ['請求書', '見積書', '提案書', '契約書', '報告書', '議事録', '発注書', '納品書', 'その他'],
    direction: ['受信', '送信', '社内'],
    client: ['山田商事株式会社', '田中産業', '佐藤物産', '鈴木商会', '高橋工業'],
    department: ['営業部', '経理部', '技術部', 'マーケティング部', '人事部', '総務部', '企画部'],
    assignee: ['田中太郎', '佐藤花子', '鈴木一郎', '高橋美咲', '山本健太'],
    status: ['該当なし', '未処理', '処理中', '完了', '承認済み', '保留中', '却下'],
    priority: ['高', '中', '低'],
    project: ['該当なし', 'ECサイトリニューアル', 'マーケティングキャンペーン', 'システム刷新', '新規事業開発'],
    taxType: ['内税', '外税', '非課税', '不明']
  };

  const updateMetaField = (field: keyof AnalyzedFile, value: string) => {
    if (analyzedFile) {
      setAnalyzedFile({ ...analyzedFile, [field]: value });
    }
    setEditingField(null);
  };

  const getFileNameWithoutExtension = (fileName: string) => {
    const lastDotIndex = fileName.lastIndexOf('.');
    return lastDotIndex > 0 ? fileName.substring(0, lastDotIndex) : fileName;
  };

  const getFileExtension = (fileName: string) => {
    const lastDotIndex = fileName.lastIndexOf('.');
    return lastDotIndex > 0 ? fileName.substring(lastDotIndex) : '';
  };

  const handleFileSelect = async (file: File) => {
    setIsAnalyzing(true);
    setShowReadingAIBoO(true);
    
    // AIBoOが本を読む演出（3秒）
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // ファイル情報を解析（モック）
    const mockAnalysis: AnalyzedFile = {
      originalName: file.name,
      name: `請求書20260101_山田商事.pdf`,
      documentDate: '2026-02-10',
      client: '山田商事株式会社',
      type: '請求書',
      direction: '受信',
      amount: '¥110,000',
      taxType: '¥10,000',
      project: '該当なし',
      department: '営業部',
      assignee: '田中太郎',
      status: '未処理',
      priority: '高',
      tags: ['緊急', '重要'],
      summary: 'AI解析により、このファイルは令和8年2月分の取引に関する重要書類であることが判明しました。金額や日付などの重要情報が含まれています。'
    };
    
    setShowReadingAIBoO(false);
    setAnalyzedFile(mockAnalysis);
    setEditableFileName(getFileNameWithoutExtension(mockAnalysis.name));
    setIsAnalyzing(false);
  };

  const handleUrlSubmit = async (url: string) => {
    setIsAnalyzing(true);
    setShowReadingAIBoO(true);
    
    // AIBoOが本を読む演出（3秒）
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // URLから擬似的なファイル名を生成
    const fileName = url.split('/').pop() || 'document.pdf';
    
    // ファイル情報を解析（モック）
    const mockAnalysis: AnalyzedFile = {
      originalName: fileName,
      name: fileName,
      documentDate: '2026-02-10',
      client: '山田商事株式会社',
      type: 'URL取得ファイル',
      amount: '¥250,000',
      taxType: '外税',
      project: 'マーケティングキャンペーン',
      department: 'マーケティング部',
      assignee: '佐藤花子',
      status: '該当なし',
      priority: '中',
      tags: ['URL取得', '2026年度'],
      summary: 'URLから取得したファイルをAI解析しました。令和8年2月分の取引に関する重要書類であることが判明しました。'
    };
    
    setShowReadingAIBoO(false);
    setAnalyzedFile(mockAnalysis);
    setEditableFileName(getFileNameWithoutExtension(mockAnalysis.name));
    setIsAnalyzing(false);
  };

  const handleSubmit = () => {
    const finalFileName = editableFileName + getFileExtension(analyzedFile?.name || '');
    toast.success(`${finalFileName} を投入しました`, {
      position: 'top-center',
      duration: 3000,
      style: {
        fontSize: '16px',
        padding: '16px 24px',
      }
    });
    setAnalyzedFile(null);
    setEditableFileName('');
  };

  const handleCancel = () => {
    toast.error('キャンセルしました', {
      position: 'top-center',
      duration: 3000,
      style: {
        fontSize: '16px',
        padding: '16px 24px',
      }
    });
    setAnalyzedFile(null);
    setEditableFileName('');
  };

  return (
    <div className="h-full overflow-auto relative">
      {/* Reading AIBoO Animation Overlay */}
      {showReadingAIBoO && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center gap-6 aiboo-jump-in">
            <AIBoOCharacter pose="reading" size={384} />
            <div className="text-center space-y-2">
              <p className="text-2xl font-semibold text-[#1677ff]">
                解析中...
              </p>
              <p className="text-base text-[rgba(0,0,0,0.65)]">
                AIBoOが一生懸命考えています
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes jumpFromLeft {
          0% {
            transform: translate(-150vw, 100vh) scale(0.3) rotate(-45deg);
            opacity: 0;
          }
          40% {
            transform: translate(-20vw, -20vh) scale(0.8) rotate(-10deg);
            opacity: 1;
          }
          70% {
            transform: translate(5vw, 5vh) scale(1.1) rotate(5deg);
          }
          100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .aiboo-jump-in {
          animation: jumpFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      {/* Upload Area */}
      <div className="px-[60px] py-6">
        {!analyzedFile && (
          <FileUploadArea 
            onFileSelect={handleFileSelect}
            onUrlSubmit={handleUrlSubmit}
            isProcessing={isAnalyzing}
          />
        )}

        {/* Analyzed File Information */}
        {analyzedFile && (
          <div>
            <h3 className="text-lg font-semibold text-[rgba(0,0,0,0.88)] mb-3">
              AI解析結果
            </h3>
            
            <div className="bg-white rounded-lg border border-[#d9d9d9] p-4 space-y-3">
              {/* Original File Name → AI Analysis Result (Horizontal) */}
              <div className="flex items-start gap-4">
                {/* Original File */}
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="size-5 text-[rgba(0,0,0,0.45)] mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-[rgba(0,0,0,0.45)] mb-1">原資ファイル</p>
                    <p className="text-base text-[rgba(0,0,0,0.65)]">{analyzedFile.originalName}</p>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center justify-center mt-6">
                  <svg className="size-6 text-[#1677ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* New File Name */}
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="size-5 text-[#1677ff] mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-[rgba(0,0,0,0.45)] mb-1">AI解析結果</p>
                    <div className="text-base text-[rgba(0,0,0,0.88)]">
                      <div className="flex items-center gap-1">
                        <input
                          type="text"
                          value={editableFileName}
                          onChange={(e) => setEditableFileName(e.target.value)}
                          className="font-semibold text-[#1677ff] border border-[#d9d9d9] rounded px-2 py-1 focus:outline-none focus:border-[#1677ff] focus:ring-1 focus:ring-[#1677ff] flex-1"
                          placeholder="ファイル名を入力"
                        />
                        <span className="font-semibold text-[#1677ff]">{getFileExtension(analyzedFile.name)}</span>
                      </div>
                      <span className="text-[rgba(0,0,0,0.65)] text-sm block mt-1">にリネームされました</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Column Layout: Meta Info + Preview */}
              <div className="pt-4 border-t border-[#f0f0f0] flex gap-6">
                {/* Left: Meta Information */}
                <div className="flex-1">
                  <p className="text-sm text-[rgba(0,0,0,0.45)] mb-2">ラベル設定（クリックして編集）</p>
                  <div className="grid grid-cols-3 gap-2">
                    {/* Document Type */}
                    <div className="bg-[#e6f4ff] rounded p-2 border border-[#91caff] hover:border-[#1677ff] transition-colors cursor-pointer">
                      <div className="flex items-center gap-1 mb-1">
                        <FileText className="size-3 text-[#1677ff]" />
                        <span className="text-xs text-[rgba(0,0,0,0.45)]">文書種別</span>
                      </div>
                      {editingField === 'type' ? (
                        <select
                          autoFocus
                          value={analyzedFile.type}
                          onChange={(e) => updateMetaField('type', e.target.value)}
                          onBlur={() => setEditingField(null)}
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)] w-full bg-white border border-[#1677ff] rounded px-1 py-0.5 focus:outline-none"
                        >
                          {presetOptions.type.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <p 
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)]"
                          onClick={() => setEditingField('type')}
                        >
                          {analyzedFile.type}
                        </p>
                      )}
                    </div>

                    {/* Direction */}
                    <div className="bg-[#fff7e6] rounded p-2 border border-[#ffd591] hover:border-[#fa8c16] transition-colors cursor-pointer">
                      <div className="flex items-center gap-1 mb-1">
                        <Zap className="size-3 text-[#fa8c16]" />
                        <span className="text-xs text-[rgba(0,0,0,0.45)]">フロー</span>
                      </div>
                      {editingField === 'direction' ? (
                        <select
                          autoFocus
                          value={analyzedFile.direction || ''}
                          onChange={(e) => updateMetaField('direction', e.target.value)}
                          onBlur={() => setEditingField(null)}
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)] w-full bg-white border border-[#fa8c16] rounded px-1 py-0.5 focus:outline-none"
                        >
                          {presetOptions.direction.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <p 
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)]"
                          onClick={() => setEditingField('direction')}
                        >
                          {analyzedFile.direction || '未設定'}
                        </p>
                      )}
                    </div>

                    {/* Client */}
                    <div className="bg-[#f6ffed] rounded p-2 border border-[#b7eb8f] hover:border-[#52c41a] transition-colors cursor-pointer">
                      <div className="flex items-center gap-1 mb-1">
                        <Building2 className="size-3 text-[#52c41a]" />
                        <span className="text-xs text-[rgba(0,0,0,0.45)]">取引先</span>
                      </div>
                      {editingField === 'client' ? (
                        <div className="relative">
                          <input
                            autoFocus
                            type="text"
                            list="client-options"
                            value={analyzedFile.client}
                            onChange={(e) => setAnalyzedFile({ ...analyzedFile, client: e.target.value })}
                            onBlur={() => setEditingField(null)}
                            className="text-xs font-medium text-[rgba(0,0,0,0.88)] w-full bg-white border border-[#52c41a] rounded px-1 py-0.5 focus:outline-none"
                          />
                          <datalist id="client-options">
                            {presetOptions.client.map(option => (
                              <option key={option} value={option} />
                            ))}
                          </datalist>
                        </div>
                      ) : (
                        <p 
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)] truncate"
                          onClick={() => setEditingField('client')}
                          title={analyzedFile.client}
                        >
                          {analyzedFile.client}
                        </p>
                      )}
                    </div>

                    {/* Document Date */}
                    <div className="bg-[#f9f0ff] rounded p-2 border border-[#d3adf7] hover:border-[#722ed1] transition-colors cursor-pointer">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="size-3 text-[#722ed1]" />
                        <span className="text-xs text-[rgba(0,0,0,0.45)]">文書日付</span>
                      </div>
                      {editingField === 'documentDate' ? (
                        <input
                          autoFocus
                          type="date"
                          value={analyzedFile.documentDate}
                          onChange={(e) => updateMetaField('documentDate', e.target.value)}
                          onBlur={() => setEditingField(null)}
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)] w-full bg-white border border-[#722ed1] rounded px-1 py-0.5 focus:outline-none"
                        />
                      ) : (
                        <p 
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)]"
                          onClick={() => setEditingField('documentDate')}
                        >
                          {analyzedFile.documentDate}
                        </p>
                      )}
                    </div>

                    {/* Amount */}
                    <div className="bg-[#fffbe6] rounded p-2 border border-[#ffe58f] hover:border-[#faad14] transition-colors cursor-pointer">
                      <div className="flex items-center gap-1 mb-1">
                        <DollarSign className="size-3 text-[#faad14]" />
                        <span className="text-xs text-[rgba(0,0,0,0.45)]">金額</span>
                      </div>
                      {editingField === 'amount' ? (
                        <input
                          autoFocus
                          type="text"
                          value={analyzedFile.amount || ''}
                          onChange={(e) => setAnalyzedFile({ ...analyzedFile, amount: e.target.value })}
                          onBlur={() => setEditingField(null)}
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)] w-full bg-white border border-[#faad14] rounded px-1 py-0.5 focus:outline-none"
                          placeholder="金額を入力"
                        />
                      ) : (
                        <p 
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)]"
                          onClick={() => setEditingField('amount')}
                        >
                          {analyzedFile.amount || '未設定'}
                        </p>
                      )}
                    </div>

                    {/* Tax Type */}
                    <div className="bg-[#fff0f6] rounded p-2 border border-[#ffadd2] hover:border-[#eb2f96] transition-colors cursor-pointer">
                      <div className="flex items-center gap-1 mb-1">
                        <BarChart3 className="size-3 text-[#eb2f96]" />
                        <span className="text-xs text-[rgba(0,0,0,0.45)]">消費税等</span>
                      </div>
                      {editingField === 'taxType' ? (
                        <select
                          autoFocus
                          value={analyzedFile.taxType || ''}
                          onChange={(e) => updateMetaField('taxType', e.target.value)}
                          onBlur={() => setEditingField(null)}
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)] w-full bg-white border border-[#eb2f96] rounded px-1 py-0.5 focus:outline-none"
                        >
                          {presetOptions.taxType.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <p 
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)]"
                          onClick={() => setEditingField('taxType')}
                        >
                          {analyzedFile.taxType || '未設定'}
                        </p>
                      )}
                    </div>

                    {/* Project */}
                    <div className="bg-[#fff7e6] rounded p-2 border border-[#ffd591] hover:border-[#fa8c16] transition-colors cursor-pointer">
                      <div className="flex items-center gap-1 mb-1">
                        <FolderOpen className="size-3 text-[#fa8c16]" />
                        <span className="text-xs text-[rgba(0,0,0,0.45)]">プロジェクト</span>
                      </div>
                      {editingField === 'project' ? (
                        <div className="relative">
                          <input
                            autoFocus
                            type="text"
                            list="project-options"
                            value={analyzedFile.project || ''}
                            onChange={(e) => setAnalyzedFile({ ...analyzedFile, project: e.target.value })}
                            onBlur={() => setEditingField(null)}
                            className="text-xs font-medium text-[rgba(0,0,0,0.88)] w-full bg-white border border-[#fa8c16] rounded px-1 py-0.5 focus:outline-none"
                            placeholder="プロジェクト名"
                          />
                          <datalist id="project-options">
                            {presetOptions.project.map(option => (
                              <option key={option} value={option} />
                            ))}
                          </datalist>
                        </div>
                      ) : (
                        <p 
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)] truncate"
                          onClick={() => setEditingField('project')}
                          title={analyzedFile.project}
                        >
                          {analyzedFile.project || '未設定'}
                        </p>
                      )}
                    </div>

                    {/* Assignee */}
                    <div className="bg-[#e6fffb] rounded p-2 border border-[#87e8de] hover:border-[#13c2c2] transition-colors cursor-pointer">
                      <div className="flex items-center gap-1 mb-1">
                        <User className="size-3 text-[#13c2c2]" />
                        <span className="text-xs text-[rgba(0,0,0,0.45)]">担当者</span>
                      </div>
                      {editingField === 'assignee' ? (
                        <div className="relative">
                          <input
                            autoFocus
                            type="text"
                            list="assignee-options"
                            value={analyzedFile.assignee || ''}
                            onChange={(e) => setAnalyzedFile({ ...analyzedFile, assignee: e.target.value })}
                            onBlur={() => setEditingField(null)}
                            className="text-xs font-medium text-[rgba(0,0,0,0.88)] w-full bg-white border border-[#13c2c2] rounded px-1 py-0.5 focus:outline-none"
                            placeholder="担当者名"
                          />
                          <datalist id="assignee-options">
                            {presetOptions.assignee.map(option => (
                              <option key={option} value={option} />
                            ))}
                          </datalist>
                        </div>
                      ) : (
                        <p 
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)]"
                          onClick={() => setEditingField('assignee')}
                        >
                          {analyzedFile.assignee || '未設定'}
                        </p>
                      )}
                    </div>

                    {/* Department */}
                    <div className="bg-[#fff0f6] rounded p-2 border border-[#ffadd2] hover:border-[#eb2f96] transition-colors cursor-pointer">
                      <div className="flex items-center gap-1 mb-1">
                        <BarChart3 className="size-3 text-[#eb2f96]" />
                        <span className="text-xs text-[rgba(0,0,0,0.45)]">部門</span>
                      </div>
                      {editingField === 'department' ? (
                        <select
                          autoFocus
                          value={analyzedFile.department || ''}
                          onChange={(e) => updateMetaField('department', e.target.value)}
                          onBlur={() => setEditingField(null)}
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)] w-full bg-white border border-[#eb2f96] rounded px-1 py-0.5 focus:outline-none"
                        >
                          {presetOptions.department.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <p 
                          className="text-xs font-medium text-[rgba(0,0,0,0.88)]"
                          onClick={() => setEditingField('department')}
                        >
                          {analyzedFile.department || '未設定'}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  {(analyzedFile.tags && analyzedFile.tags.length > 0) || analyzedFile.status || analyzedFile.priority ? (
                    <div className="mt-3">
                      <div className="flex items-center gap-1 mb-1">
                        <Tag className="size-3 text-[#1677ff]" />
                        <span className="text-xs text-[rgba(0,0,0,0.45)]">タグ</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {/* Status Tag */}
                        {analyzedFile.status && analyzedFile.status !== '該当なし' && (
                          <div className="inline-flex items-center gap-1">
                            {editingField === 'status' ? (
                              <select
                                autoFocus
                                value={analyzedFile.status}
                                onChange={(e) => updateMetaField('status', e.target.value)}
                                onBlur={() => setEditingField(null)}
                                className="text-xs px-2 py-0.5 rounded-full bg-[#e6f7ff] text-[#1890ff] border border-[#91d5ff] focus:outline-none"
                              >
                                {presetOptions.status.map(option => (
                                  <option key={option} value={option}>{option}</option>
                                ))}
                              </select>
                            ) : (
                              <span
                                onClick={() => setEditingField('status')}
                                className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#e6f7ff] text-[#1890ff] text-xs border border-[#91d5ff] cursor-pointer hover:border-[#1890ff]"
                              >
                                <Zap className="size-3 mr-0.5" />
                                {analyzedFile.status}
                              </span>
                            )}
                          </div>
                        )}
                        
                        {/* Priority Tag */}
                        {analyzedFile.priority && (
                          <div className="inline-flex items-center gap-1">
                            {editingField === 'priority' ? (
                              <select
                                autoFocus
                                value={analyzedFile.priority}
                                onChange={(e) => updateMetaField('priority', e.target.value)}
                                onBlur={() => setEditingField(null)}
                                className="text-xs px-2 py-0.5 rounded-full bg-[#fff1f0] text-[#ff4d4f] border border-[#ffccc7] focus:outline-none"
                              >
                                {presetOptions.priority.map(option => (
                                  <option key={option} value={option}>{option}</option>
                                ))}
                              </select>
                            ) : (
                              <span
                                onClick={() => setEditingField('priority')}
                                className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#fff1f0] text-[#ff4d4f] text-xs border border-[#ffccc7] cursor-pointer hover:border-[#ff4d4f]"
                              >
                                <Star className="size-3 mr-0.5" />
                                {analyzedFile.priority}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Regular Tags */}
                        {analyzedFile.tags && analyzedFile.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#e6f4ff] text-[#1677ff] text-xs border border-[#91caff]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* Summary */}
                  <div className="mt-3 pt-3 border-t border-[#f0f0f0]">
                    <div className="flex items-start gap-2">
                      <FileText className="size-4 text-[#1677ff] mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs text-[rgba(0,0,0,0.45)] mb-1">概要</p>
                        <p className="text-sm text-[rgba(0,0,0,0.88)] leading-relaxed">{analyzedFile.summary}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Document Preview */}
                <div className="w-80 shrink-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-[rgba(0,0,0,0.45)]">プレビュー</p>
                    <button
                      onClick={() => setShowZoomModal(true)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      title="拡大表示"
                    >
                      <ZoomIn className="size-4 text-[#1677ff]" />
                    </button>
                  </div>
                  
                  {/* Preview Area */}
                  <div className="bg-gray-50 border border-[#d9d9d9] rounded-lg overflow-hidden">
                    {/* Document Preview Image */}
                    <div className="aspect-[8.5/11] bg-white overflow-hidden">
                      <img 
                        src={invoicePreview}
                        alt="請求書プレビュー"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Page Navigation */}
                    <div className="bg-gray-100 px-3 py-2 flex items-center justify-between border-t border-gray-200">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="p-1 hover:bg-gray-200 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="size-4" />
                      </button>
                      <span className="text-xs text-gray-600">
                        {currentPage} / {totalPages}
                      </span>
                      <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="p-1 hover:bg-gray-200 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end mt-6">
              <button
                onClick={handleCancel}
                className="px-8 py-2.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-base font-medium transition-colors"
              >
                キャンセル
              </button>
              <button
                onClick={handleSubmit}
                className="px-8 py-2.5 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9] text-base font-medium transition-colors"
              >
                投入
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      {showZoomModal && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-8"
          onClick={() => setShowZoomModal(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h4 className="font-semibold text-[rgba(0,0,0,0.88)]">拡大プレビュー</h4>
                <span className="text-sm text-gray-500">
                  {currentPage} / {totalPages}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="size-5" />
                </button>
                <button
                  onClick={() => setShowZoomModal(false)}
                  className="ml-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors"
                >
                  閉じる
                </button>
              </div>
            </div>
            
            {/* Zoomed Document Content */}
            <div className="p-8 bg-gray-100">
              <img 
                src={invoicePreview}
                alt="請求書プレビュー（拡大）"
                className="w-full h-auto max-w-3xl mx-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}