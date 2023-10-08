/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister } from 'react-hook-form'
type InputProps = {
    id?: string
    label?: string
    className?: string
    type?: HTMLInputTypeAttribute
    register?: UseFormRegister<any>
    placeholder?: string
    error?: string
}
export const Input = ({
    id,
    label,
    className,
    type = 'text',
    register,
    placeholder,
    error,
}: InputProps) => {
    return (
        <div className="mb-6 h-[70px]">
            {!!label && <label htmlFor={id} className="label">{label}</label>}
            <input type={type} id="taiKhoan" className={className} placeholder={placeholder} {...register?.(id)} />
            {!!error && <p className="text-red-600 text-right py-[5px]">{error}</p>}
        </div>
    )
}
