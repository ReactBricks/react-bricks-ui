import * as React from 'react'
import classNames from 'classnames'
import { FiCheck } from 'react-icons/fi'
import { Plain, Text, types } from 'react-bricks'
import { bulletColors } from '../colors'
import blockNames from '../blockNames'

export interface BulletListItemProps {
  variant: { color: string; className: string; className2: string }
  className: string
  attributes: string
}

const BulletListItem: types.Brick<BulletListItemProps> = ({
  variant = bulletColors.primaryLight.value,
  className,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        'flex justify-start items-center py-2 leading-tight',
        className
      )}
      {...rest}
    >
      <div
        className={classNames(
          'flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm',
          variant.className
        )}
        style={{ minWidth: '1.25rem' }}
      >
        <FiCheck />
      </div>
      <Text
        propName="text"
        renderBlock={(props: any) => (
          <span
            className={classNames('dark:text-gray-100', variant.className2)}
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
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    variant: bulletColors.primaryLight.value,
    text: Plain.deserialize('New item'),
  }),
}

export default BulletListItem
