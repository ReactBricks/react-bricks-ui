import * as React from 'react'
import classNames from 'classnames'
import { Text, Link, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import { buttonColors } from 'website/colors'
import { buttonColorsEditProps } from 'website/LayoutSideProps'

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
        'inline-block whitespace-nowrap text-center py-3 rounded-full font-bold leading-none hover:shadow-lg transition-all ease-out duration-150 hover:-translate-y-0.5 min-w-[120px]',
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
      <Text
        propName="text"
        placeholder="Action text..."
        renderBlock={({ children }) => <span>{children}</span>}
      />
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
    // {
    //   name: 'text',
    //   label: 'Button text',
    //   type: types.SideEditPropType.Text,
    // },
    {
      name: 'isBigButton',
      label: 'Full width button',
      type: types.SideEditPropType.Boolean,
    },
    buttonColorsEditProps,
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
