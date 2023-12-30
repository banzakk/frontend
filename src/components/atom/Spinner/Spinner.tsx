import cn from './Spinner.module.scss'

type Props = {}

const Spinner = (props: Props) => {
  return (
    <div className={cn.spinnerWrap}>
      <span className={cn.loader}></span>
    </div>
  )
}

export default Spinner
