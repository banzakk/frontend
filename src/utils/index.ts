import { FieldValues, Path, UseFormReturn } from 'react-hook-form'

type Message = {
  message: string
}

export class ValidationMessage {
  static make() {
    return new ValidationMessage()
  }
  /**
   * @param fieldName 아이디는, 비밀번호는 등 *조사 필수
   * @param type 문자열, 숫자 등
   * @returns ${fieldName} ${type} 이어야 합니다.
   */
  typeIs(fieldName: string, type: string): Message {
    return { message: `${fieldName} ${type} 이어야 합니다.` }
  }
  /**
   * @param fieldName 아이디는, 비밀번호는 등 *조사 필수
   * @returns ${fieldName} ${type} 이어야 합니다.
   */
  notEmpty(fieldName: string): Message {
    return { message: `${fieldName} 비울 수 없습니다.` }
  }
  /**
   * @param fieldName 아이디는, 비밀번호는 등 *조사 필수
   * @param min 최소값
   * @returns ${fieldName} ${type} 이어야 합니다.
   */
  minIs(fieldName: string, min: number): Message {
    return { message: `${fieldName} 최소 ${min}자 이상이어야 합니다.` }
  }
  /**
   * @param fieldName 아이디는, 비밀번호는 등 *조사 필수
   * @param max 최대값
   * @returns ${fieldName} ${type} 이어야 합니다.
   */
  maxIs(fieldName: string, max: number): Message {
    return { message: `${fieldName} 최대 ${max}자 이하이어야 합니다.` }
  }
}

/**
 * FormErrorBuilder
 */
export class FormErrorBuilder<T extends FieldValues> {
  private type?: Path<T>
  private message?: string
  /**
   * @param form react-hook-form 의 useForm
   */
  constructor(private form: UseFormReturn<T>) {}

  /**
   * @param type
   * @returns input 고유의 필드 이름
   */
  setType(type: Path<T>): FormErrorBuilder<T> {
    this.type = type
    return this
  }
  /**
   * @param message
   * @returns 인풋의 에러 메시지
   */
  setMessage(message: string): FormErrorBuilder<T> {
    this.message = message
    return this
  }
  /**
   * @returns form.setError(type, { message })
   */
  build() {
    if (!this.type || !this.message) {
      throw new Error('타입과 메시지는 반드시 지정되어야 합니다.')
    }
    return this.form.setError(this.type, { message: this.message })
  }
}
