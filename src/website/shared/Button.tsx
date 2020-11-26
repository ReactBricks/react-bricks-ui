import * as React from 'react'
import classNames from 'classnames'
import { Link, types } from 'react-bricks'
import blockNames from '../blockNames'

export interface ButtonProps {
  text: string
  href: string
  isTargetBlank: boolean
  variant?: 'primary' | 'secondary'
  type?: 'solid' | 'outline'
  padding: 'normal' | 'small'
  className?: string
}

const Button: types.Brick<ButtonProps> = ({
  text,
  href,
  isTargetBlank = false,
  variant = 'primary',
  type = 'solid',
  padding = 'normal',
  className,
  ...rest
}) => {
  const target = isTargetBlank
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      {...target}
      className={classNames(
        'py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150',
        padding === 'normal' ? 'px-8' : 'px-5',
        {
          'bg-primary-500 text-white hover:bg-primary-600 hover:text-white':
            variant === 'primary' && type === 'solid',
        },
        {
          'bg-secondary-500 text-white hover:bg-secondary-600 hover:text-white':
            variant === 'secondary' && type === 'solid',
        },
        {
          'border border-primary-600 text-primary-600 hover:text-primary-600 dark:border-primary-500 dark:text-primary-500':
            variant === 'primary' && type === 'outline',
        },
        {
          'border border-secondary-600 text-secondary-600 hover:text-secondary-600 dark:border-secondary-500 dark:text-secondary-500':
            variant === 'secondary' && type === 'outline',
        },
        className
      )}
      {...rest}
    >
      {text}
    </Link>
  )
}

Button.schema = {
  name: blockNames.Button,
  label: 'Button',
  getDefaultProps: () => ({
    text: 'Click me',
    href: '',
    isTargetBlank: false,
    variant: 'primary',
    type: 'solid',
  }),
  sideEditProps: [
    {
      name: 'text',
      label: 'Button text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'variant',
      label: 'Variant',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'primary', label: 'Primary' },
          { value: 'secondary', label: 'Secondary' },
        ],
      },
    },
    {
      name: 'type',
      label: 'Type',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'solid', label: 'Solid' },
          { value: 'outline', label: 'Outline' },
        ],
      },
    },
    {
      name: 'href',
      label: 'Link (external or path)',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isTargetBlank',
      label: 'Open in new window',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default Button
