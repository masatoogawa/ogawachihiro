"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

const STEPS = [
  {
    titleJa: "ご相談（初回無料）",
    titleEn: "Consultation (first session free)",
    bodyJa:
      "使いたい補助金や、導入したいもの、時期を伺います。「この補助金を使いたい」「こういう設備を入れたい」など、やりたいことが決まった段階でご相談ください。",
    bodyEn:
      "We ask about the subsidy you want to use, what you want to introduce, and your timing. Please consult us once you know what you want to do—for example, “I want to use this subsidy” or “I want to install this equipment.”",
  },
  {
    titleJa: "制度と要件の確認",
    titleEn: "Checking the program and requirements",
    bodyJa:
      "申請できるかどうか、締切、対象になる経費、税金の滞納がないことなどの条件を確認します。使える補助金を一から探す場合は、「申請前の事前調査」（有料）としてお引き受けします。",
    bodyEn:
      "We check whether you can apply, the deadline, eligible expenses, and conditions such as having no tax arrears. If you would like us to find suitable subsidies from scratch, we handle this as a paid “pre-application research” service.",
  },
  {
    titleJa: "ご依頼と準備",
    titleEn: "Engagement and preparation",
    bodyJa:
      "申請サポートの費用の半額をお支払いいただき、準備を始めます。多くの制度で「GビズIDプライム」というアカウントが必要です。決算書、納税証明書、見積書など、申請に使う書類をご用意いただきます。",
    bodyEn:
      "Once half of the application support fee has been paid, we begin preparing. Many programs require a “gBizID Prime” account. We will ask you to prepare documents used in the application, such as financial statements, tax payment certificates, and quotations.",
  },
  {
    titleJa: "申請書の作成と申請",
    titleEn: "Preparing and submitting the application",
    bodyJa:
      "お話を伺いながら申請書を作成し、内容をご確認いただいたうえで、電子申請（Jグランツ）で提出します。制度によっては紙の書類の郵送もあります。申請後に、申請サポートの費用の残りをお支払いいただきます。",
    bodyEn:
      "We prepare the application while listening to you, and after you have reviewed it, we submit it electronically (jGrants). Some programs also require paper documents to be mailed. After submission, the remainder of the application support fee is paid.",
  },
  {
    titleJa: "審査・採択（交付決定）",
    titleEn: "Screening and approval (grant decision)",
    bodyJa:
      "結果が出るまでの期間は制度によって違います。多くの制度では、交付決定の前に契約・購入したものは対象外になります。決定までお待ちください。",
    bodyEn:
      "The time until results are announced varies by program. In many programs, anything contracted or purchased before the grant decision is not eligible, so please wait until the decision is made.",
  },
  {
    titleJa: "事業の実施",
    titleEn: "Carrying out the project",
    bodyJa:
      "決められた期間のうちに、契約・購入・支払いを行います。見積書・請求書・領収書などは、報告に使うので大切に保管してください。",
    bodyEn:
      "Contracts, purchases, and payments are made within the specified period. Please keep quotations, invoices, receipts, and similar documents safe, as they are used for reporting.",
  },
  {
    titleJa: "実績報告と請求",
    titleEn: "Performance report and claim",
    bodyJa:
      "実施した内容を報告し、金額が確定したあと、補助金が振り込まれます。補助金は後払いなので、それまでの費用はいったん立て替えていただきます。",
    bodyEn:
      "You report what was carried out, and once the amount is finalized, the subsidy is paid into your account. Because subsidies are paid afterward, you will need to cover the costs in the meantime.",
  },
  {
    titleJa: "その後の報告",
    titleEn: "Follow-up reports",
    bodyJa: "制度によっては、数年間、活用状況の報告が必要です。",
    bodyEn: "Some programs require reports on how the subsidy is being used for several years.",
  },
]

