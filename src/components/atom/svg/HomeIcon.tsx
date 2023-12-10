interface IconProps {
  size?: string
  color?: string
  className?: string
}

const HomeIcon: React.FC<IconProps> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        id="Vector"
        d="M9.49846 2.36124C9.35935 2.24725 9.18265 2.18465 9 2.18465C8.81735 2.18465 8.64065 2.24725 8.50154 2.36124L2.50154 7.27322C2.41659 7.34283 2.34837 7.4294 2.30161 7.52693C2.25486 7.62446 2.23068 7.73061 2.23077 7.83803V15.5183C2.23077 15.5969 2.26319 15.6723 2.32089 15.7279C2.37859 15.7835 2.45686 15.8147 2.53846 15.8147H5.61538C5.69699 15.8147 5.77525 15.7835 5.83296 15.7279C5.89066 15.6723 5.92308 15.5969 5.92308 15.5183V11.3697C5.92308 10.9767 6.08516 10.5999 6.37368 10.322C6.6622 10.0442 7.05351 9.88805 7.46154 9.88805H10.5409C10.743 9.88805 10.943 9.92638 11.1297 10.0008C11.3163 10.0753 11.4859 10.1844 11.6288 10.322C11.7716 10.4596 11.885 10.6229 11.9623 10.8027C12.0396 10.9825 12.0794 11.1751 12.0794 11.3697V15.5183C12.0794 15.5969 12.1118 15.6723 12.1695 15.7279C12.2272 15.7835 12.3055 15.8147 12.3871 15.8147H15.4615C15.5431 15.8147 15.6214 15.7835 15.6791 15.7279C15.7368 15.6723 15.7692 15.5969 15.7692 15.5183V7.83744C15.7692 7.73012 15.745 7.62408 15.6983 7.52666C15.6515 7.42924 15.5833 7.34277 15.4985 7.27322L9.49846 2.36124ZM7.70462 1.45861C8.06623 1.16256 8.52538 1 9 1C9.47462 1 9.93377 1.16256 10.2954 1.45861L16.2954 6.37001C16.5162 6.55082 16.6936 6.7757 16.8153 7.02908C16.937 7.28246 17 7.55828 17 7.83744V15.5183C17 15.9113 16.8379 16.2882 16.5494 16.566C16.2609 16.8439 15.8696 17 15.4615 17H12.3871C11.9791 17 11.5877 16.8439 11.2992 16.566C11.0107 16.2882 10.8486 15.9113 10.8486 15.5183V11.3697C10.8486 11.2911 10.8162 11.2157 10.7585 11.1602C10.7008 11.1046 10.6225 11.0734 10.5409 11.0734H7.46154C7.37993 11.0734 7.30167 11.1046 7.24397 11.1602C7.18626 11.2157 7.15385 11.2911 7.15385 11.3697V15.5183C7.15385 15.9113 6.99176 16.2882 6.70324 16.566C6.41472 16.8439 6.02341 17 5.61538 17H2.53846C2.13044 17 1.73912 16.8439 1.4506 16.566C1.16209 16.2882 1 15.9113 1 15.5183V7.83744C1.00002 7.55828 1.06304 7.28246 1.1847 7.02908C1.30637 6.7757 1.48377 6.55082 1.70462 6.37001L7.70462 1.45861Z"
        stroke={color}
      />
    </svg>
  )
}

export default HomeIcon