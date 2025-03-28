"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">{t("事務所概要", "About Us")}</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-sky-700">
            {t("代表からの挨拶", "Greeting from the Representative")}
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="md:flex gap-6 items-start">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1742622444017.jpg-BotGw37o5mgGlkDZwAB7wQTHeGWSS2.jpeg"
                  alt={t("小川千尋 行政書士", "Chihiro Ogawa Administrative Scrivener")}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <p className="mb-4">
                  {t(
                    "はじめまして。行政書士の小川千尋と申します。",
                    "Hello, I am Chihiro Ogawa, an Administrative Scrivener.",
                  )}
                </p>
                <p className="mb-4">
                  {t(
                    "私は外国人の皆様の在留資格申請を取り扱っており、日本での就労や生活を希望される外国人の方々と、外国人を雇用される企業の経営者様をつなぐ架け橋となれるよう日々努めております。",
                    "I handle residence status applications for foreigners and strive to be a bridge between foreign nationals who wish to work and live in Japan and business owners who employ foreign nationals.",
                  )}
                </p>
                <p className="mb-4">
                  {t(
                    "外国人の皆様が言葉の壁や複雑な手続きに悩まされることなく、日本で安定して生活できるよう、丁寧かつ親身になってサポートいたします。また、企業様に対しても外国人雇用に伴うさまざまなご不安やご負担を軽減し、安心して人材活用を進めていただけるよう全力でサポートいたします。",
                    "I provide careful and personalized support to help foreign nationals live stably in Japan without being troubled by language barriers or complex procedures. I also do my utmost to support companies by reducing various anxieties and burdens associated with employing foreign nationals, so that they can proceed with human resource utilization with peace of mind.",
                  )}
                </p>
                <p>{t("まずはお気軽にご相談ください。", "Please feel free to contact me for a consultation.")}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-sky-700">{t("自己紹介", "About Me")}</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-2">
              <li>{t("長崎県長崎市出身", "Born in Nagasaki city, Nagasaki prefecture")}</li>
              <li>
                {t("上智大学外国語学部英語学科卒業", "Graduated from English Language Department at Sophia University")}
              </li>
              <li>{t("家族：夫、息子2人", "Family: Husband and two sons")}</li>
              <li>{t("趣味：フラメンコ、ヨガ", "Hobby: Flamenco and Yoga")}</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-sky-700">{t("経歴", "Career Background")}</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="mb-4">
              {t("特許事務経験約18年。", "About 18 years of experience in patent administration.")}
            </p>
            <p>
              {t(
                "外国人が多く勤める国際色豊かな弁理士事務所にて、海外や国内のお客様が特許を取得するために必要な手続きに従事しました。また、管理職として、プロジェクト管理や部員の採用・育成等も対応しました。",
                "I worked at an internationally diverse patent attorney's office where many foreigners work, handling procedures necessary for overseas and domestic clients to obtain patents. As a manager, I was also responsible for project management, hiring, and training of staff members.",
              )}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-sky-700">{t("事務所名", "Office Name")}</h2>
          <p>{t("行政書士小川千尋事務所", "Chihiro Ogawa Administrative Scrivener Office")}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-sky-700">{t("代表者", "Representative")}</h2>
          <p>{t("小川 千尋", "Chihiro Ogawa")}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-sky-700">{t("所在地", "Location")}</h2>
          <p>
            {t(
              "〒151-0072 東京都渋谷区幡ヶ谷1丁目2番2号 京王幡ヶ谷ビル4F 4-15",
              "4-15, Keio Hatagaya Building 4F, 1-2-2 Hatagaya, Shibuya-ku, Tokyo 151-0072, Japan",
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-sky-700">{t("最寄駅", "Nearest Station")}</h2>
          <p>{t("京王線幡ヶ谷駅直結", "Connected to Hatagaya Station on the Keio Line")}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-sky-700">{t("営業時間", "Business Hours")}</h2>
          <p>
            {t("臨機応変に対応可能です。まずはご連絡ください。", "Flexible hours available. Please contact us first.")}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-sky-700">{t("主な業務内容", "Main Services")}</h2>
          <ul className="list-disc pl-5 space-y-2">
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
        </section>
      </div>
    </div>
  )
}

