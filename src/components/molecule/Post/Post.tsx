'use client'

import { Button } from '@/components/ui/button'
import cn from './Post.module.scss'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import UploadImg from '../UploadImg/UploadImg'
import TextareaAutosize from 'react-textarea-autosize'

const Post = () => {
  const [content, setContent] = useState('')
  const [preview, setPreview] = useState<string[]>([])
  const [imageUrl, setImageUrl] = useState('')

  // 텍스트 내용
  const handleContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value)
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

      for (let i = 0; i < fileArray.length; i++) {
        const reader = new FileReader()
        reader.onload = () => {
          previewURLs[i] = reader.result as string
          setPreview([...previewURLs])
        }
        reader.readAsDataURL(fileArray[i])
      }
    }
  }


  // 게시글 등록
  // const handleSubmit: FormEventHandler = async (e) => {
  //   try {
  //     e.preventDefault()

  //     if (!content) {
  //       alert('내용을 입력해 주세요')
  //       return
  //     }

  //     const formData = new FormData()
  //     formData.append('content', content)
  //     formData.append('images', files)

  //     const response = await fetch('api주소', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       body: formData
  //     })

  //     const data = await response.json()

  //     if (data.message === 'Whisper creation successful') {
  //       setImageUrl(data.data.profileImage)
  //     } else {
  //       console.error('upload error!')
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <form
      className={cn.form}
      // onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className={cn.container}>
        <TextareaAutosize
          cacheMeasurements
          minRows={5}
          maxRows={15}
          className={cn.textArea}
          onChange={handleContent}
          value={content}
        />

        {preview.length > 0 && (
          <div className={cn.previewContainer}>
            {preview.map((url, index) => (
              <div
                key={index}
                className={cn.imageArea}
              >
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
  )
}

export default Post
