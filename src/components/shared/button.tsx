import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] rounded-lg',
  ghost:
    'bg-transparent text-[var(--gray-700)] hover:bg-[var(--gray-100)] rounded-lg',
  outline:
    'border border-[var(--gray-200)] text-[var(--black)] hover:bg-[var(--gray-100)] rounded-lg',
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold',
          'transition-all duration-[120ms] ease-out',
          'active:scale-[0.97]',
          'disabled:pointer-events-none disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
