import DeleteIcon from "@/components/atom/svg/DeleteIcon"


export default function DeleteButton({className}:{className:string}) {
  const handleDelete = () => {
    alert('삭제하시겠습니까?')
    return
  }

  return (
    <div onClick={handleDelete} className={className}>
      <DeleteIcon />
    </div>
  )
}
