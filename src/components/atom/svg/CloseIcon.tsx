import { IconSvgProps } from '.'

const CloseIcon: React.FC<IconSvgProps> = ({
  size = '22',
  color = '#C29Dff',
  className,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 63">
        <circle id="Ellipse 21" cx="8" cy="8" r="8" fill={color} />
        <g id="Group 62">
          <path
            id="Vector 2"
            d="M4 4L12 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            id="Vector 3"
            d="M4 12L12 4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  )
}

export default CloseIcon