const PREPARATIONS = [
  {
    titleJa: "GビズIDプライム",
    titleEn: "gBizID Prime",
    bodyJa:
      "申請の方法によっては、発行まで2〜3週間かかります。まだお持ちでない方は、補助金を考え始めた段階での取得をおすすめします。",
    bodyEn:
      "Depending on how you apply, issuance can take 2–3 weeks. If you don't have one yet, we recommend obtaining it as soon as you start considering a subsidy.",
  },
  {
    titleJa: "税金の納付",
    titleEn: "Tax payments",
    bodyJa: "滞納がないことが条件の制度が多くあります。",
    bodyEn: "Many programs require that you have no tax arrears.",
  },
  {
    titleJa: "見積書",
    titleEn: "Quotations",
    bodyJa: "導入したいものの見積書が必要になります。",
    bodyEn: "You will need quotations for what you want to introduce.",
  },
]

export default function SubsidyFlow() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
          {t("補助金申請の流れ", "Subsidy Application Process")}
        </h1>

        <div className="space-y-8">
          <p className="leading-relaxed">
            {t(
              "補助金・助成金は、申請して終わりではなく、採択のあとにも手続きが続きます。制度によって細かい点は違いますが、おおむね次の流れで進みます。",
              "With subsidies and grants, the process doesn't end with the application—procedures continue after approval as well. The details differ by program, but the process generally goes as follows.",
            )}
          </p>

          <section>
            <ol className="space-y-4">
              {STEPS.map((step, index) => (
                <li key={step.titleJa} className="flex gap-4 bg-sky-50 p-4 rounded-lg">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 font-bold text-white"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="font-semibold mb-1 text-sky-700">
                      <span className="sr-only">{index + 1}. </span>
                      {t(step.titleJa, step.titleEn)}
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed">{t(step.bodyJa, step.bodyEn)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              {t("早めに準備しておきたいこと", "Things to Prepare Early")}
            </h2>
            <ul className="space-y-3">
              {PREPARATIONS.map((item) => (
                <li key={item.titleJa} className="leading-relaxed">
                  <span className="font-semibold">・{t(item.titleJa, item.titleEn)}{t("：", ": ")}</span>
                  {t(item.bodyJa, item.bodyEn)}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              {t("特許や商標の出願に関わる補助金", "Subsidies Related to Patent and Trademark Filings")}
            </h2>
            <p className="leading-relaxed">
              {t(
                "外国出願の助成金などは、弁理士の先生と一緒に進めます。特許や商標の出願は弁理士の先生のご専門ですが、助成金の申請書づくりと全体の取りまとめは、私が行政書士としてお引き受けします。申請書のうち、指定区分や調査結果など技術的・専門的な内容は弁理士の先生に、事業に関わるところはお客様と相談しながら私がまとめます。お付き合いのある弁理士の先生がいない場合は、ご紹介もできます。",
                "Grants such as those for foreign filings are handled together with a patent attorney. Patent and trademark filings are the domain of patent attorneys, but as an administrative scrivener I take on preparing the grant application and coordinating the whole process. Within the application, technical and specialized content such as designated classes and search results is left to the patent attorney, while I compile the business-related parts in consultation with you. If you don't have a patent attorney you work with, I can introduce one.",
              )}
            </p>
          </section>

          <div className="text-sm text-gray-600 space-y-1">
            <p>
              {t(
                "※補助金の申請の代行は、申請者ご本人のほかは、法令で認められた士業に限られています。",
                "* Apart from the applicants themselves, only licensed professionals authorized by law may file subsidy applications on others' behalf.",
              )}
            </p>
            <p>
              {t(
                "※補助金・助成金は審査があり、採択されない場合もあります。",
                "* Subsidies and grants are subject to screening, and applications may not be approved.",
              )}
            </p>
          </div>

          <div className="text-center pt-2">
            <Link href="/contact">
              <Button className="bg-sky-600 hover:bg-sky-500 px-8 h-auto py-2">
                {t("無料相談のご予約・お問い合わせはこちら", "Free Consultation Booking & Contact")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
