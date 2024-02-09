import { useRouter } from 'next/navigation'
import { MouseEventHandler } from 'react'

const useModalClose = () => {
  const router = useRouter()
  const handleClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement> = (
    e
  ) => {
    router.back()
    return
  }
  return handleClose
}

export default useModalClose
