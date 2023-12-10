interface IconProps {
  size?: string
  color?: string
  className?: string
}

const UploadImg: React.FC<IconProps> = ({
  size,
  color,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="icon-park:add-picture">
        <g id="Group">
          <path
            id="Vector"
            d="M22 12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12H22ZM12 4C12.5523 4 13 3.55228 13 3C13 2.44771 12.5523 2 12 2V4ZM19.5 20H4.5V22H19.5V20ZM4 19.5V4.5H2V19.5H4ZM20 12V19.5H22V12H20ZM4.5 4H12V2H4.5V4ZM4.5 20C4.22386 20 4 19.7761 4 19.5H2C2 20.8807 3.11928 22 4.5 22V20ZM19.5 22C20.8807 22 22 20.8807 22 19.5H20C20 19.7761 19.7761 20 19.5 20V22ZM4 4.5C4 4.22386 4.22386 4 4.5 4V2C3.11929 2 2 3.11928 2 4.5H4Z"
            fill={color}
          />
          <path
            id="Vector_2"
            d="M4 17.4998L9.34655 12.5988C9.71945 12.2569 10.2889 12.2474 10.673 12.5767L17 17.9998"
            stroke={color}
            strokeWidth="2.33"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_3"
            d="M14 15.4999L16.3867 13.1132C16.7386 12.7613 17.2957 12.7217 17.6939 13.0203L21 15.4999"
            stroke={color}
            strokeWidth="2.33"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_4"
            d="M15 6H21"
            stroke={color}
            strokeWidth="2.33"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_5"
            d="M18 3V9"
            stroke={color}
            strokeWidth="2.33"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  )
}

export default UploadImg
