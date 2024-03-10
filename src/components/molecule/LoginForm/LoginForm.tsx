'use client'

import Typography from '@/components/atom/Typography/Typography'
import { GoogleIcon, KakaoIcon, NaverIcon } from '@/components/atom/svg'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { postLogin } from '@/services'
import { UserDto } from '@/types'
import { setAccessTokenToLocalStorage } from '@/utils'
import axios from 'axios'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import cn from './LoginForm.module.scss'

type Props = {}

const LoginForm = (props: Props) => {
  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      password: '',
      email: '',
    },
  })

  const onSubmit = async (data: Partial<UserDto>) => {
    try {
      const res = await postLogin(data)
      if (res.data) {
        setAccessTokenToLocalStorage(res.data.accessToken)
        window.location.href = '/whispers'
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          alert('아이디 혹은 비밀번호가 정확하지 않습니다.')
        }
      }
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className={cn.formFieldContainer}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={cn.inputContainer}>
                <FormControl>
                  <Input placeholder="example@naver.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className={cn.inputContainer}>
                <FormControl>
                  <Input placeholder="비밀번호" type="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className={cn.buttonContainer}>
          <Button
            className={cn.button}
            disabled={
              form.getValues().email.length === 0 ||
              form.getValues().password.length === 0
            }
            size="full"
          >
            로그인
          </Button>
          <div className={cn.divideLine}></div>
          <Link href="/signup" className={cn.link}>
            회원가입
          </Link>
          <a
            href={process.env.NEXT_PUBLIC_SERVER_URI + '/users/google'}
            className={cn.link}
          >
            <GoogleIcon width="16" height="16" />
            <Typography
              type="span"
              color="gray-strong"
              className={cn.marginRightBase}
            >
              구글 로그인
            </Typography>
          </a>
          <a
            href={process.env.NEXT_PUBLIC_SERVER_URI + '/users/naver'}
            className={cn.link}
          >
            <NaverIcon width="16" height="16" />
            <Typography
              type="span"
              color="gray-strong"
              className={cn.marginRightBase}
            >
              네이버 로그인
            </Typography>
          </a>
          <a
            href={process.env.NEXT_PUBLIC_SERVER_URI + '/users/kakao'}
            className={cn.link}
          >
            <KakaoIcon width="16" height="16" />
            <Typography
              type="span"
              color="gray-strong"
              className={cn.marginRightBase}
            >
              카카오 로그인
            </Typography>
          </a>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm
