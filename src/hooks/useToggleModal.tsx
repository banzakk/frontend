import { useState } from 'react'

const useToggleModal = (): [
  boolean,
  (e: React.MouseEvent<HTMLDivElement>) => void
] => {
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsToggled(!isToggled)
  }

  return [isToggled, handleToggle]
}

export default useToggleModal
