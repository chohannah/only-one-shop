import { InputHTMLAttributes } from 'react'
import { useState } from 'react'
import clsx from 'clsx'

import { StyledFormInput } from './styles'
import { VisibleTrueIcon, VisibleFalseIcon } from '../../assets/icons'

type FormInputProps = {
  label: string
  placeholder?: string
  type?: string
} & InputHTMLAttributes<HTMLInputElement>

export const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  type,
  ...otherProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <StyledFormInput className={clsx('form-input')}>
      {label ? <label className="form-input-label">{label}</label> : null}

      <div className="form-input-input-wrapper">
        <input
          className="form-input-input"
          placeholder={placeholder}
          type={isPasswordVisible ? 'text' : type}
          {...otherProps}
        />

        {type === 'password' ? (
          <button
            className="visibility-toggle-button"
            type="button"
            onClick={togglePasswordVisible}
          >
            {isPasswordVisible ? <VisibleTrueIcon /> : <VisibleFalseIcon />}
          </button>
        ) : null}
      </div>
    </StyledFormInput>
  )
}
