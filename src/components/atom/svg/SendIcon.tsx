import { IconSvgProps } from '.'

const SendIcon: React.FC<IconSvgProps> = ({
  width = '24',
  height = '25',
  color = '#C29DFF',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="mingcute:send-line" clipPath="url(#clip0_959_6807)">
        <g id="Group">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.991 6.50997L5.39904 11.063L9.59404 13.491L13.293 9.79097C13.4807 9.60346 13.7351 9.49817 14.0004 9.49827C14.2657 9.49836 14.52 9.60383 14.7075 9.79147C14.8951 9.97911 15.0003 10.2336 15.0002 10.4988C15.0002 10.7641 14.8947 11.0185 14.707 11.206L11.007 14.906L13.437 19.1L17.991 6.50997ZM18.314 4.26597C19.509 3.83297 20.667 4.99097 20.234 6.18597L14.952 20.791C14.518 21.989 12.882 22.135 12.243 21.032L9.02604 15.474L3.46804 12.257C2.36504 11.618 2.51004 9.98197 3.70904 9.54797L18.314 4.26597Z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_959_6807">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SendIcon
