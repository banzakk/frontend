import DeleteIcon from '@/components/atom/svg/DeleteIcon'

export default function DeleteButton({
  className,
  width = '15',
  height = '21',
}: {
  className: string
  width?: string
  height?: string
}) {
  const handleDelete = () => {
    alert('삭제하시겠습니까?')
    return
  }

  return (
    <div onClick={handleDelete} className={className}>
      <DeleteIcon width={width} height={height} />
    </div>
  )
}
