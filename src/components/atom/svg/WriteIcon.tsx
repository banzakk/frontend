interface IconProps {
  size?: string
  color?: string
  className?: string
}

const WriteIcon: React.FC<IconProps> = ({
  size,
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
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.61156 11.464L5.9209 12.1283L6.53601 8.38846L13.5852 1.3639C13.6995 1.24859 13.8356 1.15707 13.9855 1.09461C14.1354 1.03216 14.2962 1 14.4586 1C14.621 1 14.7818 1.03216 14.9317 1.09461C15.0817 1.15707 15.2177 1.24859 15.3321 1.3639L16.6361 2.66793C16.7514 2.7823 16.8429 2.91836 16.9054 3.06827C16.9679 3.21819 17 3.37898 17 3.54139C17 3.70379 16.9679 3.86459 16.9054 4.0145C16.8429 4.16441 16.7514 4.30048 16.6361 4.41484L9.61156 11.464Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1475 12.0791V15.7697C15.1475 16.096 15.0179 16.4089 14.7872 16.6396C14.5565 16.8703 14.2436 17 13.9173 17H2.23022C1.90395 17 1.59103 16.8703 1.36032 16.6396C1.12961 16.4089 1 16.096 1 15.7697V4.08264C1 3.75636 1.12961 3.44345 1.36032 3.21274C1.59103 2.98203 1.90395 2.85242 2.23022 2.85242H5.92088"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default WriteIcon
