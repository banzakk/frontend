'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import cn from './SignUpForm.module.scss'
import { formSchema } from './signUpFormSchema'

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      userCustomId: '',
      name: '',
      password: '',
      passwordCheck: '',
    },
  })
  const onSubmit = () => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className={cn.formFieldContainer}>
          <FormField
            control={form.control}
            name="userCustomId"
            render={({ field }) => (
              <FormItem className={cn.inputContainer}>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
