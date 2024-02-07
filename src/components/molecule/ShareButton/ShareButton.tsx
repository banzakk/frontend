import { ShareIcon } from '@/components/atom/svg'

export default function ShareButton({ className, text }: { className: string, text: string }) {

  const handleShareLink = async () => {
    try {
      await navigator.clipboard.writeText(text)
      alert('링크 복사 완료!')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={className} onClick={handleShareLink}>
      <ShareIcon />
    </div>
  )
}
