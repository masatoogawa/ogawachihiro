import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // ユーザーの言語設定を取得
  const language = request.cookies.get("language")?.value || "ja"

  // 現在のパスを取得
  const { pathname } = request.nextUrl

  // メタデータを言語に応じて設定
  const response = NextResponse.next()

  // OGP メタタグを言語に応じて設定
  if (language === "en") {
    response.headers.set("x-og-title", "Chihiro Ogawa Administrative Scrivener Office")
    response.headers.set(
      "x-og-description",
      "An administrative scrivener with 18 years of experience handling deadlines and documents at a patent firm. We help with subsidy and grant applications, copyright and contracts, and licenses/permits and company incorporation.",
    )
  } else {
    response.headers.set("x-og-title", encodeURIComponent("行政書士小川千尋事務所｜補助金・助成金の申請（東京・渋谷）"))
    response.headers.set(
      "x-og-description",
      encodeURIComponent("特許事務所で18年、期限と書類に向き合ってきた行政書士です。補助金・助成金の申請、著作権・契約書、許認可・会社設立の手続きをお手伝いします。"),
    )
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|icon.svg).*)"],
}

