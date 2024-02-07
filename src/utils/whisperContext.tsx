import Link from 'next/link'
import React from 'react'

// 해시태그 처리
export const replaceHashTagWithLink = (
  className: string,
  text?: string,
  hashTags?: string[]
) => {
  if (!hashTags || hashTags.length === 0) {
    return [text]
  }

  if (!text) {
    return null
  }

  const regex = new RegExp(
    `(${hashTags.map((tag) => `#${tag}`).join('|')})`,
    'g'
  )
  const parts = text.split(regex)

  return parts.map((part, index) =>
    regex.test(part) ? (
      <Link href="/" key={index} className={className}>
        {part}
      </Link>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    )
  )
}
