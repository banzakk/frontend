import Typography from '@/components/atom/Typography/Typography'
import Image from 'next/image'
import cn from './login.module.scss'

export default function Page() {
  return (
    <div className={cn.container}>
      <div className={cn.login}>
        <div className={cn.logoWrap}>
          <Image
            src="/images/title.png"
            alt="반짝 로고"
            width={117}
            height={56}
          />
        </div>
        <Typography>반짝에 오신 것을 환영해요!</Typography>
      </div>
    </div>
  )
}
