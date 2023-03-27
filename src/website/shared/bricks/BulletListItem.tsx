import * as React from 'react'
import classNames from 'classnames'
import { FiCheck } from 'react-icons/fi'
import { Text, types } from 'react-bricks/frontend'
import { highlightBgColors } from '../../colors'
import blockNames from '../../blockNames'
import { bulletColorsEditProps } from '../../LayoutSideProps'

export interface BulletListItemProps {
  bulletColor: { color: string; className: string }
  className: string
  attributes: string
}

const BulletListItem: types.Brick<BulletListItemProps> = ({
  bulletColor = highlightBgColors.SKY.value,
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex justify-center md:justify-start items-center',
        className
      )}
    >
      <div
        className={classNames(
          'flex-shrink-0 flex justify-center items-center w-5 h-5 rounded-full mr-3 text-sm',
          bulletColor.className
        )}
      >
        <FiCheck />
      </div>
      <div>
        <Text
          propName="text"
          renderBlock={(props) => (
            <span
              className="text-gray-700 dark:text-gray-100 leading-tight inline-block min-w-[120px]"
              {...props.attributes}
            >
              {props.children}
            </span>
          )}
          placeholder="Type..."
        />
      </div>
    </div>
  )
}

BulletListItem.schema = {
  name: blockNames.BulletListItem,
  label: 'List item',
  category: 'shared',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/BulletListItem.tsx',

  getDefaultProps: () => ({
    bulletColor: highlightBgColors.SKY.value,
    text: 'New item',
  }),
  sideEditProps: [bulletColorsEditProps],
}

export default BulletListItem
