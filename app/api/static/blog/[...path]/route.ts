import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

function getMimeType(ext: string): string {
  const mimeTypes: { [key: string]: string } = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain',
    '.md': 'text/markdown',
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
  }
  return mimeTypes[ext] || 'application/octet-stream'
}

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blog', ...params.path)
    
    // セキュリティチェック: パストラバーサル攻撃を防ぐ
    const normalizedPath = path.normalize(filePath)
    const contentBlogPath = path.join(process.cwd(), 'content', 'blog')
    
    if (!normalizedPath.startsWith(contentBlogPath)) {
      return new NextResponse('Forbidden', { status: 403 })
    }
    
    // ファイルの存在確認
    if (!fs.existsSync(normalizedPath) || !fs.statSync(normalizedPath).isFile()) {
      return new NextResponse('Not Found', { status: 404 })
    }
    
    // ファイルを読み込み
    const fileBuffer = fs.readFileSync(normalizedPath)
    
    // MIMEタイプを決定
    const ext = path.extname(normalizedPath).toLowerCase()
    const mimeType = getMimeType(ext)
    
    // レスポンスを返す
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=3600', // 1時間キャッシュ
      },
    })
  } catch (error) {
    console.error('Error serving static file:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}