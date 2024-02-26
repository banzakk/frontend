'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import DeleteIcon from '@/components/atom/svg/DeleteIcon'
import { deleteWhisper } from '@/services/whisper'

export default function DeleteButton({
  className,
  whisperId,
  width = '15',
  height = '21',
}: {
  className: string
  whisperId: number
  width?: string
  height?: string
}) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (whisperId: string) => deleteWhisper(whisperId),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['whispers'] })
    },
  })

  const handleDelete = () => {
    const answerDelete = confirm('삭제하시겠습니까?')
    if (answerDelete) {
      mutation.mutate(whisperId.toString())
    }
  }

  return (
    <div onClick={handleDelete} className={className}>
      <DeleteIcon width={width} height={height} />
    </div>
  )
}
