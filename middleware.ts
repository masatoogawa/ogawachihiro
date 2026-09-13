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
      "An administrative scrivener office supporting copyright and contract drafting, license/permit applications and company incorporation, and protection of agricultural IP.",
    )
  } else {
    response.headers.set("x-og-title", encodeURIComponent("行政書士小川千尋事務所"))
    response.headers.set(
      "x-og-description",
      encodeURIComponent("著作権・各種契約書の作成、許認可申請・法人設立、農業知財の権利保護をサポートする行政書士事務所です。"),
    )
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|icon.svg).*)"],
}

