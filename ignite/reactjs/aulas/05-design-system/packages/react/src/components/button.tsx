import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Primary UI component for user interaction
 */
export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'sm' | 'md'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export const Button = ({
  className,
  size = 'sm',
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  console.log(variant)
  return (
    <button
      className={twMerge(
        'flex items-center justify-center rounded-md px-4 py-2 text-xl hover:opacity-0 transition ease-in-out duration-300',
        className,
        size === 'sm' ? 'h-4 text-sm' : 'h-12',
        variant === 'primary' && 'bg-pixel_mid text-grey100',
        variant === 'secondary' && 'bg-danger_light text-black',
        variant === 'tertiary' && 'bg-orange-500 text-green-400',
      )}
      {...rest}
    />
  )
}
