'use client'

import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ProgressStatus } from '@/types'
import Link from 'next/link'
import React, { SetStateAction, useState } from 'react'
import ProfileImageForm from '../ProfileImageForm/ProfileImageForm'
import { SignUpForm } from '../SignUpForm/SignUpForm'
import { SignUpModal } from '../SignUpModal/SignUpModal'
import cn from './ProgressModal.module.scss'

type ProgressComponentType = {
  setProgress: React.Dispatch<React.SetStateAction<ProgressStatus>>
  setCustomId?: React.Dispatch<React.SetStateAction<string>>
  customId?: string
}

const SignUp = ({ setProgress, setCustomId }: ProgressComponentType) => {
  return (
    <>
      {/* <Link href="/">뒤로</Link> */}
      <Typography type="h2" weight="600" size="24" className={cn.header}>
        회원가입을 위해 <br />
        정보를 입력해주세요.
      </Typography>
      <SignUpForm setProgress={setProgress} setCustomId={setCustomId} />
    </>
  )
}

const Agreement = ({
  setProgress,
}: {
  setProgress: React.Dispatch<SetStateAction<ProgressStatus>>
}) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <Typography type="h2" weight="600" size="24" className={cn.header}>
        반짝 서비스 이용약관 및 <br />
        정보이용 안내에 대해 동의해 주세요.
      </Typography>
      <Typography type="p" className={cn.description}>
        반짝은 이 데이터를 이용하여 <br />
        <b>사용자에 맞게 환경을 최적화 할 수 있습니다.</b> <br />
        이 웹 브라우징 기록은 절대 <br />
        사용자 이름, 이메일 또는 전화번호와 함께 <br />
        저장되지 않습니다.
        <br />
        <br />
        가입하면 반짝의 운영원칙, 개인정보 처리방침 및 쿠키 사용에 동의하게
        됩니다.
        <br />
        반짝에서는 개인정보 처리방침에 <br />
        명시된 목적에 따라 이메일 주소 및 전화번호 등 <br />내 연락처 정보를
        사용할 수 있습니다.
        <br />
        <br />
        <br />
        <Link href="/" className={cn.link}>
          자세히 알아보기
        </Link>
      </Typography>
      <div className={cn.checkWrap}>
        <Checkbox
          onCheckedChange={() => {
            setActive((prev) => !prev)
          }}
        />
        내용을 확인하였으며 정보 제공에 동의합니다.
      </div>
      <Button
        size="full"
        disabled={!active}
        onClick={() => {
          setProgress('picture')
        }}
      >
        완료
      </Button>
    </>
  )
}

const Picture = ({ setProgress, customId }: ProgressComponentType) => {
  return (
    <>
      <Typography type="h2" weight="600" size="24" className={cn.header}>
        나만의 개성이 담긴 <br />
        프로필 이미지를 설정해 주세요.
      </Typography>
      <div className={cn.profileImage}>
        <ProfileImageForm setProgress={setProgress} customId={customId} />
      </div>
    </>
  )
}

const HashTag = ({
  setProgress,
}: {
  setProgress: React.Dispatch<SetStateAction<ProgressStatus>>
}) => {
  return (
    <Typography type="h2" weight="600" size="24" className={cn.header}>
      회원가입을 위해 <br />
      정보를 입력해주세요.
    </Typography>
  )
}

const Follow = ({
  setProgress,
}: {
  setProgress: React.Dispatch<SetStateAction<ProgressStatus>>
}) => {
  return (
    <Typography type="h2" weight="600" size="24" className={cn.header}>
      회원가입을 위해 <br />
      정보를 입력해주세요.
    </Typography>
  )
}

const progressComponent: {
  [key: string]: (props: ProgressComponentType) => React.JSX.Element
} = {
  signup: SignUp,
  agreement: Agreement,
  picture: Picture,
  hashTag: HashTag,
  follow: Follow,
}

const ProgressComponent = (
  props: {
    type: string
  } & ProgressComponentType
) => {
  const SpecificModal = progressComponent[props.type]
  return (
    <SpecificModal
      setProgress={props.setProgress}
      setCustomId={props.setCustomId}
      customId={props.customId}
    />
  )
}
const ProgressModal = () => {
  const [progressState, setProgressState] = useState<ProgressStatus>('signup')
  const [customId, setCustomId] = useState<string>('')

  return (
    <SignUpModal>
      <ProgressComponent
        type={progressState}
        setProgress={setProgressState}
        setCustomId={setCustomId}
        customId={customId}
      />
    </SignUpModal>
  )
}

export default ProgressModal
