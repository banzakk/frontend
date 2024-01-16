'use client'

import Whisper from '@/components/molecule/Whisper/Whisper'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const params = useSearchParams()
  const whisperId = params.get('id')

  return (
    <div>
      My Post: {whisperId}
    </div>
  )
}
