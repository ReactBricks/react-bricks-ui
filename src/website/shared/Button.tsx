import * as React from 'react'
import classNames from 'classnames'
import { Link, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import { buttonColors } from 'website/colors'
import { ButtonColorsSideEditProps } from 'website/LayoutSideProps'

export interface ButtonProps {
  text: string
  href: string
  isTargetBlank: boolean
  isBigButton: boolean
  buttonColor?: {
    color: string
    classNameSolid: string
    classNameOutline: string
  }
  type?: 'solid' | 'outline'
  padding: 'normal' | 'small'
  className?: string
}

const Button: types.Brick<ButtonProps> = ({
  text,
  href,
  isTargetBlank = false,
  isBigButton = false,
  buttonColor = buttonColors.SKY.value,
  type = 'solid',
  padding = 'normale',
  className,
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
        isBigButton && ' w-3/5 text-center rounded-full',
        {
          [buttonColor.classNameSolid]: type === 'solid',
        },
        {
          [buttonColor.classNameOutline]: type === 'outline',
        },

        className
      )}
    >
      {text}
    </Link>
  )
}

Button.schema = {
  name: blockNames.Button,
  label: 'Button',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/Button.tsx',

  getDefaultProps: () => ({
    text: 'Click me',
    href: '',
    isTargetBlank: false,
    buttonColor: buttonColors.SKY.value,
    type: 'solid',
    isBigButton: false,
  }),
  sideEditProps: [
    {
      name: 'text',
      label: 'Button text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isBigButton',
      label: 'Full width button',
      type: types.SideEditPropType.Boolean,
    },
    ButtonColorsSideEditProps,
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
