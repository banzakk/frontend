interface IconProps {
  width?: string
  height?: string
  color?: string
  className?: string
}

const ShareIcon: React.FC<IconProps> = ({
  width = '19',
  height = '22',
  color = '#C29DFF',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M15.5 15.12C14.74 15.12 14.06 15.42 13.54 15.89L6.41 11.74C6.46 11.51 6.5 11.28 6.5 11.04C6.5 10.8 6.46 10.57 6.41 10.34L13.46 6.22998C14 6.72998 14.71 7.03998 15.5 7.03998C17.16 7.03998 18.5 5.69998 18.5 4.03998C18.5 2.37998 17.16 1.03998 15.5 1.03998C13.84 1.03998 12.5 2.37998 12.5 4.03998C12.5 4.27998 12.54 4.50998 12.59 4.73998L5.54 8.84998C5 8.34998 4.29 8.03998 3.5 8.03998C1.84 8.03998 0.5 9.37998 0.5 11.04C0.5 12.7 1.84 14.04 3.5 14.04C4.29 14.04 5 13.73 5.54 13.23L12.66 17.39C12.61 17.6 12.58 17.82 12.58 18.04C12.58 19.65 13.89 20.96 15.5 20.96C17.11 20.96 18.42 19.65 18.42 18.04C18.42 16.43 17.11 15.12 15.5 15.12Z"
        fill={color}
        stroke={color}
      />
    </svg>
  )
}

export default ShareIcon
