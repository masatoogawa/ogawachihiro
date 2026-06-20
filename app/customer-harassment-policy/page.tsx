import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "カスタマーハラスメントに対する基本方針 | 行政書士小川千尋事務所",
  description:
    "行政書士小川千尋事務所におけるカスタマーハラスメントに対する基本方針および、カスタマーハラスメント防止に向けた取り組みについてご案内します。",
}

export default function CustomerHarassmentPolicy() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
          行政書士小川千尋事務所「カスタマーハラスメントに対する基本方針」
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">１．はじめに</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                当事務所は、「行政書士法に基づく誠実な業務遂行と、お客様の正当な権利保護の実現」という基本理念の下、安全・安心な行政手続きサービスを提供するため、お客様の要望に真摯に対応し、より満足度の高いサービスの提供に向けて取り組んでいます。また、お客様からお寄せいただくご意見・ご要望は、当事務所のサービスの改善・品質向上において、大変貴重な機会と考えております。
              </p>
              <p>
                一方、一部のお客様の要求や言動の中には、従業者の人格を否定する暴言、脅迫、暴力など、従業者の尊厳を傷つけるものもございます。こうした社会通念に照らして著しく不当である行為は、従業者の就業環境を悪化させるだけでなく、安全・安心なサービスの提供にも悪影響を及ぼしかねない重大な問題であります。
              </p>
              <p>
                従業者の安全な就業環境を確保することで、従業者が安心して業務に取り組むことが可能となり、ひいては、お客様との関係をより良いものとすることにつながると考え、行政書士小川千尋事務所における「カスタマーハラスメントに対する基本方針」を定めました。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              ２．当事務所におけるカスタマーハラスメントの定義
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                当事務所では、カスタマーハラスメントを「お客様から従業者に対して行われる著しい迷惑行為であって、従業者の就業環境を害するもの」と定義します。
              </p>
              <p>
                具体的には、以下のような行為を指します。あくまで例示であり、これらに限られるものではありません。
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>暴力行為</li>
                <li>暴言・侮辱・誹謗中傷</li>
                <li>威嚇・脅迫</li>
                <li>従業者の人格の否定・差別的な発言</li>
                <li>土下座の要求</li>
                <li>長時間の拘束</li>
                <li>社会通念上相当な範囲を超える対応の強要</li>
                <li>合理性を欠く不当・過剰な要求</li>
                <li>当事務所や従業者の信用を棄損させる内容や個人情報等をSNS等へ投稿する行為</li>
                <li>
                  従業者へのセクシャルハラスメント、SOGI※ハラスメント、その他ハラスメント、つきまとい行為　など
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                ※「SOGI」（ソジ）は、性的指向（sexual orientation）と性自認（gender identity）の頭文字をとった略称
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              ３．カスタマーハラスメントへの対応（社内）
            </h2>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>カスタマーハラスメントを受けた場合、従業者の心身の安全と健康の確保を最優先とします。</li>
              <li>
                カスタマーハラスメントに関する知識・対処方法の習得（外部研修の受講や情報収集）に継続的に取り組みます。
              </li>
              <li>
                カスタマーハラスメントに関する相談窓口の設置や警察・弁護士等の連携など体制を整備します。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              ４．カスタマーハラスメントへの対応（社外）
            </h2>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>
                問題解決に当たっては、合理的かつ理性的な話し合いを行いますが、当事務所でカスタマーハラスメントに該当すると判断した場合、対応を打ち切り、以降のサービスの提供をお断りする場合があります。
              </li>
              <li>さらに、悪質と判断した場合、警察・弁護士等と連携の上、毅然と対応します。</li>
            </ul>
          </section>

          <p className="text-right">
            作成日 2026年6月22日　行政書士小川千尋事務所　代表　小川千尋
          </p>

          <section className="border-t pt-8">
            <h2 className="text-xl font-bold mb-4 text-sky-700">
              【重要】カスタマーハラスメント防止に向けた取り組みについて
            </h2>
            <div className="bg-sky-50 p-6 rounded-lg space-y-4 leading-relaxed">
              <p>当事務所をご利用いただき、誠にありがとうございます。</p>
              <p>
                「東京都カスタマーハラスメント防止条例」に則り、当社ではお客様に安全・安心なサービスを提供するとともに、従業者が健康で安心して働ける環境を確保するため、カスタマーハラスメント防止対策を強化いたします。
              </p>
              <p>
                その一環として、本日より、事実関係の正確な把握および悪質なハラスメント行為への対策として、ご面談時の会話内容や状況を録音させていただく場合がございます。
              </p>
              <p>
                取得した録音データは、万が一の不適切な事案発生時の事実確認・対応のみに適切に使用し、法令に基づき厳重に管理いたします。
              </p>
              <p>
                今後とも、お客様により良いサービスを提供できるよう努めてまいりますので、何卒ご理解とご協力を賜りますようお願い申し上げます。
              </p>
              <p className="text-right">
                2026年6月22日　行政書士小川千尋事務所　代表　小川千尋
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
