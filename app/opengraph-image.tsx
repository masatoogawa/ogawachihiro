import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "OGAWA Administrative Scrivener Office"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 48,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.jpg-7UIaFR881ofrY6Y9igbCGGbrYPNXuH.jpeg"
          alt="OGAWA Logo"
          width={200}
          height={200}
          style={{ borderRadius: "50%", marginRight: 24 }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            color: "#0284c7",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>行政書士</span>
          <span>小川千尋事務所</span>
        </div>
      </div>
      <div style={{ fontSize: 32, color: "#0369a1", marginTop: 24 }}>
        外国人の在留資格申請サポート・法人設立・知的財産権
      </div>
    </div>,
    { ...size },
  )
}

