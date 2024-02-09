import { useEffect, useState } from "react"

const useModalScrollRemove = () => {
  const [bodyOverflow, setBodyOverflow] = useState('hidden')

  useEffect(() => {
    document.body.style.overflow = bodyOverflow

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [bodyOverflow])
}

export default useModalScrollRemove