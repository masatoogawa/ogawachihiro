import { NextRequest, NextResponse } from 'next/server'
import { getPostBySlug } from '@/lib/blog'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const slug = searchParams.get('slug')
  const language = searchParams.get('lang') || 'ja'
  
  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
  }
  
  try {
    const post = getPostBySlug(slug, language)
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}