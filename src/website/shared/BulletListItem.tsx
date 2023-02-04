import * as React from 'react'
import classNames from 'classnames'
import { FiCheck } from 'react-icons/fi'
import { Text, types } from 'react-bricks/frontend'
import { highlightBgColors } from '../colors'
import blockNames from '../blockNames'
import { BulletColorsSideEditProps } from 'website/LayoutSideProps'

export interface BulletListItemProps {
  bulletColor: { color: string; className: string; }
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
        'flex justify-start items-center py-2 leading-tight',
        className
      )}
    >
      <div
        className={classNames(
          'flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm',
          bulletColor.className
        )}
        style={{ minWidth: '1.25rem' }}
      >
        <FiCheck />
      </div>
      <Text
        propName="text"
        renderBlock={(props) => (
          <span
            className="text-gray-700 dark:text-gray-100"
            {...props.attributes}
          >
            {props.children}
          </span>
        )}
        placeholder="Type..."
      />
    </div>
  )
}

BulletListItem.schema = {
  name: blockNames.BulletListItem,
  label: 'List item',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/BulletListItem.tsx',

  getDefaultProps: () => ({
    bulletColor: highlightBgColors.SKY.value,
    text: 'New item',
  }),
  sideEditProps: [BulletColorsSideEditProps],
}

export default BulletListItem
