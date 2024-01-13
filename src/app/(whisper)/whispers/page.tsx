import Typography from '@/components/atom/Typography/Typography'
import WhispersList from '@/components/molecule/WhispersList/WhispersList'
import cn from './page.module.scss'

export default async function WhispersPage() {
  return (
    <div className={cn.container}>
      <div className={cn.topWrapper}>
        <div className={cn.fixedWrapper}>
          <div className={cn.titleArea}>
            <div className={cn.title}>
              <Typography size="24" weight="800">
                타임라인
              </Typography>
            </div>
          </div>
          <div className={cn.subTitleArea}>
            <Typography size="14" color="primary" className="subTitle">
              친구들이 무슨 이야기를 하고 있나요?
            </Typography>
          </div>
        </div>
      </div>

      <div className={cn.whisperWrapper}>
        <WhispersList userId={1} />
      </div>
    </div>
  )
}
