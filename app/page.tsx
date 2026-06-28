"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md mb-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center py-4 md:py-8">
          <div>
            <Image
              src="/portrait.webp"
              alt={t("小川千尋 行政書士", "Chihiro Ogawa Administrative Scrivener")}
              width={500}
              height={714}
              className="rounded-lg shadow-md mx-auto object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-600 mb-3 md:mb-4 leading-tight">
              {t(
                "知的財産分野に強く、弁理士との連携体制も整った行政書士事務所です。",
                "An administrative scrivener office with strong expertise in intellectual property and an established partnership network with patent attorneys.",
              )}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-sky-700 mb-3">
              {t("お気軽にご相談下さい。", "Please feel free to contact us.")}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6">
              {t(
                "18年の知財事務と管理職経験をベースに、皆様のビジネスと組織を堅実に支えます。",
                "Backed by 18 years of IP practice and management experience, we provide solid support for your business and organization.",
              )}
            </p>

            <Link href="/contact">
              <Button className="w-full bg-sky-600 hover:bg-sky-500 mb-2 text-sm sm:text-base py-2 h-auto">
                {t("無料相談のご予約・お問い合わせはこちら", "Free Consultation Booking & Contact")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 当所の強み */}
      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-sky-700">
          {t("当所の強み", "Our Strengths")}
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          {t(
            "特許事務所で18年間、特許庁への手続きや徹底した期限管理、そして管理職として事務フローの構築や業務効率化を統括してきました。この「知的財産に対する深い知識」と、長年のキャリアで培った「組織の事務リスクをコントロールするマネジメント力」を活かし、経営者の皆様と弁理士の先生方をスマートにバックアップいたします。",
            "For 18 years at a patent firm, I handled procedures with the Japan Patent Office and rigorous deadline management, and as a manager I oversaw the design of administrative workflows and operational efficiency. Leveraging this deep knowledge of intellectual property and the management skills to control an organization's administrative risks, cultivated over my long career, I smartly support business owners and patent attorneys.",
          )}
        </p>
      </div>

      {/* 主な取扱業務 */}
      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-sky-700">
          {t("主な取扱業務", "Main Services")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-sky-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-sky-700">
              <Link href="/administrative-services" className="hover:underline">
                {t("行政書士実務部", "Administrative Scrivener Practice Division")}
              </Link>
            </h3>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>{t("著作権ライセンス・各種契約書作成", "Copyright licensing and drafting of various contracts")}</li>
              <li>{t("許認可申請・法人設立", "License/permit applications and company incorporation")}</li>
              <li>
                {t(
                  "農業知財（種苗法品種登録・GI地理的表示）の権利保護",
                  "Protection of agricultural IP (plant variety registration and GI geographical indications)",
                )}
              </li>
            </ul>
            <Link
              href="/administrative-services"
              className="inline-block mt-3 text-sm text-sky-600 hover:underline"
            >
              {t("詳しく見る →", "Learn more →")}
            </Link>
          </div>
          <div className="bg-sky-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-sky-700">
              <Link href="/ip-management" className="hover:underline">
                {t("知財事務マネジメント部", "IP Administration Management Division")}
              </Link>
            </h3>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>
                {t(
                  "特許事務所向け知財事務アウトソーシング（期限管理・書類起案等）",
                  "IP administration outsourcing for patent firms (deadline management, document drafting, etc.)",
                )}
              </li>
              <li>
                {t(
                  "知財事務業務のフロー効率化・改善（マニュアル化・AI活用）",
                  "Workflow efficiency and improvement for IP administration (manualization, AI utilization)",
                )}
              </li>
              <li>
                {t(
                  "弁理士と連携した各種補助金申請（ものづくり補助金等）",
                  "Various subsidy applications in cooperation with patent attorneys (Monozukuri Subsidy, etc.)",
                )}
              </li>
            </ul>
            <Link
              href="/ip-management"
              className="inline-block mt-3 text-sm text-sky-600 hover:underline"
            >
              {t("詳しく見る →", "Learn more →")}
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-sky-700">
          {t("事務所案内", "Office")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="text-sm sm:text-base">
            <p className="flex items-start gap-2 mb-3">
              <MapPin className="text-sky-600 shrink-0 mt-1" />
              <span>
                {t(
                  "〒151-0072 東京都渋谷区幡ヶ谷1丁目2番2号 京王幡ヶ谷ビル4F 4-15",
                  "4-15, Keio Hatagaya Building 4F, 1-2-2 Hatagaya, Shibuya-ku, Tokyo 151-0072, Japan",
                )}
              </span>
            </p>
            <p className="flex items-center gap-2 mb-3">
              <Globe className="text-sky-600 shrink-0" />
              <a href="https://ogawachihiro-office.com" className="text-sky-600 hover:underline break-all">
                https://ogawachihiro-office.com
              </a>
            </p>
            <p className="flex items-center gap-2 mb-4 md:mb-6">
              <Mail className="text-sky-600 shrink-0" />
              <a href="mailto:info@ogawachihiro-office.com" className="text-sky-600 hover:underline break-all">
                info@ogawachihiro-office.com
              </a>
            </p>
          </div>
          <div>
            {/* 公式LINE QRコード */}
            <div className="bg-sky-50 p-3 sm:p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2 sm:mb-3 text-sky-700">{t("公式LINE", "Official LINE")}</h3>
              <div className="flex justify-center mb-2 sm:mb-3">
                <Image
                  src="/line-qr.jpeg"
                  alt="LINE QR Code"
                  width={120}
                  height={120}
                  className="border p-2 bg-white"
                />
              </div>
              <p className="text-xs sm:text-sm text-sky-800">
                {t("LINEでもお気軽にお問い合わせください。", "Feel free to contact us via LINE as well.")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t text-right flex flex-wrap justify-end gap-x-4 gap-y-2">
          <Link
            href="/customer-harassment-policy"
            className="text-sm text-sky-600 hover:underline"
          >
            カスタマーハラスメントに対する基本方針
          </Link>
          <Link
            href="/customer-harassment-prevention"
            className="text-sm text-sky-600 hover:underline"
          >
            カスタマーハラスメント防止に向けた取り組みについて
          </Link>
        </div>
      </div>
    </div>
  )
}
