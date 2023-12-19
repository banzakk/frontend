'use client'

import Typography from '@/components/atom/Typography/Typography'
import { GoogleIcon, KakaoIcon, NaverIcon } from '@/components/atom/svg'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { postEmailCheck, postIdCheck, postSignUp } from '@/services/signup'
import { UserDto } from '@/types'
import { FormErrorBuilder } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import cn from './SignUpForm.module.scss'
import { formSchema, nonKoreanStringSchema } from './signUpFormSchema'

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      userCustomId: '',
      name: '',
      password: '',
      passwordCheck: '',
      email: '',
    },
  })
  const builder = new FormErrorBuilder(form)
  const onSubmit = async (data: UserDto & { passwordCheck: string }) => {
    try {
      const { email, password, userCustomId, name } = data
      const formData = { email, password, userCustomId, name }
      await postSignUp(formData)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert('일시적인 오류가 발생했습니다. 잠시 후에 다시 시도해주세요.')
      }
    }
  }

  const handleIdCheck = async () => {
    const userCustomId = form.getValues('userCustomId')
    if (!userCustomId) {
      builder
        .setType('userCustomId')
        .setMessage('아이디는 2자 이상이어야 합니다.')
        .build()
      return
    }
    try {
      nonKoreanStringSchema.parse(userCustomId)
      const res = await postIdCheck({ userCustomId })
      if (res.data.isExistUser) {
        builder
          .setType('userCustomId')
          .setMessage('사용할 수 없는 아이디입니다.')
          .build()
        return
      }
      alert('사용할 수 있는 아이디입니다.')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          builder
            .setType('userCustomId')
            .setMessage('사용할 수 없는 아이디입니다.')
            .build()
        }
        return
      }
      if (err instanceof Error && 'message' in err) {
        builder
          .setType('userCustomId')
          .setMessage(
            '아이디에는 한글 및 #, @, $, %, ^, & 기호를 사용할 수 없습니다.'
          )
          .build()
      }
    }
  }
  const handleEmailCheck = async () => {
    const email = form.getValues('email')
    if (!email) {
      form.setError('email', {
        message: '이메일은 2자 이상이어야 합니다.',
      })
      return
    }
    try {
      const res = await postEmailCheck({ email })
      if (res.data.isExistUser) {
        form.setError('email', {
          message: '사용할 수 없는 이메일입니다.',
        })
        return
      }
      alert('사용할 수 있는 이메일입니다.')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          builder
            .setType('userCustomId')
            .setMessage('사용할 수 없는 이메일입니다.')
            .build()
        }
        return
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className={cn.formFieldContainer}>
          <FormField
            control={form.control}
            name="userCustomId"
            render={({ field }) => (
              <FormItem className={clsx(cn.inputContainer, cn.userCustomId)}>
                <Button
                  className={cn.checkButton}
                  type="button"
                  onClick={handleIdCheck}
                  size="sm"
                >
                  중복확인
                </Button>
                <FormControl>
                  <Input
                    className={cn.underline}
                    placeholder="아이디"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className={cn.inputContainer}>
                <FormControl>
                  <Input
                    className={cn.underline}
                    placeholder="이름"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className={cn.inputContainer}>
              <FormControl>
                <Input
                  type="password"
                  className={cn.underline}
                  placeholder="영문과 숫자 대문자 특수기호를 조합한 8자리의 비밀번호"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordCheck"
          render={({ field }) => (
            <FormItem className={cn.inputContainer}>
              <FormControl>
                <Input
                  type="password"
                  className={cn.underline}
                  placeholder="비밀번호 확인"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className={cn.inputContainer}>
              <Button
                className={clsx(cn.checkButton, cn.email)}
                type="button"
                onClick={handleEmailCheck}
                size="sm"
              >
                중복확인
              </Button>
              <FormControl>
                <Input
                  className={cn.underline}
                  placeholder="이메일 주소"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={cn.divideLine}>
          <Typography size="14">또는</Typography>
        </div>
        <div className={cn.socialContainer}>
          <a
            href={process.env.NEXT_PUBLIC_SERVER_URI + '/users/google'}
            className={cn.googleWrap}
          >
            <GoogleIcon />
          </a>
          <a href={process.env.NEXT_PUBLIC_SERVER_URI + '/users/naver'}>
            <NaverIcon />
          </a>
          <a href={process.env.NEXT_PUBLIC_SERVER_URI + '/users/kakao'}>
            <KakaoIcon />
          </a>
        </div>
        <Button
          disabled={Object.keys(form.formState.errors).length >= 1}
          size="full"
        >
          계정 생성하기
        </Button>
      </form>
    </Form>
  )
}
