import { Whisper as WhisperType} from "@/types/whisper";
import  Whisper  from "@/components/molecule/Whisper/Whisper";

const WhispersList: React.FC<{ whispers: WhisperType[] }> = ({ whispers }) => {
  return (
    <div>
      {whispers.map((whisper) => (
        <Whisper key={whisper.whisperId} {...whisper} />
      ))}
    </div>
  );
};

export default WhispersList;

