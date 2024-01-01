'use client'

import { Button } from '@/components/ui/button'
import { postProfileImage } from '@/services'
import { ProgressStatus } from '@/types'
import { SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

export function ProfileImageForm({
  setProgress,
  customId,
}: {
  setProgress: React.Dispatch<SetStateAction<ProgressStatus>>
  customId?: string
}) {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    const formData = new FormData()

    if (data.image[0] && data.image[0].name) {
      formData.append('image', data.image[0])
    }

    if (customId) {
      formData.append('userCustomId', customId)
    }

    try {
      await postProfileImage(formData)
      setProgress('agreement')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="file"
        accept="image/jpeg, image/png, image/gif"
        {...register('image')}
      />
      <Button type="submit">다음</Button>
    </form>
  )
}

export default ProfileImageForm
