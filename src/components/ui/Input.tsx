/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister } from 'react-hook-form'
import cn from 'classnames'
type InputProps = {
    id?: string
    label?: string
    className?: string
    type?: HTMLInputTypeAttribute
    register?: UseFormRegister<any>
    placeholder?: string
    error?: string
    hidden?: boolean
    colorLabel?: string
}
export const Input = ({
    id,
    label,
    className,
    type = 'text',
    register,
    placeholder,
    error,
    hidden = false,
    colorLabel,
}: InputProps) => {
    return (
        <div className={cn("mb-6 h-[70px]", {
            'hidden': hidden === true
        })}>
            {!!label && <label htmlFor={id} className={cn("label",{'text-black': colorLabel === 'black'})}>{label}</label>}
            <input type={type} id={id} className={className} placeholder={placeholder} hidden={hidden} {...register?.(id)} />
            {!!error && <p className="text-red-600 text-right py-[5px]">{error}</p>}
        </div>
    )
}
