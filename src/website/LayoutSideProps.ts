import { types } from 'react-bricks/frontend'

interface LayoutPropProps {
  colors?: types.IOption[]
}

export const LayoutProp = ({
  colors,
}: LayoutPropProps = {}): types.ISideGroup => {
  return colors && colors?.length > 0
    ? {
        groupName: 'Layout',
        props: [
          {
            name: 'bg',
            label: 'Background',
            type: types.SideEditPropType.Select,
            selectOptions: {
              display: types.OptionsDisplay.Color,
              options: [...colors],
            },
          },
          {
            name: 'borderTop',
            label: 'Border Top',
            type: types.SideEditPropType.Select,
            selectOptions: {
              display: types.OptionsDisplay.Select,
              options: [
                { value: 'none', label: 'None' },
                { value: 'full', label: 'Full-width' },
                { value: 'boxed', label: 'Boxed' },
              ],
            },
          },
          {
            name: 'borderBottom',
            label: 'Border Bottom',
            type: types.SideEditPropType.Select,
            selectOptions: {
              display: types.OptionsDisplay.Select,
              options: [
                { value: 'none', label: 'None' },
                { value: 'full', label: 'Full-width' },
                { value: 'boxed', label: 'Boxed' },
              ],
            },
          },
          {
            name: 'width',
            label: 'Width',
            type: types.SideEditPropType.Select,
            selectOptions: {
              display: types.OptionsDisplay.Select,
              options: [
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
              ],
            },
          },
        ],
      }
    : {
        groupName: 'Layout',
        props: [
          {
            name: 'borderTop',
            label: 'Border Top',
            type: types.SideEditPropType.Select,
            selectOptions: {
              display: types.OptionsDisplay.Select,
              options: [
                { value: 'none', label: 'None' },
                { value: 'full', label: 'Full-width' },
                { value: 'boxed', label: 'Boxed' },
              ],
            },
          },
          {
            name: 'borderBottom',
            label: 'Border Bottom',
            type: types.SideEditPropType.Select,
            selectOptions: {
              display: types.OptionsDisplay.Select,
              options: [
                { value: 'none', label: 'None' },
                { value: 'full', label: 'Full-width' },
                { value: 'boxed', label: 'Boxed' },
              ],
            },
          },
          // {
          //   name: 'width',
          //   label: 'Width',
          //   type: types.SideEditPropType.Select,
          //   selectOptions: {
          //     display: types.OptionsDisplay.Select,
          //     options: [
          //       { value: 'sm', label: 'Small' },
          //       { value: 'md', label: 'Medium' },
          //       { value: 'lg', label: 'Large' },
          //     ],
          //   },
          // },
        ],
      }
}
