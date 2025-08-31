import { NextRequest, NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/blog'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const language = searchParams.get('lang') || 'ja'
  
  try {
    const posts = getAllPosts(language)
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}