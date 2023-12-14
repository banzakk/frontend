import cn from './signup.module.scss'
export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return <section className={cn.container}>{children}</section>
}
