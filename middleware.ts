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
      "Support for foreign nationals applying for residency status, business establishment, and intellectual property rights.",
    )
  } else {
    response.headers.set("x-og-title", encodeURIComponent("行政書士小川千尋事務所"))
    response.headers.set(
      "x-og-description",
      encodeURIComponent("外国人の在留資格申請サポート、法人設立、知的財産権のサポートを行う行政書士事務所です。"),
    )
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|icon.svg).*)"],
}

