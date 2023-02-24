import * as React from 'react'
import classNames from 'classnames'
import { Text, Link, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import { buttonColors } from '../../colors'
import { buttonColorsEditProps } from '../../LayoutSideProps'

export interface ButtonProps {
  text: string
  href: string
  isTargetBlank: boolean
  buttonColor: {
    color: string
    classNameSolid: string
    classNameOutline: string
  }
  type: 'solid' | 'outline'
  padding: 'normal' | 'small'
  className?: string
}

const Button: types.Brick<ButtonProps> = ({
  href,
  isTargetBlank,
  buttonColor,
  type,
  padding,
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
        'inline-block whitespace-nowrap text-center rounded-full font-bold leading-none hover:shadow-lg transition-all ease-out duration-150 hover:-translate-y-0.5',
        padding === 'small'
          ? 'py-2 px-4 text-sm min-w-[75px]'
          : 'py-3 px-5 min-w-[120px]',
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
        placeholder="Action"
        renderBlock={({ children }) => <span>{children}</span>}
      />
    </Link>
  )
}

Button.schema = {
  name: blockNames.Button,
  label: 'Button',
  category: 'shared',
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
    padding: 'normal',
  }),
  sideEditProps: [
    // {
    //   name: 'text',
    //   label: 'Button text',
    //   type: types.SideEditPropType.Text,
    // },
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'normal', label: 'Normal' },
          { value: 'small', label: 'Small' },
        ],
      },
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
