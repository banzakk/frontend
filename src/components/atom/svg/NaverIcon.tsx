import { DefaultSvgProps } from '.'

const NaverIcon = ({ width = '36', height = '36' }: DefaultSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <g clip-path="url(#clip0_139_297)">
        <path
          d="M36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18Z"
          fill="#03C75A"
        />
        <path
          d="M20.34 18.4629L15.4715 11.4857H11.4343V24.5143H15.66V17.5371L20.5286 24.5143H24.5658V11.4857H20.34V18.4629Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_139_297">
          <rect width="36" height="36" rx="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default NaverIcon
