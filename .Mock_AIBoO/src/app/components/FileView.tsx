import { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

// Mock data for the table
const generateMockData = () => [
  { id: 1, fileName: '令和8年1月度請求書.pdf', client: '山田商事株式会社', summary: '令和8年1月分の商品納品に関する請求書類。商品コード：A-123、数量:500個、単価：1,200円、合計金額：600,000円（税込660,000円）。', type: '請求書', fileDate: '2026-01-15', recordDate: '2026-01-10' },
  { id: 2, fileName: '基幹システム開発見積書.xlsx', client: '東京技術開発株式会社', summary: '既存基幹システムの全面リニューアルに関する見積もり資料。開発期間：6ヶ月、要員：SE3名・PG5名、開発費用：2,800万円。', type: '見積書', fileDate: '2026-01-18', recordDate: '2026-01-12' },
  { id: 3, fileName: '業務委託基本契約書.pdf', client: '日本グローバル商事株式会社', summary: '令和8年度の業務委託に関する基本契約書一式。契約期間：2026年4月1日から2027年3月31日まで。業務内容：システム運用保守。', type: '契約書', fileDate: '2026-01-20', recordDate: '2026-01-15' },
  { id: 4, fileName: 'コーポレートサイト改修提案書.pdf', client: '佐藤デザイン株式会社', summary: '企業ホームページの全面リニューアル提案書。現状分析、競合調査、新デザインコンセプト、サイトマップを含む。', type: '提案書', fileDate: '2026-01-22', recordDate: '2026-01-18' },
  { id: 5, fileName: '商品納品確認書.pdf', client: '山田商事株式会社', summary: '発注番号：PO-2026-0115に基づく商品納品の確認書類。納品日：2026年1月20日、納品場所：東京倉庫。', type: '納品書', fileDate: '2026-01-25', recordDate: '2026-01-20' },
  { id: 6, fileName: 'コンサルティング業務領収書.pdf', client: '東京技術開発株式会社', summary: '令和7年12月分のコンサルティング業務に関する領収書。稼働時間：120時間、単価：15,000円、合計：1,800,000円。', type: '領収書', fileDate: '2026-01-28', recordDate: '2026-01-22' },
  { id: 7, fileName: '月次業務進捗報告書.xlsx', client: '日本グローバル商事株式会社', summary: '令和8年1月度の業務進捗状況および成果報告書。主要KPI達成率：95%、新規案件獲得数：12件。', type: '報告書', fileDate: '2026-02-01', recordDate: '2026-01-25' },
  { id: 8, fileName: 'ECサイト構築企画提案書.pdf', client: '佐藤デザイン株式会社', summary: 'オンラインショップ新規構築の企画提案書。市場調査、ターゲット分析、機能要件を含む。', type: '提案書', fileDate: '2026-02-03', recordDate: '2026-01-28' },
  { id: 9, fileName: '出張旅費精算書_大阪.pdf', client: '山田商事株式会社', summary: '大阪支店訪問に伴う出張経費の精算書類。出張期間：2026年1月28日〜30日（2泊3日）。', type: '経費精算書', fileDate: '2026-02-05', recordDate: '2026-02-01' },
  { id: 10, fileName: 'ウェブサイト更新作業見積.xlsx', client: '東京技術開発株式会社', summary: 'ホームページのコンテンツ追加およびデザイン変更に関する見積書。新規ページ5ページ追加。', type: 'ホームページ', fileDate: '2026-02-08', recordDate: '2026-02-03' },
  { id: 11, fileName: '春季新商品企画書.pdf', client: '日本グローバル商事株式会社', summary: '2026年春の新商品ラインナップ企画書。商品コンセプト、ターゲット層分析、価格戦略を含む。', type: '企画書', fileDate: '2026-02-10', recordDate: '2026-02-05' },
  { id: 12, fileName: '在庫管理月次レポート.xlsx', client: '佐藤デザイン株式会社', summary: '令和8年1月末時点での商品在庫状況一覧表。総在庫点数：3,450点、在庫金額：1,250万円。', type: '管理表', fileDate: '2026-02-12', recordDate: '2026-02-08' },
  { id: 13, fileName: 'サーバー設備投資稟議書.pdf', client: '山田商事株式会社', summary: '新規サーバー導入に関する稟議書。導入機器：Dell PowerEdge R750、メモリ：128GB。', type: '稟議書', fileDate: '2026-02-15', recordDate: '2026-02-10' },
  { id: 14, fileName: '顧客情報データベース.xlsx', client: '東京技術開発株式会社', summary: '令和8年1月度の顧客情報管理データベース。登録顧客数：1,250社、新規顧客：45社。', type: '顧客リスト', fileDate: '2026-02-17', recordDate: '2026-02-12' },
  { id: 15, fileName: '定例会議議事録_2月度.docx', client: '日本グローバル商事株式会社', summary: '2026年2月の定例会議議事録。参加者：12名、議題：前月実績報告、今月の重点施策。', type: '議事録', fileDate: '2026-02-20', recordDate: '2026-02-15' },
  { id: 16, fileName: '令和8年度予算計画書.xlsx', client: '佐藤デザイン株式会社', summary: '2026年度（令和8年度）の予算配分と投資計画書。売上目標：8億円（前年比120%）。', type: '予算書', fileDate: '2026-02-22', recordDate: '2026-02-18' },
];

export function FileView() {
  const [data] = useState(generateMockData());
  const [filteredData, setFilteredData] = useState(generateMockData());
  
  // Get unique clients and types from data
  const uniqueClients = Array.from(new Set(data.map(item => item.client))).sort();
  const uniqueTypes = Array.from(new Set(data.map(item => item.type))).sort();
  
  // Refs for date inputs
  const timestampStartRef = useRef<HTMLInputElement>(null);
  const timestampEndRef = useRef<HTMLInputElement>(null);
  const documentStartRef = useRef<HTMLInputElement>(null);
  const documentEndRef = useRef<HTMLInputElement>(null);
  
  // Filter states
  const [fileNameFilter, setFileNameFilter] = useState('');
  const [contentFilter, setContentFilter] = useState('');
  const [timestampStartDate, setTimestampStartDate] = useState('');
  const [timestampEndDate, setTimestampEndDate] = useState('');
  const [documentStartDate, setDocumentStartDate] = useState('');
  const [documentEndDate, setDocumentEndDate] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Modal state for summary
  const [selectedSummary, setSelectedSummary] = useState<{ title: string; content: string } | null>(null);

  // Download modal state
  const [downloadFile, setDownloadFile] = useState<{ fileName: string } | null>(null);
  const [downloadPath, setDownloadPath] = useState('C:\\Users\\Downloads');

  // File detail modal state
  const [selectedFileDetail, setSelectedFileDetail] = useState<{
    fileName: string;
    client: string;
    summary: string;
    type: string;
    fileDate: string;
    recordDate: string;
  } | null>(null);

  // Checkbox states
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);

  // Column width states
  const [columnWidths, setColumnWidths] = useState({
    checkbox: 48,
    fileName: 200,
    client: 180,
    summary: 350,
    type: 100,
    fileDate: 120,
    recordDate: 140,
    actions: 48
  });

  // Resizing states
  const [resizingColumn, setResizingColumn] = useState<string | null>(null);
  const [resizeStartX, setResizeStartX] = useState(0);
  const [resizeStartWidth, setResizeStartWidth] = useState(0);

  // Handle column resize start
  const handleResizeStart = (e: React.MouseEvent, columnKey: string, currentWidth: number) => {
    e.preventDefault();
    setResizingColumn(columnKey);
    setResizeStartX(e.clientX);
    setResizeStartWidth(currentWidth);
  };

  // Handle column resize move
  const handleResizeMove = (e: MouseEvent) => {
    if (!resizingColumn) return;
    
    const diff = e.clientX - resizeStartX;
    const newWidth = Math.max(50, resizeStartWidth + diff);
    
    setColumnWidths(prev => ({
      ...prev,
      [resizingColumn]: newWidth
    }));
  };

  // Handle column resize end
  const handleResizeEnd = () => {
    setResizingColumn(null);
  };

  // Add event listeners for resize
  useEffect(() => {
    if (resizingColumn) {
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);
      return () => {
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
      };
    }
  }, [resizingColumn, resizeStartX, resizeStartWidth]);

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems(new Set());
    } else {
      const allIds = new Set(currentData.map(item => item.id));
      setSelectedItems(allIds);
    }
    setSelectAll(!selectAll);
  };

  // Handle individual checkbox
  const handleSelectItem = (id: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
    setSelectAll(newSelected.size === currentData.length);
  };

  // Handle file download
  const handleDownload = (fileName: string) => {
    setDownloadFile({ fileName });
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = [...data];

    if (fileNameFilter) {
      filtered = filtered.filter(item => 
        item.fileName.toLowerCase().includes(fileNameFilter.toLowerCase())
      );
    }

    if (contentFilter) {
      filtered = filtered.filter(item => 
        item.fileName.toLowerCase().includes(contentFilter.toLowerCase()) ||
        item.client.toLowerCase().includes(contentFilter.toLowerCase())
      );
    }

    if (timestampStartDate) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.fileDate);
        const startDate = new Date(timestampStartDate);
        return itemDate >= startDate;
      });
    }
    if (timestampEndDate) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.fileDate);
        const endDate = new Date(timestampEndDate);
        return itemDate <= endDate;
      });
    }

    if (documentStartDate) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.recordDate);
        const startDate = new Date(documentStartDate);
        return itemDate >= startDate;
      });
    }
    if (documentEndDate) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.recordDate);
        const endDate = new Date(documentEndDate);
        return itemDate <= endDate;
      });
    }

    if (clientFilter) {
      filtered = filtered.filter(item => 
        item.client.toLowerCase().includes(clientFilter.toLowerCase())
      );
    }

    if (typeFilter) {
      filtered = filtered.filter(item => 
        item.type.toLowerCase().includes(typeFilter.toLowerCase())
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Reset filters
  const resetFilters = () => {
    setFileNameFilter('');
    setContentFilter('');
    setTimestampStartDate('');
    setTimestampEndDate('');
    setDocumentStartDate('');
    setDocumentEndDate('');
    setClientFilter('');
    setTypeFilter('');
    setFilteredData(data);
    setCurrentPage(1);
  };

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="h-full overflow-auto">
      {/* Search Form */}
      <div className="px-[60px] py-12">
        <div className="bg-[#f1f1f1] rounded-lg p-8 space-y-6">
          {/* Row 1: File name and Content search */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-base">ファイル名で探す</label>
              <div className="bg-white rounded-lg px-3 py-2.5 flex items-center gap-2 shadow-[0px_0px_0px_2px_rgba(5,145,255,0.1)]">
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <path d="M11 13H5C4.44772 13 4 12.5523 4 12V4C4 3.44772 4.44772 3 5 3H9L13 7V12C13 12.5523 12.5523 13 11 13Z" stroke="black" strokeOpacity="0.45" strokeWidth="1.2" />
                  <path d="M9 3V7H13" stroke="black" strokeOpacity="0.45" strokeWidth="1.2" />
                </svg>
                <input
                  type="text"
                  placeholder="ファイル名の一部を入力"
                  value={fileNameFilter}
                  onChange={(e) => setFileNameFilter(e.target.value)}
                  className="flex-1 text-base outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base">記載内容で探す</label>
              <div className="bg-white rounded-lg px-3 py-2.5 flex items-center gap-2 shadow-[0px_0px_0px_2px_rgba(5,145,255,0.1)]">
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <rect x="3" y="2" width="10" height="12" rx="1" stroke="black" strokeOpacity="0.45" strokeWidth="1.2" />
                </svg>
                <input
                  type="text"
                  placeholder="入力してください"
                  value={contentFilter}
                  onChange={(e) => setContentFilter(e.target.value)}
                  className="flex-1 text-base outline-none"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Timestamp date range */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-base">タイムスタンプで探す</label>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg px-4 py-2.5 flex items-center gap-2 border border-[#d9d9d9] flex-1">
                  <input
                    type="date"
                    value={timestampStartDate}
                    onChange={(e) => setTimestampStartDate(e.target.value)}
                    className="flex-1 text-base outline-none text-[#b3b3b3]"
                    ref={timestampStartRef}
                  />
                </div>
                <span className="text-base">〜</span>
                <div className="bg-white rounded-lg px-4 py-2.5 flex items-center gap-2 border border-[#d9d9d9] flex-1">
                  <input
                    type="date"
                    value={timestampEndDate}
                    onChange={(e) => setTimestampEndDate(e.target.value)}
                    className="flex-1 text-base outline-none text-[#b3b3b3]"
                    ref={timestampEndRef}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base">書類内に記載された日付で探す</label>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg px-4 py-2.5 flex items-center gap-2 border border-[#d9d9d9] flex-1">
                  <input
                    type="date"
                    value={documentStartDate}
                    onChange={(e) => setDocumentStartDate(e.target.value)}
                    className="flex-1 text-base outline-none text-[#b3b3b3]"
                    ref={documentStartRef}
                  />
                </div>
                <span className="text-base">〜</span>
                <div className="bg-white rounded-lg px-4 py-2.5 flex items-center gap-2 border border-[#d9d9d9] flex-1">
                  <input
                    type="date"
                    value={documentEndDate}
                    onChange={(e) => setDocumentEndDate(e.target.value)}
                    className="flex-1 text-base outline-none text-[#b3b3b3]"
                    ref={documentEndRef}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Client and Type */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-base">取引先名で探す</label>
              <div className="bg-white rounded-lg px-4 py-2.5 flex items-center gap-2 border border-[#d9d9d9]">
                <select
                  value={clientFilter}
                  onChange={(e) => setClientFilter(e.target.value)}
                  className="flex-1 text-base outline-none"
                >
                  <option value="">選択してください</option>
                  {uniqueClients.map(client => (
                    <option key={client} value={client}>{client}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base">種類で探す</label>
              <div className="bg-white rounded-lg px-4 py-2.5 flex items-center gap-2 border border-[#d9d9d9]">
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="flex-1 text-base outline-none"
                >
                  <option value="">選択してください</option>
                  {uniqueTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-end pt-4">
            <button
              onClick={resetFilters}
              className="px-6 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50"
            >
              リセット
            </button>
            <button
              onClick={applyFilters}
              className="px-6 py-2 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9]"
            >
              検索
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
          <div style={{ overflowX: 'auto', width: '100%' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', minWidth: '780px' }}>
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '100px' }} />
                <col style={{ width: '200px' }} />
                <col style={{ width: '70px' }} />
                <col style={{ width: '100px' }} />
                <col style={{ width: '100px' }} />
                <col style={{ width: '50px' }} />
              </colgroup>
              <thead className="bg-[#f5f5f5] border-b border-[#eaeaea]">
                <tr>
                  <th className="p-3 text-center text-sm font-medium text-[#343a40]">
                    <input type="checkbox" className="size-4" checked={selectAll} onChange={handleSelectAll} />
                  </th>
                  <th className="text-left p-3 text-sm font-medium text-[#343a40]">
                    ファイル名
                  </th>
                  <th className="text-left p-3 text-sm font-medium text-[#343a40]">
                    取引先名
                  </th>
                  <th className="text-left p-3 text-sm font-medium text-[#343a40]">
                    概要
                  </th>
                  <th className="text-left p-3 text-sm font-medium text-[#343a40]">
                    種類
                  </th>
                  <th className="text-left p-3 text-sm font-medium text-[#343a40]">
                    ファイル日付
                  </th>
                  <th className="text-left p-3 text-sm font-medium text-[#343a40]">
                    記載日付
                  </th>
                  <th className="p-3 text-center text-sm font-medium text-[#343a40]"></th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}>
                    <td className="p-3 text-center">
                      <input type="checkbox" className="size-4" checked={selectedItems.has(item.id)} onChange={() => handleSelectItem(item.id)} />
                    </td>
                    <td className="p-3 text-sm">
                      <button
                        onClick={() => setSelectedFileDetail({
                          fileName: item.fileName,
                          client: item.client,
                          summary: item.summary,
                          type: item.type,
                          fileDate: item.fileDate,
                          recordDate: item.recordDate
                        })}
                        className="text-left w-full hover:text-[#1677ff] transition-colors truncate block text-[#6c757d] hover:underline"
                        title={item.fileName}
                      >
                        {item.fileName}
                      </button>
                    </td>
                    <td className="p-3 text-sm">
                      <button
                        onClick={() => setSelectedFileDetail({
                          fileName: item.fileName,
                          client: item.client,
                          summary: item.summary,
                          type: item.type,
                          fileDate: item.fileDate,
                          recordDate: item.recordDate
                        })}
                        className="text-left w-full hover:text-[#1677ff] transition-colors truncate block text-[#6c757d] hover:underline"
                        title={item.client}
                      >
                        {item.client}
                      </button>
                    </td>
                    <td className="p-3 text-sm text-[#6c757d]">
                      <button
                        onClick={() => setSelectedSummary({ title: item.fileName, content: item.summary })}
                        className="text-left w-full hover:text-[#1677ff] transition-colors truncate block"
                        title={item.summary}
                      >
                        {item.summary}
                      </button>
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#1677ff] text-white text-xs whitespace-nowrap">
                        {item.type}
                      </span>
                    </td>
                    <td className="p-3 text-sm text-[#6c757d] whitespace-nowrap">{item.fileDate}</td>
                    <td className="p-3 text-sm text-[#6c757d] whitespace-nowrap">{item.recordDate}</td>
                    <td className="p-3 text-center">
                      <button className="text-[#6c757d] hover:text-[#343a40]" onClick={() => handleDownload(item.fileName)}>
                        <Download className="size-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-[#eaeaea] px-6 py-4 flex items-center justify-between">
            <p className="text-sm text-[#6c757d]">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} entries
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === page
                      ? 'bg-[#ff4d4f] text-white border-[#ff4d4f]'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Modal */}
      {selectedSummary && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedSummary(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
              <h2 className="text-xl font-semibold text-[#343a40] pr-8">{selectedSummary.title}</h2>
              <button
                onClick={() => setSelectedSummary(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <p className="text-base text-[#6c757d] leading-relaxed whitespace-pre-wrap">{selectedSummary.content}</p>
            </div>
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex justify-end">
              <button
                onClick={() => setSelectedSummary(null)}
                className="px-6 py-2 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9]"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Download Modal */}
      {downloadFile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setDownloadFile(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white border-b border-gray-200 p-6 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Download className="size-6 text-[#1677ff]" />
                <h2 className="text-xl font-semibold text-[#343a40]">ファイルをダウンロード</h2>
              </div>
              <button
                onClick={() => setDownloadFile(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#343a40]">ファイル名</label>
                <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                  <p className="text-base text-[#6c757d]">{downloadFile.fileName}</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#343a40]">保存先のパス</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={downloadPath}
                    onChange={(e) => setDownloadPath(e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-base outline-none focus:border-[#1677ff] focus:ring-2 focus:ring-[#1677ff]/20"
                    placeholder="C:\Users\Downloads"
                  />
                  <button
                    onClick={() => {
                      // フォルダ選択のモック
                      const mockPath = 'C:\\Users\\Documents';
                      setDownloadPath(mockPath);
                    }}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg text-base bg-white hover:bg-gray-50 transition-colors whitespace-nowrap"
                  >
                    参照...
                  </button>
                </div>
                <p className="text-xs text-gray-500">ファイルを保存するフォルダを指定してください</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>保存先:</strong> {downloadPath}\\{downloadFile.fileName}
                </p>
              </div>
            </div>
            <div className="bg-gray-50 border-t border-gray-200 p-6 flex justify-end gap-3">
              <button
                onClick={() => setDownloadFile(null)}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                キャンセル
              </button>
              <button
                onClick={() => {
                  alert(`ダウンロード完了:\n${downloadPath}\\${downloadFile.fileName}`);
                  setDownloadFile(null);
                }}
                className="px-6 py-2.5 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9] transition-colors flex items-center gap-2"
              >
                <Download className="size-4" />
                ダウンロード
              </button>
            </div>
          </div>
        </div>
      )}

      {/* File Detail Modal */}
      {selectedFileDetail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedFileDetail(null)}>
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[85vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold text-[#343a40] pr-8">ファイル詳細</h2>
                <button
                  onClick={() => setSelectedFileDetail(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#343a40]">ファイル名</label>
                  <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                    <p className="text-base text-[#6c757d]">{selectedFileDetail.fileName}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#343a40]">取引先名</label>
                  <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                    <p className="text-base text-[#6c757d]">{selectedFileDetail.client}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#343a40]">種類</label>
                  <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1677ff] text-white text-sm">
                      {selectedFileDetail.type}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#343a40]">ファイル日付</label>
                  <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                    <p className="text-base text-[#6c757d]">{selectedFileDetail.fileDate}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#343a40]">記載された日付</label>
                <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                  <p className="text-base text-[#6c757d]">{selectedFileDetail.recordDate}</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#343a40]">概要</label>
                <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                  <p className="text-base text-[#6c757d] leading-relaxed">{selectedFileDetail.summary}</p>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 flex justify-end gap-3">
              <button
                onClick={() => setSelectedFileDetail(null)}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                閉じる
              </button>
              <button
                onClick={() => {
                  setSelectedFileDetail(null);
                  setDownloadFile({ fileName: selectedFileDetail.fileName });
                }}
                className="px-6 py-2.5 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9] transition-colors flex items-center gap-2"
              >
                <Download className="size-4" />
                ダウンロード
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}