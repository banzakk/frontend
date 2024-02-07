'use client'

import { useSearchParams } from 'next/navigation'
import DetailWhisper from '@/components/molecule/DetailWhisper/DetailWhisper'

export default function Page() {
  const params = useSearchParams()
  const whisperId = params.get('id')

  return whisperId && <DetailWhisper whisperId={whisperId} />
}
