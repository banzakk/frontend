import SideBar from "@/components/molecule/SideBar/SideBar"
import cn from './layout.module.scss'

export default function MainLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <div className={cn.container}>
      <header className={cn.navSectionWrapper}>
        <section className={cn.navSection}>
          <SideBar />
        </section>
      </header>
      <div className={cn.mainSectionWrapper}>{children}</div>
      <div className={cn.rightSectionWrapper}>
        <div className={cn.fixedWrapper} />
      </div>
      {modal}
    </div>
  )
}
