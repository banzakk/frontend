'use client'

import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'
import { postProfileImage } from '@/services'
import { ProgressStatus } from '@/types'
import clsx from 'clsx'
import Link from 'next/link'
import { SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from './profileImageForm.module.scss'

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
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

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
      window.location.href = '/whispers'
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn.formContainer}>
        <div className={cn.imageContainer}>
          <label
            htmlFor="image"
            className={clsx(cn.fileButton, {
              [cn.invisible]: imagePreviewUrl,
            })}
          >
            찾기
          </label>
          <input
            type="file"
            id="image"
            accept="image/jpeg, image/png, image/gif"
            {...register('image')}
            onChange={handleImageChange}
            className={cn.imageInput}
          />
          <div
            className={clsx(cn.imageWrap, {
              [cn.imageExist]: imagePreviewUrl,
            })}
            style={
              imagePreviewUrl
                ? {
                    backgroundImage: `url(${imagePreviewUrl})`,
                  }
                : undefined
            }
          ></div>
        </div>
        <Typography color="gray-strong">
          <Link href="/whispers">지금은 건너뛰기</Link>
        </Typography>
        <Button
          type="submit"
          size="full"
          disabled={!imagePreviewUrl && !customId}
        >
          다음
        </Button>
      </div>
    </form>
  )
}

export default ProfileImageForm
