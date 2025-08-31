import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function processImagePaths(content: string, language: string, slug: string): string {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  return content.replace(imageRegex, (match, alt, src) => {
    if (!src.startsWith('http') && !src.startsWith('/')) {
      const imagePath = `/content/blog/${language}/${slug}/${src}`
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

export function getAllPosts(language: string = 'ja'): BlogPost[] {
  // やさしい日本語と通常の日本語の場合はjpディレクトリを参照
  const targetLang = (language === 'easy-ja' || language === 'ja') ? 'jp' : language
  const contentDirectory = path.join(process.cwd(), 'content/blog', targetLang)
  
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const entries = fs.readdirSync(contentDirectory, { withFileTypes: true })
  const allPosts: BlogPost[] = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const slug = entry.name
      const postDir = path.join(contentDirectory, slug)
      const indexPath = path.join(postDir, 'index.md')
      
      if (fs.existsSync(indexPath)) {
        const fileContents = fs.readFileSync(indexPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        const processedContent = processImagePaths(content, targetLang, slug)

        allPosts.push({
          slug,
          title: data.title || '無題',
          excerpt: data.excerpt || '',
          content: processedContent,
          date: data.date || new Date().toISOString(),
          author: data.author || (targetLang === 'en' ? 'Chihiro Ogawa' : '小川千博'),
          image: data.image && !data.image.startsWith('http') && !data.image.startsWith('/') 
            ? `/content/blog/${targetLang}/${slug}/${data.image}`
            : data.image
        })
      }
    }
  }

  return allPosts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

export function getPostBySlug(slug: string, language: string = 'ja'): BlogPost | null {
  // やさしい日本語と通常の日本語の場合はjpディレクトリを参照
  const targetLang = (language === 'easy-ja' || language === 'ja') ? 'jp' : language
  const postDir = path.join(process.cwd(), 'content/blog', targetLang, slug)
  const indexPath = path.join(postDir, 'index.md')
  
  if (fs.existsSync(indexPath)) {
    const fileContents = fs.readFileSync(indexPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = processImagePaths(content, targetLang, slug)

    return {
      slug,
      title: data.title || '無題',
      excerpt: data.excerpt || '',
      content: processedContent,
      date: data.date || new Date().toISOString(),
      author: data.author || (targetLang === 'en' ? 'Chihiro Ogawa' : '小川千博'),
      image: data.image && !data.image.startsWith('http') && !data.image.startsWith('/') 
        ? `/content/blog/${targetLang}/${slug}/${data.image}`
        : data.image
    }
  }

  return null
}