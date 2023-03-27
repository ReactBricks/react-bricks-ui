import classNames from 'classnames'
import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'

export interface TableRowProps {
  index: number
  striped?: boolean
  withHeader?: boolean
  borders?: 'none' | 'horizontal' | 'all'
}

const TableRow: types.Brick<TableRowProps> = ({
  index,
  striped = false,
  withHeader = true,
  borders = 'horizontal',
}) => {
  if (withHeader && index === 0) {
    return (
      <thead className="text-xs text-gray-700 uppercase tracking-wide bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr className="align-middle">
          <Repeater
            propName="cells"
            itemProps={{
              isHeader: true,
              borders,
            }}
          />
        </tr>
      </thead>
    )
  }

  return (
    <tbody>
      <tr
        className={classNames(
          'align-middle',
          {
            'border-b border-black/10 dark:border-white/20':
              borders === 'horizontal',
          },
          striped && index % 2 === 0
            ? 'bg-gray-50 dark:bg-gray-800'
            : 'bg-white dark:bg-gray-900'
        )}
      >
        <Repeater propName="cells" itemProps={{ borders }} />
      </tr>
    </tbody>
  )
}

TableRow.schema = {
  name: blockNames.TableRow,
  label: 'Row',
  category: 'single column / blog',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    cells: [
      {
        text: 'Cell',
      },
      {
        text: 'Cell',
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'cells',
      itemType: blockNames.TableCell,
      min: 1,
    },
  ],

  sideEditProps: [],
}

export default TableRow
