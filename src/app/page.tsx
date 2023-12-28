import SocialLoginConsumer from '@/components/SocialLoginConsumer'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import styles from './root.module.scss'

export const metadata: Metadata = {
  title: 'Banzakk',
  icons: { icon: 'http://localhost:3000/favicon.ico' },
}

export default function Page() {
  return (
    <div>
      <SocialLoginConsumer />
      <div className={styles.titleArea}>root page</div>
      <Button>버튼</Button>
    </div>
  )
}
