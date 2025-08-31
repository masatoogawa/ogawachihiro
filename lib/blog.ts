import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

function processImagePaths(content: string, slug: string): string {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  return content.replace(imageRegex, (match, alt, src) => {
    if (!src.startsWith('http') && !src.startsWith('/')) {
      const imagePath = `/content/blog/${slug}/${src}`
      return `![${alt}](${imagePath})`
    }
    return match
  })
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  image?: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const entries = fs.readdirSync(contentDirectory, { withFileTypes: true })
  const allPosts: BlogPost[] = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // ディレクトリベースの記事構造
      const slug = entry.name
      const postDir = path.join(contentDirectory, slug)
      const indexPath = path.join(postDir, 'index.md')
      
      if (fs.existsSync(indexPath)) {
        const fileContents = fs.readFileSync(indexPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        const processedContent = processImagePaths(content, slug)

        allPosts.push({
          slug,
          title: data.title || '無題',
          excerpt: data.excerpt || '',
          content: processedContent,
          date: data.date || new Date().toISOString(),
          author: data.author || '小川千博',
          image: data.image && !data.image.startsWith('http') && !data.image.startsWith('/') 
            ? `/content/blog/${slug}/${data.image}`
            : data.image
        })
      }
    } else if (entry.name.endsWith('.md') && entry.name !== 'README.md') {
      // 従来の単一ファイル構造（後方互換性のため）
      const slug = entry.name.replace(/\.md$/, '')
      const fullPath = path.join(contentDirectory, entry.name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      allPosts.push({
        slug,
        title: data.title || '無題',
        excerpt: data.excerpt || '',
        content,
        date: data.date || new Date().toISOString(),
        author: data.author || '小川千博',
        image: data.image
      })
    }
  }

  return allPosts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  // まずディレクトリベースの記事を探す
  const postDir = path.join(contentDirectory, slug)
  const indexPath = path.join(postDir, 'index.md')
  
  if (fs.existsSync(indexPath)) {
    const fileContents = fs.readFileSync(indexPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = processImagePaths(content, slug)

    return {
      slug,
      title: data.title || '無題',
      excerpt: data.excerpt || '',
      content: processedContent,
      date: data.date || new Date().toISOString(),
      author: data.author || '小川千博',
      image: data.image && !data.image.startsWith('http') && !data.image.startsWith('/') 
        ? `/content/blog/${slug}/${data.image}`
        : data.image
    }
  }
  
  // 従来の単一ファイル構造も確認（後方互換性のため）
  const fullPath = path.join(contentDirectory, `${slug}.md`)
  
  if (fs.existsSync(fullPath)) {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '無題',
      excerpt: data.excerpt || '',
      content,
      date: data.date || new Date().toISOString(),
      author: data.author || '小川千博',
      image: data.image
    }
  }

  return null
}