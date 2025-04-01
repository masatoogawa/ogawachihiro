import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const contentType = 'image/x-icon'
export const size = { width: 32, height: 32 }

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          borderRadius: '50%',
        }}
      >
        CO
      </div>
    ),
    { ...size }
  )
} 