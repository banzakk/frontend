import ProgressModal from '@/components/molecule/ProgressModal/ProgressModal'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Lodading..</div>}>
        <ProgressModal />
      </Suspense>
    </div>
  )
}
