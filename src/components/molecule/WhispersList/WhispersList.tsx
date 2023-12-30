import Whisper from '@/components/molecule/Whisper/Whisper'
import { WhisperProps } from '@/types'
import cn from './WhispersList.module.scss'

const WhispersList: React.FC<{ whispers: WhisperProps[] }> = ({ whispers }) => {
  return (
    <ul className={cn.WhisperArea}>
      {whispers.map((whisper) => (
        <li key={whisper.whisperId} className={cn.container}>
            <Whisper {...whisper} />
        </li>
      ))}
    </ul>
  )
}

export default WhispersList
