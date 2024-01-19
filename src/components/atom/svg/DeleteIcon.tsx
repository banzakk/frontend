import { IconSvgProps } from '.'

const DeleteIcon: React.FC<IconSvgProps> = ({
  width = '15',
  height = '21',
  color = '#C29DFF',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 15 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M14.5002 1.61111H11.0002L10.0002 0.5H5.00024L4.00024 1.61111H0.500244V3.83333H14.5002M1.50024 18.2778C1.50024 18.8671 1.71096 19.4324 2.08603 19.8491C2.4611 20.2659 2.96981 20.5 3.50024 20.5H11.5002C12.0307 20.5 12.5394 20.2659 12.9145 19.8491C13.2895 19.4324 13.5002 18.8671 13.5002 18.2778V4.94444H1.50024V18.2778Z"
        fill={color}
      />
    </svg>
  )
}

export default DeleteIcon
