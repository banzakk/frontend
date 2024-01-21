import { IconSvgProps } from '.'

const MessageIcon: React.FC<IconSvgProps> = ({
  size = '16',
  color = '#858585',
  className,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M1 17L2.15466 13.1052C0.0904842 9.67271 0.888087 5.24358 4.01988 2.74489C7.15167 0.247204 11.6495 0.451933 14.5406 3.22426C17.4317 5.99758 17.8225 10.4806 15.4546 13.7114C13.0866 16.9421 8.69092 17.9208 5.17454 16.0013L1 17Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MessageIcon
