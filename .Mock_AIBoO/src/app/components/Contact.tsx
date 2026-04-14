import { Mail, User, Building2, Phone } from 'lucide-react';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';

interface UserInfo {
  name: string;
  email: string;
  company: string;
  phone: string;
}

export function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // プリセットされたユーザー情報
  const userInfo: UserInfo = {
    name: '山田 太郎',
    email: 'yamada.taro@example.com',
    company: '株式会社サンプル',
    phone: '03-1234-5678'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!subject.trim() || !message.trim()) {
      toast.error('件名とお問い合わせ内容を入力してください', {
        position: 'top-center',
        duration: 2000,
      });
      return;
    }

    setIsSubmitting(true);

    // 送信処理をシミュレート
    const toastId = toast.loading('送信中...', {
      position: 'top-center',
      style: {
        fontSize: '16px',
        padding: '16px 24px',
      }
    });

    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.dismiss(toastId);

    toast.success('送信しました。サポートセンターから24時間以内にご連絡いたします。', {
      position: 'top-center',
      duration: 4000,
      style: {
        fontSize: '16px',
        padding: '16px 24px',
      }
    });

    setSubject('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <div className="h-full overflow-auto">
      <Toaster />

      <div className="px-[60px] py-12">
        {/* User Info Card */}
        <div className="bg-white rounded-lg border border-[#d9d9d9] p-6 mb-8">
          <h3 className="text-lg font-semibold text-[rgba(0,0,0,0.88)] mb-4">
            ご契約者情報
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <User className="size-5 text-[#1677ff] shrink-0" />
              <div>
                <p className="text-xs text-[rgba(0,0,0,0.45)] mb-0.5">お名前</p>
                <p className="text-sm text-[rgba(0,0,0,0.88)]">{userInfo.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="size-5 text-[#1677ff] shrink-0" />
              <div>
                <p className="text-xs text-[rgba(0,0,0,0.45)] mb-0.5">メールアドレス</p>
                <p className="text-sm text-[rgba(0,0,0,0.88)]">{userInfo.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building2 className="size-5 text-[#1677ff] shrink-0" />
              <div>
                <p className="text-xs text-[rgba(0,0,0,0.45)] mb-0.5">会社名</p>
                <p className="text-sm text-[rgba(0,0,0,0.88)]">{userInfo.company}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="size-5 text-[#1677ff] shrink-0" />
              <div>
                <p className="text-xs text-[rgba(0,0,0,0.45)] mb-0.5">電話番号</p>
                <p className="text-sm text-[rgba(0,0,0,0.88)]">{userInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-[#d9d9d9] p-6">
          <h3 className="text-lg font-semibold text-[rgba(0,0,0,0.88)] mb-6">
            お問い合わせ内容
          </h3>

          {/* Subject */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[rgba(0,0,0,0.88)] mb-2">
              件名 <span className="text-[#ff4d4f]">*</span>
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="お問い合わせの件名を入力してください"
              className="w-full px-4 py-2.5 border border-[#d9d9d9] rounded-lg text-sm outline-none focus:border-[#1677ff]"
              disabled={isSubmitting}
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[rgba(0,0,0,0.88)] mb-2">
              お問い合わせ内容 <span className="text-[#ff4d4f]">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="お問い合わせ内容を詳しく入力してください"
              className="w-full h-40 px-4 py-2.5 border border-[#d9d9d9] rounded-lg text-sm outline-none focus:border-[#1677ff] resize-none"
              disabled={isSubmitting}
            />
          </div>

          {/* Info Text */}
          <div className="mb-6 p-4 bg-[#e6f4ff] rounded-lg">
            <p className="text-sm text-[rgba(0,0,0,0.65)]">
              <strong>サポート受付時間：</strong> 平日 9:00〜18:00
            </p>
            <p className="text-sm text-[rgba(0,0,0,0.65)] mt-1">
              お問い合わせいただいた内容には、24時間以内にご返信いたします。
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-2.5 rounded-lg bg-[#1677ff] text-white hover:bg-[#0958d9] text-base font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-8 bg-[#fafafa] rounded-lg p-6">
          <h4 className="text-sm font-semibold text-[rgba(0,0,0,0.88)] mb-3">
            お問い合わせ前にご確認ください
          </h4>
          <ul className="space-y-2 text-sm text-[rgba(0,0,0,0.65)]">
            <li>• よくある質問（FAQ）もご参照ください</li>
            <li>• 緊急のお問い合わせは電話でのご連絡をお願いいたします</li>
            <li>• サービスに関するご要望やフィードバックもお待ちしております</li>
          </ul>
        </div>
      </div>
    </div>
  );
}