import { ReactNode } from 'react'
import clsx from 'clsx'
import cn from './Typography.module.scss'

interface TextProps {
  children: ReactNode
  type?: React.ElementType
  size?: '14' | '16' | '18' | '24'
  color?:
    | 'black'
    | 'red'
    | 'white'
    | 'primary'
    | 'gray-strong'
    | 'gray-normal'
    | 'gray-light'
  weight?: '400' | '600' | '800'
  className?: string
}

const Typography: React.FC<TextProps> = ({
  children,
  type = 'span',
  size = '16',
  color = 'black',
  weight = '400',
  className,
}) => {
  const Tag = type as keyof JSX.IntrinsicElements
  const styleClassName = clsx(
    {
      [cn.fontSize14]: size === '14',
      [cn.fontSize16]: size === '16',
      [cn.fontSize18]: size === '18',
      [cn.fontSize24]: size === '24',
      [cn.black]: color === 'black',
      [cn.red]: color === 'red',
      [cn.white]: color === 'white',
      [cn.primary]: color === 'primary',
      [cn.grayStrong]: color === 'gray-strong',
      [cn.grayNormal]: color === 'gray-normal',
      [cn.grayLight]: color === 'gray-light',
      [cn.fontWeight800]: weight === '800',
      [cn.fontWeight600]: weight === '600',
      [cn.fontWeight400]: weight === '400',
    },
    className
  )

  return <Tag className={styleClassName}>{children}</Tag>
}

export default Typography
