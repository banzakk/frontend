import { SignUpModal } from '@/components/molecule/SignUpModal/SignUpModal'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Lodading..</div>}>
        <SignUpModal />
      </Suspense>
    </div>
  )
}
