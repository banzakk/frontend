import clsx from 'clsx'
import styles from './ProfileImg.module.scss'

interface ProfileImgProps {
  src: string
  alt: string
  className?: string
}

const ProfileImg: React.FC<ProfileImgProps> = ({ src, alt, className }) => {
  const containerClass = clsx(styles.container, className)

  return (
    <div className={containerClass}>
      {src && <img className={styles.img} src={src} alt={alt} />}
    </div>
  )
}

export default ProfileImg
