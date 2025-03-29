"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import { RubyText } from "@/components/ruby-text"

export default function Contact() {
  const { t, isEasyJapanese } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
          {isEasyJapanese ? (
            <>
              お<RubyText text="問合" ruby="といあわ" />せ
            </>
          ) : (
            t("お問い合わせ", "", "Contact Us")
          )}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="mb-6">
              {isEasyJapanese ? (
                <>
                  <RubyText text="無料相談" ruby="むりょうそうだん" />（<RubyText text="初" ruby="はじ" />
                  めての
                  <RubyText text="方" ruby="かた" />
                  は1
                  <RubyText text="時間" ruby="じかん" />
                  まで）の
                  <RubyText text="予約" ruby="よやく" />や<RubyText text="問合" ruby="といあわ" />
                  せはここでできます。
                </>
              ) : (
                t(
                  "無料相談（初回１時間）のご予約やお問い合わせは、こちらで受け付けております。",
                  "",
                  "We accept reservations for free consultations (first hour) and inquiries here.",
                )
              )}
            </p>

            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <h2 className="font-semibold mb-3 text-sky-700">
                {isEasyJapanese ? (
                  <>
                    <RubyText text="連絡先" ruby="れんらくさき" />
                  </>
                ) : (
                  t("連絡先情報", "", "Contact Information")
                )}
              </h2>
              <div className="space-y-3">
                <p className="flex items-start gap-2">
                  <MapPin className="text-sky-600 shrink-0 mt-1" />
                  <span>
                    {isEasyJapanese ? (
                      <>
                        〒151-0072 <RubyText text="東京都" ruby="とうきょうと" />
                        <RubyText text="渋谷区" ruby="しぶやく" />
                        <RubyText text="幡" ruby="はた" />ヶ<RubyText text="谷" ruby="や" />
                        1-2-2 <RubyText text="京王" ruby="けいおう" />
                        <RubyText text="幡" ruby="はた" />ヶ<RubyText text="谷" ruby="や" />
                        ビル4
                        <RubyText text="階" ruby="かい" /> 4-15
                      </>
                    ) : (
                      t(
                        "〒151-0072 東京都渋谷区幡ヶ谷1丁目2番2号 京王幡ヶ谷ビル4F 4-15",
                        "",
                        "4-15, Keio Hatagaya Building 4F, 1-2-2 Hatagaya, Shibuya-ku, Tokyo 151-0072, Japan",
                      )
                    )}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="text-sky-600" />
                  <a href="tel:0908874-2921" className="text-sky-600 hover:underline">
                    {t("090-8874-2921", "090-8874-2921", "81-90-8874-2921")}
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
              <h2 className="font-semibold mb-3 text-sky-700">{t("公式LINE", "LINE", "Official LINE")}</h2>
              <div className="flex justify-center mb-3">
                <Image src="/line-qr.jpeg" alt="LINE QR Code" width={150} height={150} className="border p-2" />
              </div>
              <p className="text-sm text-gray-600">
                {isEasyJapanese ? (
                  <>
                    LINEでも
                    <RubyText text="気軽" ruby="きがる" />に<RubyText text="連絡" ruby="れんらく" />
                    してください。
                  </>
                ) : (
                  t("LINEでもお気軽にお問い合わせください。", "", "Feel free to contact us via LINE as well.")
                )}
              </p>
            </div>
          </div>

          <form className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-2">
              <Label htmlFor="name">
                {isEasyJapanese ? (
                  <>
                    <RubyText text="名前" ruby="なまえ" /> <span className="text-red-500">*</span>
                  </>
                ) : (
                  t("お名前", "", "Name")
                )}{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input id="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                {isEasyJapanese ? (
                  <>
                    メールアドレス <span className="text-red-500">*</span>
                  </>
                ) : (
                  t("メールアドレス", "", "Email")
                )}{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                {isEasyJapanese ? (
                  <>
                    <RubyText text="電話番号" ruby="でんわばんごう" />
                  </>
                ) : (
                  t("電話番号", "", "Phone Number")
                )}
              </Label>
              <Input id="phone" type="tel" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">
                {isEasyJapanese ? (
                  <>
                    <RubyText text="件名" ruby="けんめい" /> <span className="text-red-500">*</span>
                  </>
                ) : (
                  t("件名", "", "Subject")
                )}{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input id="subject" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                {isEasyJapanese ? (
                  <>
                    <RubyText text="問合" ruby="といあわ" />せ<RubyText text="内容" ruby="ないよう" />{" "}
                    <span className="text-red-500">*</span>
                  </>
                ) : (
                  t("お問い合わせ内容", "", "Message")
                )}{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea id="message" rows={6} required />
            </div>

            <div className="flex justify-center">
              <Button type="submit" className="bg-sky-600 hover:bg-sky-500 px-8">
                {isEasyJapanese ? (
                  <>
                    <RubyText text="送信" ruby="そうしん" />
                  </>
                ) : (
                  t("送信する", "", "Submit")
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

