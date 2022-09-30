import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'

interface Props {
  index: number
}

const TableRow: types.Brick<Props> = ({ index }) => {
  {
    return index === 0 ? (
      <thead>
        <tr>
          <Repeater
            propName="cells"
            itemProps={{
              isHeader: true,
            }}
          />
        </tr>
      </thead>
    ) : (
      <tbody>
        <tr>
          <Repeater propName="cells" />
        </tr>
      </tbody>
    )
  }
}

TableRow.schema = {
  name: blockNames.TableRow,
  label: 'Row',
  category: 'Multilevel',
  hideFromAddMenu: true,

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    cells: [{ text: 'Cell' }],
  }),

  repeaterItems: [
    {
      name: 'cells',
      itemType: blockNames.TableCell,
      min: 1,
    },
  ],

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default TableRow
