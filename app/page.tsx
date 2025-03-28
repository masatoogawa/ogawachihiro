"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center py-8">
        <div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1742622444017.jpg-BotGw37o5mgGlkDZwAB7wQTHeGWSS2.jpeg"
            alt={t("小川千尋 行政書士", "Chihiro Ogawa Administrative Scrivener")}
            width={500}
            height={750}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-sky-600 mb-4">
            {t("外国人の在留資格申請・法人設立サポート", "Immigration Support & Business Establishment")}
          </h1>
          <p className="text-lg md:text-xl text-sky-700 mb-6">{t("お気軽にご相談下さい", "Please contact me!")}</p>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-4 text-sky-700">{t("取扱業務", "Specialty field")}</h2>
            <ul className="space-y-4 list-disc pl-5">
              <li>
                {t(
                  "外国人の方の在留支援（在留資格・VISA、帰化申請）",
                  "Immigration Support for Foreign People (Residence status/VISA, naturalization)",
                )}
                <p className="text-sm text-gray-500 mt-1">
                  {t(
                    "※取次行政書士資格を取得中のため、入管業務は2025年7月以降開始予定です。",
                    "※VISA can be ordered from July 2025",
                  )}
                </p>
              </li>
              <li>{t("法人設立", "Establishment of Corporation")}</li>
              <li>
                {t(
                  "知的財産権（特許権等の産業財産権、著作権）",
                  "Intellectual Property Rights (Industrial Properties, Copyrights)",
                )}
              </li>
            </ul>
          </div>

          {/* 英語対応の案内 */}
          <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500 mb-6">
            <p className="font-medium text-sky-800">
              {t(
                "英語対応可能です。お気軽にお問い合わせください。",
                "English support available. Feel free to contact us.",
              )}
            </p>
          </div>

          <Link href="/contact">
            <Button className="w-full bg-sky-600 hover:bg-sky-500 mb-4">
              {t("無料相談のご予約・お問い合わせはこちら", "Free Consultation Booking & Contact")}
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-sky-700">{t("事務所案内", "Office")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
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
              <Globe className="text-sky-600" />
              <a href="https://ogawachihiro-office.com" className="text-sky-600 hover:underline">
                https://ogawachihiro-office.com
              </a>
            </p>
            <p className="flex items-center gap-2 mb-3">
              <Mail className="text-sky-600" />
              <a href="mailto:info@ogawachihiro-office.com" className="text-sky-600 hover:underline">
                info@ogawachihiro-office.com
              </a>
            </p>
            <p className="flex items-center gap-2 mb-6">
              <Phone className="text-sky-600" />
              <a href="tel:0908874-2921" className="text-sky-600 hover:underline">
                {t("090-8874-2921", "81-90-8874-2921")}
              </a>
            </p>
          </div>
          <div>
            {/* 公式LINE QRコード */}
            <div className="bg-sky-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-3 text-sky-700">{t("公式LINE", "Official LINE")}</h3>
              <div className="flex justify-center mb-3">
                <Image
                  src="/placeholder.svg?height=120&width=120&text=LINE+QR"
                  alt="LINE QR Code"
                  width={120}
                  height={120}
                  className="border p-2 bg-white"
                />
              </div>
              <p className="text-sm text-sky-800">
                {t("LINEでもお気軽にお問い合わせください。", "Feel free to contact us via LINE as well.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

