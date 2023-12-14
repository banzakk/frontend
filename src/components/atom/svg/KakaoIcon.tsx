import { DefaultSvgProps } from '.'

const KakaoIcon = ({ width = '36', height = '36' }: DefaultSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <g clipPath="url(#clip0_139_307)">
        <path
          d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36Z"
          fill="#FAE300"
        />
        <path
          d="M18 11.2968C13.104 11.2968 9.14399 14.4432 9.14759 18.3132C9.14759 20.8332 10.836 23.0364 13.3596 24.2676C13.1724 24.9588 12.69 26.7876 12.5928 27.1476C12.474 27.63 12.7692 27.6228 12.9528 27.5076C13.1364 27.3924 15.3792 25.8552 16.362 25.1856C16.9053 25.2674 17.4541 25.3071 18.0036 25.3044C22.8996 25.3044 26.8596 22.158 26.856 18.2916C26.8524 14.4252 22.8852 11.2932 18 11.2968Z"
          fill="#391B1B"
        />
      </g>
      <defs>
        <clipPath id="clip0_139_307">
          <rect width="36" height="36" rx="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default KakaoIcon
