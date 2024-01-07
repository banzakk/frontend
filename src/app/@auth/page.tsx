import Typography from '@/components/atom/Typography/Typography'
import Logo from '@/components/atom/svg/Logo'
import LoginForm from '@/components/molecule/LoginForm/LoginForm'
import cn from './login.module.scss'

export default function Page() {
  return (
    <div className={cn.container}>
      <div className={cn.login}>
        <div className={cn.logoWrap}>
          <Logo width="117" height="56" />
        </div>
        <Typography>반짝에 오신 것을 환영해요!</Typography>
        <LoginForm />
      </div>
    </div>
  )
}
