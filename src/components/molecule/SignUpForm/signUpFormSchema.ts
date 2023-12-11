import { ValidationMessage } from '@/utils'
import * as z from 'zod'

const message = ValidationMessage.make()

const formSchema = z
  .object({
    name: z
      .string()
      .min(2, message.minIs('이름은', 2))
      .max(10, message.maxIs('이름은', 14)),
    userCustomId: z
      .string()
      .min(2, message.minIs('아이디는', 2))
      .max(14, message.maxIs('아이디는', 14))
      .regex(
        /^[^#@\$%\^&]*$/,
        '아이디에는 #, @, $, %, ^, & 기호를 사용할 수 없습니다.'
      ),
    password: z
      .string()
      .regex(
        /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,})/,
        '비밀번호는 최소 8자 이상이며, 대문자, 소문자, 숫자 및 특수 문자를 포함해야 합니다.'
      ),
    passwordCheck: z.string(),
    email: z.string().email(),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  })

export { formSchema }
