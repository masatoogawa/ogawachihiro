"use client"

import type React from "react"
import { useLanguage } from "@/contexts/language-context"

interface RubyTextProps {
  text: string
  ruby: string
  children?: React.ReactNode
  className?: string
}

export function RubyText({ text, ruby, children, className = "" }: RubyTextProps) {
  const { language } = useLanguage()

  // やさしい日本語モードの場合のみルビを表示
  if (language === "easy-ja") {
    return (
      <ruby className={`leading-loose ${className}`}>
        {text}
        <rt className="text-[0.6em] font-normal">{ruby}</rt>
      </ruby>
    )
  }

  // その他の言語モードではルビなしで表示
  return <>{children || text}</>
}

