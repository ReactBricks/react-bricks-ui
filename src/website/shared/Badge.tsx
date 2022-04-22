import * as React from 'react'
import classNames from 'classnames'
import { badgeColors } from '../colors'

import { Text, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'

export interface BadgeProps {
  color?: { color: string; className: string }
  className?: string
}

const Badge: types.Brick<BadgeProps> = ({
  color = badgeColors.gray.value,
  className,
  ...rest
}) => {
  return (
    <div {...rest} className="flex justify-center items-center">
      <Text
        renderBlock={props => (
          <span
            className={classNames(
              'text-sm font-black uppercase text-center',
              color.className,
              className
            )}
            style={{ letterSpacing: '0.35em' }}
          >
            {props.children}
          </span>
        )}
        placeholder="Badge..."
        propName="text"
      />
    </div>
  )
}

Badge.schema = {
  name: blockNames.Badge,
  label: 'Badge',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/Badge.tsx',
  getDefaultProps: () => ({
    text: 'Special',
    color: badgeColors.gray.value,
  }),
  sideEditProps: [
    {
      name: 'color',
      label: 'Badge Color',
      type: types.SideEditPropType.Select,
      shouldRefreshText: true,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          badgeColors.gray,
          badgeColors.pink,
          badgeColors.blue,
          badgeColors.green,
        ],
      },
    },
  ],
}

export default Badge
