import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resendインスタンスを初期化（環境変数からAPIキーを取得）
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    console.log('送信開始:', { name, email, subject }); // デバッグログを追加

    // Resendを使ってメールを送信
    const { data, error } = await resend.emails.send({
      from: 'お問い合わせフォーム <info@ogawachihiro-office.com>',
      to: 'info@ogawachihiro-office.com', // 送信先
      subject: `[お問い合わせ] ${subject}`,
      text: `名前: ${name}\nメールアドレス: ${email}\n電話番号: ${phone || 'なし'}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2>ウェブサイトからのお問い合わせ</h2>
          <p><strong>名前:</strong> ${name}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>電話番号:</strong> ${phone || 'なし'}</p>
          <p><strong>件名:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>メッセージ:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
      replyTo: email, // 返信先を問い合わせ者のメールアドレスに設定
    });

    // より詳細なエラーログ
    if (error) {
      console.error('Resend API エラー詳細:', JSON.stringify(error));
      return NextResponse.json(
        { error: 'メールの送信に失敗しました', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メールの送信に失敗しました' },
      { status: 500 }
    );
  }
} 