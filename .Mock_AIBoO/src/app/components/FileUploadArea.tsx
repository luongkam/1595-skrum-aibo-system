import { Upload, Link } from 'lucide-react';
import { useRef, useState } from 'react';

interface FileUploadAreaProps {
  onFileSelect: (file: File) => void;
  onUrlSubmit: (url: string) => void;
  isProcessing?: boolean;
}

export function FileUploadArea({ onFileSelect, onUrlSubmit, isProcessing = false }: FileUploadAreaProps) {
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [url, setUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDropAreaClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.url-input-area')) {
      fileInputRef.current?.click();
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onUrlSubmit(url.trim());
      setUrl('');
      setShowUrlInput(false);
    }
  };

  return (
    <div 
      className="bg-[#f1f1f1] rounded-lg p-6 min-h-[180px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#e8e8e8] transition-colors"
      onClick={handleDropAreaClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
        accept=".pdf,.xlsx,.xls,.docx,.doc"
      />
      
      {isProcessing ? (
        <>
          <div className="size-12 border-4 border-[#1677ff] border-t-transparent rounded-full animate-spin mb-3" />
          <p className="text-sm font-semibold text-[#666]">AI解析中...</p>
        </>
      ) : (
        <>
          <Upload className="size-12 text-[#666] mb-4" />
          <div className="bg-white rounded-lg px-6 py-2 mb-4">
            <p className="text-sm font-semibold text-[#666]">ファイルを選択またはここにドラッグ＆ドロップ</p>
          </div>

          {/* URL Input Toggle */}
          <div className="url-input-area w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            {!showUrlInput ? (
              <button
                onClick={() => setShowUrlInput(true)}
                className="flex items-center gap-2 text-sm text-[#1677ff] hover:text-[#0958d9] font-medium mx-auto"
              >
                <Link className="size-4" />
                URLを貼り付け
              </button>
            ) : (
              <form onSubmit={handleUrlSubmit} className="flex gap-2 w-full">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/document.pdf"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1677ff] text-white rounded-lg text-sm font-medium hover:bg-[#0958d9] transition-colors"
                >
                  送信
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowUrlInput(false);
                    setUrl('');
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  キャンセル
                </button>
              </form>
            )}
          </div>
        </>
      )}
    </div>
  );
}
