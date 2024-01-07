import Logo from "@/components/atom/svg/Logo"
import Link from "next/link"
import UserProfile from "../UserProfile/UserProfile"
import { Button } from "@/components/ui/button"
import WriteIcon from "@/components/atom/svg/WriteIcon"
import { Nav } from "../Nav/Nav"
import { CATEGORY } from "@/constants/categoryList"
import cn from "./SideBar.module.scss"

const SideBar = () => {
  return (
    <div className={cn.fixedWrapper}>
    <div className={cn.navArea}>
      <Link href="/" className={cn.logo}>
        <Logo />
      </Link>
      <UserProfile />
      <Button
        asChild
        className="text-base w-full h-11 shadow-md"
      >
        <Link href="/write">
          <WriteIcon
            size="16"
            color="white"
            className={cn.icon}
          />
          글쓰기
        </Link>
      </Button>
      <Nav items={CATEGORY} />
    </div>
  </div>
  )
}

export default SideBar