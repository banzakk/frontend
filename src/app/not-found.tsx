import cn from './layout.module.scss'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className={cn.container}>
      <div className={cn.error}>
        <div className={cn.status}>404</div>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>방문해주신 페이지가 없거나 삭제된 페이지입니다.</p>
        <a href="/" className={cn.link}>
          홈으로 돌아가기
        </a>
      </div>
    </div>
  )
}
