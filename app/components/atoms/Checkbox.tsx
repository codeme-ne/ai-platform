'use client'

import { CheckboxProps } from '@/app/lib/types'

export function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = ''
}: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked)
    }
  }

  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={label}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <label
        htmlFor={label}
        className={`ml-2 text-sm text-neutral-700 select-none cursor-pointer ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-neutral-900'
        }`}
      >
        {label}
      </label>
    </div>
  )
}