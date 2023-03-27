import * as React from 'react'
import classNames from 'classnames'
import { highlightTextColors } from '../../colors'

import { Text, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import { badgeColorsEditProps } from '../../LayoutSideProps'

export interface BadgeProps {
  badgeColor: { color: string; className: string }
  textAlign: 'left' | 'center'
  className?: string
}

const Badge: types.Brick<BadgeProps> = ({
  badgeColor,
  textAlign,
  className,
}) => {
  return (
    <div className="flex justify-center items-center">
      <Text
        renderBlock={(props) => (
          <span
            className={classNames(
              'text-sm font-black uppercase inline-block min-w-[120px]',
              textAlign === 'center' ? 'text-center' : 'text-left',
              badgeColor.className,
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
  category: 'shared',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/Badge.tsx',
  getDefaultProps: () => ({
    text: 'Special',
    textAlign: 'center',
    badgeColor: highlightTextColors.SKY.value,
  }),
  sideEditProps: [badgeColorsEditProps],
}

export default Badge
