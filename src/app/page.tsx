import { Button } from '@/components/ui/button'
import styles from './root.module.scss'

export default function Page() {
  return (
    <div>
      <div className={styles.titleArea}>root page</div>
      <Button>버튼</Button>
    </div>
  )
}
