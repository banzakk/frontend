import Link from 'next/link'
import clsx from 'clsx'
import cn from './Category.module.scss'
import { Button } from '@/components/ui/button'

interface CategoryProps {
  category: string
  href: string
  icon: JSX.Element
  children: React.ReactNode
  className: string
}

const Category: React.FC<CategoryProps> = ({
  category,
  href,
  icon,
  className,
}) => {
  return (
    <Button
      variant="ghost"
      asChild
      className={clsx(className, cn.container, 'text-lg font-semibold')}
    >
      <Link href={href}>
        {icon}
        {category}
      </Link>
    </Button>
  )
}

export default Category
