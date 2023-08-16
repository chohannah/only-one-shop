import { InputHTMLAttributes, FC } from 'react'

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="form-input">
      <input className="form-input-input" {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value ? 'is-shrinked' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput
