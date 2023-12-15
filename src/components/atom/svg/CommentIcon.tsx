interface IconProps {
  size?: string
  color?: string
  className?: string
}

const CommentIcon: React.FC<IconProps> = ({
  size = '18',
  color = '#C29DFF',
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
      <g id="fluent:arrow-reply-down-16-filled" clipPath="url(#clip0_903_733)">
        <path
          id="Vector"
          d="M14.0184 8.52509L10.9502 4.50185C10.7677 4.26319 10.6609 3.94278 10.6512 3.60504C10.6415 3.2673 10.7297 2.93728 10.898 2.68132C11.0664 2.42537 11.3023 2.26246 11.5585 2.22535C11.8147 2.18825 12.0721 2.27969 12.279 2.48131L12.3932 2.61149L17.2022 8.91564L17.2946 9.05653L17.349 9.16353L17.417 9.33117L17.4619 9.49345L17.4823 9.61472L17.4959 9.72529L17.5 9.89292L17.4946 9.99814L17.4742 10.1658L17.4334 10.3441L17.3694 10.5189L17.3218 10.617C17.2865 10.6853 17.2465 10.7492 17.2022 10.8078L17.2946 10.6669C17.2663 10.7166 17.2354 10.7637 17.2022 10.8078L12.3932 17.1119C12.211 17.349 11.9672 17.4873 11.7107 17.4992C11.4541 17.511 11.2036 17.3956 11.0091 17.1759C10.8146 16.9561 10.6904 16.6483 10.6613 16.3138C10.6323 15.9794 10.7005 15.6428 10.8523 15.3714L10.9502 15.2216L14.0184 11.2001H9C4.03464 11.2001 0.660479 7.4961 0.50544 2.21559L0.5 1.83752C0.5 1.48278 0.607464 1.14258 0.798752 0.891749C0.990038 0.640917 1.24948 0.5 1.52 0.5C1.79052 0.5 2.04996 0.640917 2.24125 0.891749C2.43254 1.14258 2.54 1.48278 2.54 1.83752C2.54 5.63249 4.84112 8.35924 8.65048 8.51796L9 8.52509H14.0184Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_903_733">
          <rect
            width={size}
            height={size}
            fill="white"
            transform="matrix(-1 0 0 1 18 0)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CommentIcon
