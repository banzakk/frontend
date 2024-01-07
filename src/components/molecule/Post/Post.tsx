'use client'

import {
  ChangeEventHandler,
  FormEvent,
  MouseEventHandler,
  useState,
} from 'react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import TextareaAutosize from 'react-textarea-autosize'
import UploadImg from '../UploadImg/UploadImg'
import CloseIcon from '@/components/atom/svg/CloseIcon'
import { Button } from '@/components/ui/button'
import cn from './Post.module.scss'
import { axiosInstance } from '@/services'
import Link from 'next/link'

const Post = () => {
  const [content, setContent] = useState('')
  const [hashArr, setHashArr] = useState<string[]>([])
  const [preview, setPreview] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])
  const router = useRouter()
  const api = process.env.NEXT_PUBLIC_SERVER_URI || ''
  const instance = axiosInstance()

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await instance.post(`${api}/whispers`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    },
    onSuccess() {
      alert('작성 완료')
      router.back()
    },
    onError(error) {
      console.error(error)
      alert('업로드 오류가 발생했습니다.')
    },
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (content.length === 0 && files.length === 0) {
      alert('내용을 입력해주세요.')
      return
    }
    const formData = new FormData()
    formData.append('content', content)
    files.forEach((file) => formData.append('image', file))
    hashArr.forEach((tag) => formData.append('hashTag', tag.substring(1)))
    mutation.mutate(formData)
  }

  // 글쓰기 창 닫기
  const handleClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement> = (
    e
  ) => {
    if (confirm('취소하시겠습니까?')) {
      router.back()
    } else {
      return
    }
  }

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  // 텍스트 내용
  const handleContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const contentValue = e.target.value
    const lines = contentValue.split('\n')
    const hashtags = contentValue.match(/#[\p{L}_0-9]+/gu)

    if (
      lines.length > 20 ||
      contentValue.length > 200 ||
      (hashtags && hashtags.some((tag) => tag.length > 10))
    ) {
      return
    }
    setContent(contentValue)
    setHashArr(hashtags || [])
  }

  // 이미지 파일첨부
  const handleImages: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    const fileArray = e.target.files

    if (fileArray) {
      if (fileArray.length > 5) {
        alert('5장 이상의 파일을 업로드할 수 없습니다.')
        e.target.value = ''
        return
      }

      let previewURLs: string[] = []
      let newFiles: File[] = []

      for (let i = 0; i < fileArray.length; i++) {
        const reader = new FileReader()
        reader.onload = () => {
          previewURLs[i] = reader.result as string
          setPreview([...previewURLs])
        }
        reader.readAsDataURL(fileArray[i])
        newFiles.push(fileArray[i])
      }
      setFiles(newFiles)
    }
  }

  // 이미지 미리보기 삭제
  const removePreview = (index: number) => {
    setPreview((prev) => {
      const newPreview = prev.filter((_, i) => i !== index)
      return newPreview
    })
    setFiles((prev) => {
      const newFiles = prev.filter((_, i) => i !== index)
      return newFiles
    })
  }

  const replaceHashTagWithLink = (text: string, hashTags?: string[]) => {
    if (!hashTags || hashTags.length === 0) {
      return [text]
    }

    const regex = new RegExp(`(${hashTags.join('|')})`, 'g')
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <Link href="/" key={index} className={cn.hashTag}>
          {part}
        </Link>
      ) : (
        part
      )
    )
  }
  const renderedContent = replaceHashTagWithLink(content, hashArr)

  return (
    <>
      <div className={cn.modalBackground} onClick={handleClose}>
        <div className={cn.postArea} onClick={handleModalClick}>
          <form
            className={cn.form}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className={cn.container}>
              <div className={cn.closeBtn}>
                <button onClick={handleClose} type="button">
                  <CloseIcon />
                </button>
              </div>

              <div className={cn.textareaContainer}>
                <TextareaAutosize
                  cacheMeasurements
                  minRows={5}
                  // maxRows={30}
                  className={cn.textArea}
                  onChange={handleContent}
                  value={content}
                />
                <div className={cn.contentArea}>{renderedContent}</div>
              </div>

              {preview.length > 0 && (
                <div className={cn.previewContainer}>
                  {preview.map((url, index) => (
                    <div key={index} className={cn.imageArea}>
                      <button
                        onClick={() => removePreview(index)}
                        className={cn.previewClose}
                        type="button"
                      >
                        <CloseIcon size="16" className={cn.previewClose} />
                      </button>
                      <img
                        src={url}
                        alt={`preview${index}`}
                        className={cn.previewImg}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className={cn.btnArea}>
                <label htmlFor="file" className={cn.fileIcon}>
                  <UploadImg size="24" color="#c29dff" />
                </label>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  multiple
                  className={cn.fileInput}
                  onChange={handleImages}
                />
                <Button className={cn.btn} type="submit">
                  글쓰기
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Post
