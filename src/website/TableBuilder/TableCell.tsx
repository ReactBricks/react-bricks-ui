import React from 'react'
import { Text, types } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'

interface Props {
  isHeader: boolean
}

const TableCell: types.Brick<Props> = ({ isHeader }) => {
  return isHeader ? (
    <th className="px-4 py-3 bg-gray-100 dark:bg-gray-800">
      <Text
        propName="cellText"
        placeholder="Type a column..."
        renderBlock={({ children }) => (
          <span className="title-font tracking-wider font-medium text-gray-900 dark:text-white text-sm">
            {children}
          </span>
        )}
      />
    </th>
  ) : (
    <td className="px-4 py-3">
      <Text
        propName="cellText"
        placeholder="Type a column..."
        renderBlock={({ children }) => <span>{children}</span>}
      />
    </td>
  )
}

TableCell.schema = {
  name: blockNames.TableCell,
  label: 'Cell',
  category: 'Multilevel',
  hideFromAddMenu: true,

  // Defaults when a new brick is added
  getDefaultProps: () => ({}),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default TableCell
