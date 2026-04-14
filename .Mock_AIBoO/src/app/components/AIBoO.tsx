import { useState } from 'react';
import { LayoutDashboard, Upload, FolderSearch, Sparkles, Settings, Mail, ChevronRight, ChevronDown, User, LogOut } from 'lucide-react';
import { FileUpload } from './FileUpload';
import { FileView } from './FileView';
import { AITemplate } from './AITemplate';
import { Contact } from './Contact';
import { Dashboard } from './Dashboard';
import { Settings as SettingsPage } from './Settings';
import { Logo, LogoIcon } from './Logo';
import { toast, Toaster } from 'sonner';
import { AIBoOCharacter } from './AIBoOCharacter';

type Page = 'dashboard' | 'upload' | 'view' | 'template' | 'settings' | 'contact';
type TemplateType = 'proposal' | 'estimate' | 'invoice' | 'competitor' | null;
type SettingType = 'userInfo' | 'aiTemplate' | 'account' | 'notification' | 'security' | null;

export function AIBoO() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isTemplateExpanded, setIsTemplateExpanded] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(null);
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState<SettingType>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // あなたの情報の入力完了度
  const completionRate = 42; // 0-100

  // ユーザー情報
  const userInfo = {
    name: '山田 太郎',
    email: 'yamada.taro@example.com',
    company: '株式会社サンプル'
  };

  // AIBoOロボットの表情を入力完了度に応じて設定
  const getAIBoOMood = (): 'happy' | 'neutral' | 'angry' => {
    if (completionRate <= 50) return 'angry';
    if (completionRate <= 80) return 'neutral';
    return 'happy';
  };

  const handleTemplateClick = () => {
    setIsTemplateExpanded(!isTemplateExpanded);
    if (!isTemplateExpanded) {
      setCurrentPage('template');
      setSelectedSetting(null); // 設定の選択状態をリセット
      setIsSettingsExpanded(false); // 設定メニューを閉じる
    }
  };

  const handleSubMenuClick = (template: TemplateType) => {
    setSelectedTemplate(template);
    setCurrentPage('template');
    setSelectedSetting(null); // 設定の選択状態をリセット
    setIsSettingsExpanded(false); // 設定メニューを閉じる
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowUserMenu(false);
    toast.success('ログアウトしました', {
      position: 'top-center',
      duration: 2000,
    });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast.success('ログインしました', {
      position: 'top-center',
      duration: 2000,
    });
  };

  const handleNavigate = (page: 'upload' | 'view' | 'template', template?: string) => {
    if (page === 'template' && template) {
      const templateMap: { [key: string]: TemplateType } = {
        'proposal': 'proposal',
        'estimate': 'estimate',
        'invoice': 'invoice',
        'competitor': 'competitor'
      };
      setSelectedTemplate(templateMap[template]);
      setCurrentPage('template');
      setIsTemplateExpanded(true);
      setSelectedSetting(null); // 設定の選択状態をリセット
      setIsSettingsExpanded(false); // 設定メニューを閉じる
    } else {
      setCurrentPage(page);
      setSelectedTemplate(null); // テンプレートの選択状態をリセット
      setIsTemplateExpanded(false); // テンプレートメニューを閉じる
      setSelectedSetting(null); // 設定の選択状態をリセット
      setIsSettingsExpanded(false); // 設定メニューを閉じる
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex size-full bg-[#f5f5f5] items-center justify-center">
        <Toaster position="top-center" offset="45%" />
        <div className="bg-white rounded-lg shadow-lg p-8 w-[400px]">
          <div className="flex justify-center mb-6">
            <LogoIcon size={48} />
          </div>
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>
          <p className="text-center text-[rgba(0,0,0,0.65)] mb-6">
            AiBoOへようこそ。ログインしてください。
          </p>
          <button
            onClick={handleLogin}
            className="w-full px-6 py-3 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9] text-base font-medium transition-colors"
          >
            ログイン
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex size-full bg-[#f5f5f5]">
      <Toaster position="top-center" />
      
      {/* Sidebar */}
      <div className="bg-white flex flex-col gap-2 h-full items-start pl-4 py-1 shrink-0 w-[280px] border-r border-gray-200 overflow-y-auto">
        {/* Logo with AIBoO Character */}
        <div className="px-1 pt-4 pb-2 flex items-center gap-1">
          <Logo size="md" />
          <div className="scale-[0.5] origin-left -ml-3 -mt-6">
            <AIBoOCharacter mood={getAIBoOMood()} />
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-2 w-full px-1">
          <button
            onClick={() => {
              setCurrentPage('dashboard');
              setSelectedTemplate(null);
              setIsTemplateExpanded(false);
              setSelectedSetting(null);
              setIsSettingsExpanded(false);
            }}
            className={`h-10 rounded-lg flex items-center px-6 gap-2 ${
              currentPage === 'dashboard' ? 'bg-[#e6f4ff]' : ''
            }`}
          >
            <LayoutDashboard className={`size-4 ${currentPage === 'dashboard' ? 'text-[#1677ff]' : ''}`} />
            <p className={`text-base ${currentPage === 'dashboard' ? 'text-[#1677ff]' : 'text-black/88'}`}>
              ダッシュボード
            </p>
          </button>
          
          <button
            onClick={() => handleNavigate('upload')}
            className={`h-10 rounded-lg flex items-center px-6 gap-2 ${
              currentPage === 'upload' ? 'bg-[#e6f4ff]' : ''
            }`}
          >
            <Upload className={`size-4 ${currentPage === 'upload' ? 'text-[#1677ff]' : ''}`} />
            <p className={`text-base ${currentPage === 'upload' ? 'text-[#1677ff]' : 'text-black/88'}`}>
              ファイル投入
            </p>
          </button>
          
          <button
            onClick={() => handleNavigate('view')}
            className={`h-10 rounded-lg flex items-center px-6 gap-2 ${
              currentPage === 'view' ? 'bg-[#e6f4ff]' : ''
            }`}
          >
            <FolderSearch className={`size-4 ${currentPage === 'view' ? 'text-[#1677ff]' : ''}`} />
            <p className={`text-base ${currentPage === 'view' ? 'text-[#1677ff]' : 'text-black/88'}`}>
              ファイルをみる
            </p>
          </button>
        </div>

        {/* AI Template Menu with Submenu */}
        <div className="flex flex-col w-full px-1 mt-2">
          <button
            onClick={handleTemplateClick}
            className={`h-10 rounded-lg flex items-center px-6 gap-2 ${
              currentPage === 'template' ? 'bg-[#e6f4ff]' : ''
            }`}
          >
            <Sparkles className={`size-4 ${currentPage === 'template' ? 'text-[#1677ff]' : ''}`} />
            <p className={`flex-1 text-left text-base ${currentPage === 'template' ? 'text-[#1677ff]' : 'text-black/88'}`}>
              AIテンプレート
            </p>
            {isTemplateExpanded ? (
              <ChevronDown className="size-3.5 text-black/88" />
            ) : (
              <ChevronRight className="size-3.5 text-black/88" />
            )}
          </button>

          {/* Submenu */}
          {isTemplateExpanded && (
            <div className="flex flex-col gap-1 mt-1 ml-6 pr-1">
              <button
                onClick={() => handleNavigate('template', 'proposal')}
                className={`h-9 rounded-lg flex items-center px-6 ${
                  selectedTemplate === 'proposal' ? 'bg-[#e6f4ff]' : ''
                }`}
              >
                <p className={`text-base ${selectedTemplate === 'proposal' ? 'text-[#1677ff]' : 'text-black/65'}`}>
                  提案書をつくる
                </p>
              </button>
              <button
                onClick={() => handleNavigate('template', 'estimate')}
                className={`h-9 rounded-lg flex items-center px-6 ${
                  selectedTemplate === 'estimate' ? 'bg-[#e6f4ff]' : ''
                }`}
              >
                <p className={`text-base ${selectedTemplate === 'estimate' ? 'text-[#1677ff]' : 'text-black/65'}`}>
                  見積書をつくる
                </p>
              </button>
              <button
                onClick={() => handleNavigate('template', 'invoice')}
                className={`h-9 rounded-lg flex items-center px-6 ${
                  selectedTemplate === 'invoice' ? 'bg-[#e6f4ff]' : ''
                }`}
              >
                <p className={`text-base ${selectedTemplate === 'invoice' ? 'text-[#1677ff]' : 'text-black/65'}`}>
                  請求書をつくる
                </p>
              </button>
              <button
                onClick={() => handleNavigate('template', 'competitor')}
                className={`h-9 rounded-lg flex items-center px-6 ${
                  selectedTemplate === 'competitor' ? 'bg-[#e6f4ff]' : ''
                }`}
              >
                <p className={`text-base ${selectedTemplate === 'competitor' ? 'text-[#1677ff]' : 'text-black/65'}`}>
                  競合の動きを知る
                </p>
              </button>
            </div>
          )}
        </div>

        {/* Settings Menu with Submenu */}
        <div className="flex flex-col w-full px-1 mt-2">
          <button
            onClick={() => {
              setIsSettingsExpanded(!isSettingsExpanded);
              if (!isSettingsExpanded) {
                setCurrentPage('settings');
                setSelectedTemplate(null);
                setIsTemplateExpanded(false);
              }
            }}
            className={`h-10 rounded-lg flex items-center px-6 gap-2 ${
              currentPage === 'settings' ? 'bg-[#e6f4ff]' : ''
            }`}
          >
            <Settings className={`size-4 ${currentPage === 'settings' ? 'text-[#1677ff]' : ''}`} />
            <p className={`flex-1 text-left text-base ${currentPage === 'settings' ? 'text-[#1677ff]' : 'text-black/88'}`}>
              設定
            </p>
            {isSettingsExpanded ? (
              <ChevronDown className="size-3.5 text-black/88" />
            ) : (
              <ChevronRight className="size-3.5 text-black/88" />
            )}
          </button>

          {/* Submenu */}
          {isSettingsExpanded && (
            <div className="flex flex-col gap-1 mt-1 ml-6 pr-1">
              <button
                onClick={() => {
                  setSelectedSetting('userInfo');
                  setCurrentPage('settings');
                  setSelectedTemplate(null);
                  setIsTemplateExpanded(false);
                }}
                className={`h-9 rounded-lg flex items-center px-6 ${
                  selectedSetting === 'userInfo' ? 'bg-[#e6f4ff]' : ''
                }`}
              >
                <p className={`text-base ${selectedSetting === 'userInfo' ? 'text-[#1677ff]' : 'text-black/65'}`}>
                  あなたの情報
                </p>
              </button>
              <button
                onClick={() => {
                  setSelectedSetting('aiTemplate');
                  setCurrentPage('settings');
                  setSelectedTemplate(null);
                  setIsTemplateExpanded(false);
                }}
                className={`h-9 rounded-lg flex items-center px-6 ${
                  selectedSetting === 'aiTemplate' ? 'bg-[#e6f4ff]' : ''
                }`}
              >
                <p className={`text-base ${selectedSetting === 'aiTemplate' ? 'text-[#1677ff]' : 'text-black/65'}`}>
                  AIテンプレート
                </p>
              </button>
              <button
                onClick={() => {
                  setSelectedSetting('account');
                  setCurrentPage('settings');
                  setSelectedTemplate(null);
                  setIsTemplateExpanded(false);
                }}
                className={`h-9 rounded-lg flex items-center px-6 ${
                  selectedSetting === 'account' ? 'bg-[#e6f4ff]' : ''
                }`}
              >
                <p className={`text-base ${selectedSetting === 'account' ? 'text-[#1677ff]' : 'text-black/65'}`}>
                  プラン
                </p>
              </button>
              <button
                onClick={() => {
                  setSelectedSetting('notification');
                  setCurrentPage('settings');
                  setSelectedTemplate(null);
                  setIsTemplateExpanded(false);
                }}
                className={`h-9 rounded-lg flex items-center px-6 ${
                  selectedSetting === 'notification' ? 'bg-[#e6f4ff]' : ''
                }`}
              >
                <p className={`text-base ${selectedSetting === 'notification' ? 'text-[#1677ff]' : 'text-black/65'}`}>
                  通知設定
                </p>
              </button>
              <button
                onClick={() => {
                  setSelectedSetting('security');
                  setCurrentPage('settings');
                  setSelectedTemplate(null);
                  setIsTemplateExpanded(false);
                }}
                className={`h-9 rounded-lg flex items-center px-6 ${
                  selectedSetting === 'security' ? 'bg-[#e6f4ff]' : ''
                }`}
              >
                <p className={`text-base ${selectedSetting === 'security' ? 'text-[#1677ff]' : 'text-black/65'}`}>
                  セキュリティ設定
                </p>
              </button>
            </div>
          )}
        </div>

        {/* Bottom menu items */}
        <div className="flex flex-col gap-2 w-full px-1 pb-4">
          <button
            onClick={() => {
              setCurrentPage('contact');
              setSelectedTemplate(null);
              setIsTemplateExpanded(false);
              setSelectedSetting(null);
              setIsSettingsExpanded(false);
            }}
            className={`h-10 rounded-lg flex items-center px-6 gap-2 ${
              currentPage === 'contact' ? 'bg-[#e6f4ff]' : ''
            }`}
          >
            <Mail className={`size-4 ${currentPage === 'contact' ? 'text-[#1677ff]' : ''}`} />
            <p className={`text-base ${currentPage === 'contact' ? 'text-[#1677ff]' : 'text-black/88'}`}>
              お問合せ
            </p>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Top Header Bar - Blue section only */}
        <div className="bg-[#d6e7ff] h-16 px-6 flex items-center justify-between border-b border-gray-200 shrink-0">
          <div className="flex items-center gap-3">
            {currentPage === 'dashboard' && (
              <h1 className="text-2xl font-bold text-[#1677ff]">ダッシュボード</h1>
            )}
            {currentPage === 'upload' && (
              <h1 className="text-2xl font-bold text-[#1677ff]">ファイルを投入</h1>
            )}
            {currentPage === 'view' && (
              <h1 className="text-2xl font-bold text-[#1677ff]">ファイルをみる</h1>
            )}
            {currentPage === 'template' && (
              selectedTemplate ? (
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-[#1677ff] to-[#4096ff] text-white px-6 py-2.5 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold">
                      {selectedTemplate === 'proposal' ? '提案書をつくる'
                        : selectedTemplate === 'estimate' ? '見積書をつくる'
                        : selectedTemplate === 'invoice' ? '請求書をつくる'
                        : '競合の動きを知る'}
                    </h1>
                  </div>
                </div>
              ) : (
                <h1 className="text-2xl font-bold text-[#1677ff]">AIテンプレート</h1>
              )
            )}
            {currentPage === 'settings' && (
              <>
                <span className="text-2xl font-bold text-[#1677ff]">設定</span>
                {selectedSetting && (
                  <>
                    <ChevronRight className="size-5 text-[#1677ff]" />
                    <span className="text-2xl font-bold text-[#1677ff]">
                      {selectedSetting === 'userInfo' && 'あなたの情報'}
                      {selectedSetting === 'aiTemplate' && 'AIテンプレート設定'}
                      {selectedSetting === 'account' && 'プラン設定'}
                      {selectedSetting === 'notification' && '通知設定'}
                      {selectedSetting === 'security' && 'セキュリティ設定'}
                    </span>
                  </>
                )}
              </>
            )}
            {currentPage === 'contact' && (
              <h1 className="text-2xl font-bold text-[#1677ff]">お問合せ</h1>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors"
            >
              <User className="size-5 text-[#1677ff]" />
              <span className="text-sm text-[rgba(0,0,0,0.88)]">{userInfo.name}</span>
              <ChevronDown className="size-4 text-[rgba(0,0,0,0.45)]" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-semibold text-[rgba(0,0,0,0.88)]">{userInfo.name}</p>
                  <p className="text-xs text-[rgba(0,0,0,0.45)]">{userInfo.email}</p>
                  <p className="text-xs text-[rgba(0,0,0,0.45)]">{userInfo.company}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-sm text-[rgba(0,0,0,0.88)] hover:bg-gray-100 flex items-center gap-2"
                >
                  <LogOut className="size-4" />
                  ログアウト
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-hidden">
          {currentPage === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
          {currentPage === 'upload' && <FileUpload />}
          {currentPage === 'view' && <FileView />}
          {currentPage === 'template' && <AITemplate selectedTemplate={selectedTemplate} />}
          {currentPage === 'settings' && <SettingsPage selectedSetting={selectedSetting} />}
          {currentPage === 'contact' && <Contact />}
        </div>
      </div>
    </div>
  );
}