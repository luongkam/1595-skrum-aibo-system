import { Upload, File, Link as LinkIcon } from 'lucide-react';

export function CompanyInfoForm() {
  return (
    <div className="p-8 overflow-auto">
      <div className="max-w-5xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">あなたの情報</h3>
        <p className="text-sm text-gray-500 mb-8">法人の基本情報と各種書類をアップロードして管理します</p>

        {/* 履歴事項証明書 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <File className="size-5 text-blue-600" />
            履歴事項証明書
          </h4>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">会社番号</label>
              <input
                type="text"
                placeholder="0000-00-000000"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">法人番号</label>
              <input
                type="text"
                placeholder="0000000000000"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">事業目的</label>
              <textarea
                placeholder="商流に関する情報"
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">本店</label>
              <textarea
                placeholder="地域、商圏"
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">役員構成</label>
              <textarea
                placeholder="同族等の情報"
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">設立年月日</label>
              <input
                type="date"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">ファイル選択またはここにドラッグ&ドロップ</p>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">URLを貼り付け</button>
          </div>
        </div>

        {/* 定款 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <File className="size-5 text-blue-600" />
            定款
          </h4>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">事業目的</label>
            <textarea
              placeholder="商流に関する情報"
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">ファイル選択またはここにドラッグ&ドロップ</p>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">URLを貼り付け</button>
          </div>
        </div>

        {/* 会社案内 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <File className="size-5 text-blue-600" />
            会社案内
          </h4>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">主要取引先</label>
              <textarea
                placeholder="商流に関する情報"
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">主要仕入先</label>
              <textarea
                placeholder="商流に関する情報"
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">取引銀行</label>
              <textarea
                placeholder="メガ、地銀、信用金庫等"
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">社長あいさつ</label>
              <textarea
                placeholder="理念、ビジョン"
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">ファイル選択またはここにドラッグ&ドロップ</p>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">URLを貼り付け</button>
          </div>
        </div>

        {/* 決算書 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <File className="size-5 text-blue-600" />
            決算書
          </h4>
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">貸借対照表</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="資産"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="負債"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">損益計算書</label>
              <input
                type="text"
                placeholder="損益"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">法人概要説明書</label>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="社員数"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="月別売上"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="業種"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">別表16（減価償却）</label>
                <input
                  type="text"
                  placeholder="固定資産、損益"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">別表２（株主明細）</label>
                <input
                  type="text"
                  placeholder="株主構成"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">繰越欠損金</label>
                <input
                  type="text"
                  placeholder="損益の歴史"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">銀行借入金残高</label>
                <input
                  type="text"
                  placeholder="資金繰り"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">ファイル選択またはここにドラッグ&ドロップ</p>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">URLを貼り付け</button>
          </div>
        </div>

        {/* 返済表 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <File className="size-5 text-blue-600" />
            返済表
          </h4>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">返済額・残高確認</label>
            <input
              type="text"
              placeholder="資金繰り"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">ファイル選択またはここにドラッグ&ドロップ</p>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">URLを貼り付け</button>
          </div>
        </div>

        {/* 賃金台帳 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <File className="size-5 text-blue-600" />
            賃金台帳
          </h4>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">社員数</label>
              <input
                type="text"
                placeholder="社員数"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">人件費</label>
              <input
                type="text"
                placeholder="人件費総額、人件費率"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">ファイル選択またはここにドラッグ&ドロップ</p>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">URLを貼り付け</button>
          </div>
        </div>

        {/* 社員名簿 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <File className="size-5 text-blue-600" />
            社員名簿
          </h4>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">年代構成、男女構成</label>
            <input
              type="text"
              placeholder="年代構成、男女構成"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">ファイル選択またはここにドラッグ&ドロップ</p>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">URLを貼り付け</button>
          </div>
        </div>

        {/* 商品カタログ */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <File className="size-5 text-blue-600" />
            商品カタログ
          </h4>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">商材、商流</label>
            <textarea
              placeholder="商材、商流に関する情報"
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">ファイル選択またはここにドラッグ&ドロップ</p>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">URLを貼り付け</button>
          </div>
        </div>

        {/* 商品単価表 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <File className="size-5 text-blue-600" />
            商品単価表
          </h4>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">商品種類、価格</label>
            <textarea
              placeholder="見積、請求に使用する商品種類、価格"
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">ファイル選択またはここにドラッグ&ドロップ</p>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">URLを貼り付け</button>
          </div>
        </div>

        {/* URL */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <LinkIcon className="size-5 text-blue-600" />
            URL
          </h4>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">その他会社情報</label>
            <input
              type="url"
              placeholder="https://example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* 保存ボタン */}
        <div className="flex justify-end gap-3">
          <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
            キャンセル
          </button>
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            すべて保存
          </button>
        </div>
      </div>
    </div>
  );
}
