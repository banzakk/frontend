'use client'

import UseSocialCheck from '@/hooks/useSocialCheck'
import { useSearchParams } from 'next/navigation'

const SocialLoginConsumer = () => {
  const params = useSearchParams()
  UseSocialCheck(params.get('code'))
  return <></>
}

export default SocialLoginConsumer
