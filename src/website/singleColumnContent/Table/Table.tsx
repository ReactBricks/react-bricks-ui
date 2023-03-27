import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import {
  containerWidthSideGroup,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'

export interface TableProps extends LayoutProps {
  striped: boolean
  withHeader: boolean
  borders: 'none' | 'horizontal' | 'all'
}

const Table: types.Brick<TableProps> = ({
  striped,
  withHeader,
  borders,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <table className="w-full border-collapse border-spacing-0.5 sm:overflow-x-auto">
          <Repeater
            propName="rows"
            itemProps={{
              striped,
              withHeader,
              borders,
            }}
          />
        </table>
      </Container>
    </Section>
  )
}

Table.schema = {
  name: blockNames.Table,
  label: 'Table',
  category: 'single column / blog',
  tags: ['table'],
  repeaterItems: [
    {
      name: 'rows',
      itemType: blockNames.TableRow,
      min: 1,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Table',
      defaultOpen: true,
      props: [
        {
          name: 'withHeader',
          label: 'With header?',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'striped',
          label: 'Striped?',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'borders',
          label: 'Borders',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'none', label: 'None' },
              { value: 'horizontal', label: 'Horizontal' },
              { value: 'all', label: 'All' },
            ],
          },
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],

  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    striped: true,
    withHeader: true,
    borders: 'horizontal',
    rows: [
      {
        cells: [
          {
            cellText: '',
          },
          {
            cellText: 'Monolithic CMS',
            textAlign: 'center',
          },
          {
            cellText: 'Headless CMS',
            textAlign: 'center',
          },
          {
            cellText: 'Webflow',
            textAlign: 'center',
          },
          {
            cellText: 'React Bricks',
            textAlign: 'center',
          },
        ],
      },
      {
        cells: [
          {
            cellText: 'Easy for editors',
          },
          {
            cellText: 'It depends',
            textAlign: 'center',
          },
          {
            cellText: '',
            textAlign: 'center',
          },
          {
            cellText: 'Almost',
            textAlign: 'center',
          },
          {
            cellText: '✅',
            textAlign: 'center',
          },
        ],
      },
      {
        cells: [
          {
            cellText: 'Flexible for developers',
          },
          {
            cellText: '',
            textAlign: 'center',
          },
          {
            cellText: '✅',
            textAlign: 'center',
          },
          {
            cellText: '',
            textAlign: 'center',
          },
          {
            cellText: '✅',
            textAlign: 'center',
          },
        ],
      },
      {
        cells: [
          {
            cellText: 'Provides a method',
          },
          {
            cellText: '',
            textAlign: 'center',
          },
          {
            cellText: '',
            textAlign: 'center',
          },
          {
            cellText: '✅',
            textAlign: 'center',
          },
          {
            cellText: '✅',
            textAlign: 'center',
          },
        ],
      },
      {
        cells: [
          {
            cellText: 'Safe design system',
          },
          {
            cellText: 'It depends',
            textAlign: 'center',
          },
          {
            cellText: '',
            textAlign: 'center',
          },
          {
            cellText: '',
            textAlign: 'center',
          },
          {
            cellText: '✅',
            textAlign: 'center',
          },
        ],
      },
    ],
  }),
}

export default Table
