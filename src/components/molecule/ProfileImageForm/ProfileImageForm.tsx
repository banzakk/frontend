'use client'

import { Button } from '@/components/ui/button'
import { postProfileImage } from '@/services'
import { ProgressStatus } from '@/types'
import { SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  image: FileList
}

export function ProfileImageForm({
  setProgress,
  customId,
}: {
  setProgress: React.Dispatch<SetStateAction<ProgressStatus>>
  customId?: string
}) {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    const formData = new FormData()
    const files = data.image

    if (files && files.length) {
      formData.append('image', files[0])
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
