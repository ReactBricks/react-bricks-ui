import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'
import { BackgroundColorsSideEditProps } from '../LayoutSideProps'

export interface TableProps {
  bg?: { color: string; className: string }
}

const Table: types.Brick<TableProps> = ({ bg }) => {
  return (
    <Section bg={bg}>
      <Container className="py-12 xl:py-20">
        <table className="w-full">
          <Repeater propName="rows" />
        </table>
      </Container>
    </Section>
  )
}

Table.schema = {
  name: blockNames.Table,
  label: 'Table',
  category: 'rb-ui website',

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    rows: [
      {
        cells: [
          {
            cellText: 'Cell text default',
            text: 'Cell',
          },
          {
            cellText: 'Cell text default',
            text: 'Cell',
          },
        ],
      },
      {
        cells: [
          {
            cellText: 'Cell text default',
            text: 'Cell',
          },
          {
            cellText: 'Cell text default',
            text: 'Cell',
          },
        ],
      },
      {
        cells: [
          {
            cellText: 'Cell text default',
            text: 'Cell',
          },
          {
            cellText: 'Cell text default',
            text: 'Cell',
          },
        ],
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'rows',
      itemType: blockNames.TableRow,
      min: 1,
    },
  ],

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: false,
      props: [BackgroundColorsSideEditProps],
    },
  ],
}

export default Table
