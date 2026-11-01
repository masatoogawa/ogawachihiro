"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Globe, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParamiraiBanner from "@/components/paramirai-banner"

const strengths = [
  {
    titleJa: "期限と書類に強い",
    titleEn: "Strong with deadlines and documents",
    bodyJa:
      "特許事務所で18年、期限管理や書類の取りまとめを担ってきました。締切のある補助金の申請も、準備の段取りから一緒に進めます。",
    bodyEn:
      "For 18 years at a patent firm, I was responsible for deadline management and compiling documents. For subsidy applications with deadlines, too, we work together from planning the preparation onward.",
  },
  {
    titleJa: "電子申請の準備からお手伝い",
    titleEn: "Support with electronic filing, from setup to reporting",
    bodyJa:
      "補助金の多くは、GビズIDとJグランツによる電子申請です。アカウントの取得から申請後の報告まで、流れに沿ってご案内します。",
    bodyEn:
      "Most subsidies are applied for electronically via gBizID and jGrants. We guide you step by step, from obtaining an account to reporting after the application.",
  },
  {
    titleJa: "弁理士の先生との連携",
    titleEn: "Collaboration with patent attorneys",
    bodyJa:
      "外国出願の助成金など、出願と一緒に進める申請もお引き受けします。特許や商標の出願は弁理士の先生のご専門ですが、助成金の書類は私が行政書士としてお手伝いします。弁理士の先生のご紹介もできます。",
    bodyEn:
      "We also handle applications that proceed alongside a filing, such as grants for foreign filings. Patent and trademark filings are the domain of patent attorneys, but as an administrative scrivener I help with the grant paperwork. I can also introduce you to a patent attorney.",
  },
]

export default function Home() {
  const { t, language } = useLanguage()

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
                "補助金・助成金の申請を中心に、経営者の皆様の手続きをお手伝いする行政書士事務所です。",
                "We are an Administrative Scrivener (Gyoseishoshi) office that helps business owners with their procedures, focusing on subsidy and grant applications.",
              )}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-sky-700 mb-3">
              {t("お気軽にご相談下さい。", "Please feel free to contact us.")}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6">
              {t(
                "特許事務所で18年、期限と書類に向き合ってきた経験をもとに、補助金の申請書づくりから、著作権・契約、許認可まで、皆様の手続きを確実に進めます。",
                "Drawing on 18 years of handling deadlines and documents at a patent firm, we move your procedures forward reliably—from preparing subsidy applications to copyright, contracts, and licenses/permits.",
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
        <ul className="space-y-4">
          {strengths.map((item) => (
            <li key={item.titleJa} className="bg-sky-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-1 text-sky-700">{t(item.titleJa, item.titleEn)}</h3>
              <p className="text-sm sm:text-base leading-relaxed">{t(item.bodyJa, item.bodyEn)}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* 主な取扱業務 */}
      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-sky-700">
          {t("主な取扱業務", "Main Services")}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-sky-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-sky-700">
              {t("補助金・助成金の申請", "Subsidy and grant applications")}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {t(
                "東京都の外国出願の助成金、デジタル化の補助金など。申請できる制度の確認から、書類の作成、電子申請、採択後の報告までお手伝いします。",
                "Such as the Tokyo Metropolitan Government's grant for foreign patent/trademark filings and subsidies for digitalization. We help from checking which programs you are eligible for, through preparing documents and electronic filing, to reporting after approval.",
              )}
            </p>
            <div className="mt-2">
              <Link href="/subsidy-flow" className="text-sm text-sky-600 hover:underline">
                {t("申請の流れを見る →", "See the application process →")}
              </Link>
            </div>
          </div>
          <div className="bg-sky-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-sky-700">
              {t("著作権・各種契約書の作成", "Copyright and drafting of various contracts")}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {t(
                "業務委託契約書、秘密保持契約（NDA）、ライセンス契約など各種契約書の作成・チェック、文化庁への著作権登録",
                "Drafting and reviewing service agreements, NDAs, licensing agreements and other contracts, and copyright registration with the Agency for Cultural Affairs",
              )}
            </p>
          </div>
          <div className="bg-sky-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-sky-700">
              {t("許認可申請・法人設立", "License/permit applications and company incorporation")}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {t(
                "新事業を始めるための各種許認可申請、株式会社・合同会社等の設立手続き",
                "Various license/permit applications for starting a new business, and incorporation of stock companies, LLCs, etc.",
              )}
            </p>
          </div>
          <div className="bg-sky-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-sky-700">
              {t(
                "農産物のブランド保護（品種登録・GI）",
                "Brand protection for agricultural products (plant variety registration and GI)",
              )}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {t(
                "農産物のブランドを守る「種苗法に基づく品種登録出願」や「地理的表示（GI）保護制度」の申請支援",
                "Support for plant variety registration applications and GI protection applications that safeguard agricultural product brands",
              )}
            </p>
          </div>
        </div>
        <div className="text-right mt-3">
          <Link href="/administrative-services" className="text-sm text-sky-600 hover:underline">
            {t("取扱業務・費用目安を詳しく見る →", "See services and fee guide →")}
          </Link>
        </div>
      </div>

      <ParamiraiBanner className="mb-8" />

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
            <p className="flex items-center gap-2 mb-4 md:mb-6">
              <Globe className="text-sky-600 shrink-0" />
              <a href="https://ogawachihiro-office.com" className="text-sky-600 hover:underline break-all">
                https://ogawachihiro-office.com
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
            <a
              href="https://www.linkedin.com/in/chihiro-ogawa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 text-sm text-sky-700 hover:underline"
            >
              <Linkedin size={18} aria-hidden="true" />
              {t("LinkedIn（発信しています）", "LinkedIn (I post updates here)")}
              <ExternalLink size={14} aria-hidden="true" />
              <span className="sr-only">{t("（別ウィンドウで開く）", "(opens in a new window)")}</span>
            </a>
          </div>
        </div>

        {language !== "en" && (
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
        )}
      </div>
    </div>
  )
}
