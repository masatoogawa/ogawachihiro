"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">{t("お問い合わせ", "Contact Us")}</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="mb-6">
            {t(
              "無料相談（初回１時間）のご予約やお問い合わせは、こちらで受け付けております。",
              "We accept reservations for free consultations (first hour) and inquiries here.",
            )}
          </p>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h2 className="font-semibold mb-3 text-sky-700">{t("連絡先情報", "Contact Information")}</h2>
            <div className="space-y-3">
              <p className="flex items-start gap-2">
                <MapPin className="text-sky-600 shrink-0 mt-1" />
                <span>
                  {t(
                    "〒151-0072 東京都渋谷区幡ヶ谷1丁目2番2号 京王幡ヶ谷ビル4F 4-15",
                    "4-15, Keio Hatagaya Building 4F, 1-2-2 Hatagaya, Shibuya-ku, Tokyo 151-0072, Japan",
                  )}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-sky-600" />
                <a href="tel:0908874-2921" className="text-sky-600 hover:underline">
                  {t("090-8874-2921", "81-90-8874-2921")}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-sky-600" />
                <a href="mailto:info@ogawachihiro-office.com" className="text-sky-600 hover:underline">
                  info@ogawachihiro-office.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h2 className="font-semibold mb-3 text-sky-700">{t("公式LINE", "Official LINE")}</h2>
            <div className="flex justify-center mb-3">
              <Image src="/line-qr.jpeg" alt="LINE QR Code" width={150} height={150} className="border p-2" />
            </div>
            <p className="text-sm text-gray-600">
              {t("LINEでもお気軽にお問い合わせください。", "Feel free to contact us via LINE as well.")}
            </p>
          </div>
        </div>

        <form className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="name">
              {t("お名前", "Name")} <span className="text-red-500">*</span>
            </Label>
            <Input id="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              {t("メールアドレス", "Email")} <span className="text-red-500">*</span>
            </Label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t("電話番号", "Phone Number")}</Label>
            <Input id="phone" type="tel" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">
              {t("件名", "Subject")} <span className="text-red-500">*</span>
            </Label>
            <Input id="subject" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              {t("お問い合わせ内容", "Message")} <span className="text-red-500">*</span>
            </Label>
            <Textarea id="message" rows={6} required />
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="bg-sky-600 hover:bg-sky-500 px-8">
              {t("送信する", "Submit")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

