import { FileText, TrendingUp, Clock, User, CheckCircle2, Calendar, Bell, Zap, Target, ArrowRight, Upload, BarChart3, Sparkles } from 'lucide-react';
import { AIBoOCharacter } from './AIBoOCharacter';

interface QuickActionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  color: string;
}

function QuickAction({ icon, title, description, onClick, color }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className={`${color} p-6 rounded-xl hover:shadow-lg transition-all duration-200 text-left group border border-gray-200`}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white rounded-lg group-hover:scale-110 transition-transform shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: string;
  color: string;
}

function StatCard({ icon, label, value, trend, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 ${color} rounded-lg`}>
          {icon}
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
            <TrendingUp className="size-4" />
            <span>{trend}</span>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

interface RecentActivityProps {
  icon: React.ReactNode;
  title: string;
  time: string;
  type: string;
}

function RecentActivity({ icon, title, time, type }: RecentActivityProps) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="p-2 bg-blue-50 rounded-lg">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{type}</p>
      </div>
      <div className="text-xs text-gray-400">{time}</div>
    </div>
  );
}

export function Dashboard({ 
  onNavigate 
}: { 
  onNavigate: (page: 'upload' | 'view' | 'template', template?: string) => void 
}) {
  const currentHour = new Date().getHours();
  const greeting = 
    currentHour < 12 ? 'おはようございます' :
    currentHour < 18 ? 'こんにちは' :
    'こんばんは';

  // あなたの情報の入力完了度
  const completionRate = 42; // 0-100
  const totalItems = 11;
  const completedItems = Math.round((completionRate / 100) * totalItems);

  // 入力完了度に応じた表示設定
  const getCompletionStatus = (rate: number) => {
    if (rate <= 50) {
      return {
        color: 'from-red-500 to-red-600',
        bgColor: 'bg-red-100',
        textColor: 'text-red-600',
        mood: 'angry' as const,
        shouldBlink: true
      };
    } else if (rate <= 80) {
      return {
        color: 'from-yellow-500 to-yellow-600',
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-600',
        mood: 'neutral' as const,
        shouldBlink: true
      };
    } else {
      return {
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-600',
        mood: 'happy' as const,
        shouldBlink: false
      };
    }
  };

  const status = getCompletionStatus(completionRate);

  return (
    <div className="h-full overflow-auto bg-[#f5f5f5]">
      <div className="px-[60px] py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {greeting}、山田さん
          </h1>
          <p className="text-gray-600">
            本日も効率的な業務をサポートします
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className={`bg-white rounded-xl border-2 p-6 hover:shadow-md transition-shadow ${status.shouldBlink ? 'animate-pulse' : ''} ${status.shouldBlink && completionRate <= 50 ? 'border-red-500' : status.shouldBlink ? 'border-yellow-500' : 'border-gray-200'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 ${status.bgColor} rounded-lg`}>
                <User className={`size-6 ${status.textColor}`} />
              </div>
              <div className="scale-[0.4] origin-left">
                <AIBoOCharacter mood={status.mood} hidePointer />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">あなたの情報</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">入力完了度</span>
                <span className={`font-semibold ${status.textColor}`}>{completionRate}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`bg-gradient-to-r ${status.color} h-2.5 rounded-full transition-all duration-500`} style={{ width: `${completionRate}%` }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {totalItems}項目中 {completedItems}項目完了
              </div>
            </div>
          </div>
          <StatCard
            icon={<FileText className="size-6 text-blue-600" />}
            label="総ファイル数"
            value="8,892"
            trend="+12%"
            color="bg-blue-100"
          />
          <StatCard
            icon={<CheckCircle2 className="size-6 text-green-600" />}
            label="完了タスク"
            value="156"
            trend="+8%"
            color="bg-green-100"
          />
          <StatCard
            icon={<Clock className="size-6 text-orange-600" />}
            label="未完了タスク"
            value="23"
            color="bg-orange-100"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">クイックアクション</h2>
          <div className="grid grid-cols-3 gap-4">
            <QuickAction
              icon={<Upload className="size-6 text-blue-600" />}
              title="ファイル投入"
              description="新しいファイルをアップロード"
              onClick={() => onNavigate('upload')}
              color="bg-gradient-to-br from-blue-100 to-blue-200"
            />
            <QuickAction
              icon={<FileText className="size-6 text-green-600" />}
              title="提案書作成"
              description="AIで提案書を自動生成"
              onClick={() => onNavigate('template', 'proposal')}
              color="bg-gradient-to-br from-green-100 to-green-200"
            />
            <QuickAction
              icon={<BarChart3 className="size-6 text-purple-600" />}
              title="競合分析"
              description="市場動向をAI分析"
              onClick={() => onNavigate('template', 'competitor')}
              color="bg-gradient-to-br from-purple-100 to-purple-200"
            />
          </div>
        </div>

        {/* Recent Activity & Tips */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="size-5 text-gray-600" />
              <h2 className="text-lg font-bold text-gray-900">最近のアクティビティ</h2>
            </div>
            <div className="space-y-2">
              <RecentActivity
                icon={<FileText className="size-5 text-blue-600" />}
                title="提案書_202602.pdf"
                time="2時間前"
                type="AIテンプレート"
              />
              <RecentActivity
                icon={<Upload className="size-5 text-green-600" />}
                title="見積資料.xlsx"
                time="5時間前"
                type="ファイル投入"
              />
              <RecentActivity
                icon={<FileText className="size-5 text-purple-600" />}
                title="競合分析レポート.pdf"
                time="1日前"
                type="AIテンプレート"
              />
              <RecentActivity
                icon={<FileText className="size-5 text-orange-600" />}
                title="請求書_INV-001.pdf"
                time="2日前"
                type="AIテンプレート"
              />
              <RecentActivity
                icon={<Upload className="size-5 text-teal-600" />}
                title="取引先情報.csv"
                time="3日前"
                type="ファイル投入"
              />
            </div>
          </div>

          {/* Tips & Suggestions */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="size-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">ヒント＆おすすめ</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">💡 効率化のコツ</h3>
                <p className="text-sm text-gray-700">
                  複数のファイルを一度にアップロードして、まとめて処理することで時間を節約できます。
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🎯 今週のおすすめ</h3>
                <p className="text-sm text-gray-700">
                  競合分析機能を使って、市場の最新トレンドをチェックしましょう。
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">✨ 新機能</h3>
                <p className="text-sm text-gray-700">
                  AIテンプレートにプロンプト修正機能が追加されました。より精度の高い文書作成が可能です。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-sm text-green-700 font-medium">
              すべてのシステムが正常に稼働しています
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}