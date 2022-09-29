import * as React from 'react'
import clsx from 'clsx'

import { Text, types } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'

interface Props {
  type: 'submit' | 'reset'
  color?: { color: string; className: string }
}

const FormButton: types.Brick<Props> = ({ type, color }) => {
  return (
    <button
      type={type}
      className={clsx('rounded-lg px-2 py-1 text-white', color?.className)}
    >
      <Text
        propName="buttonLabel"
        placeholder="Type a button label..."
        renderBlock={({ children }) => <span>{children}</span>}
        renderPlaceholder={({ children }) => (
          <span className="block text-inherit">{children}</span>
        )}
      />
    </button>
  )
}

FormButton.schema = {
  name: blockNames.FormButton,
  label: 'Form Button',
  category: 'rb-ui website',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    type: 'submit',
    color: {
      color: '#3b82f6',
      className: 'bg-blue-500',
    },
    buttonLabel: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Submit',
          },
        ],
      },
    ],
  }),

  sideEditProps: [
    {
      name: 'type',
      label: 'Type',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'submit', label: 'Submit' },
          { value: 'reset', label: 'Reset' },
        ],
      },
    },
    {
      name: 'color',
      label: 'Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            value: {
              color: '#3b82f6',
              className: 'bg-blue-500',
            },
            label: 'Blue',
          },
          {
            value: {
              color: '#9CA3AF',
              className: 'bg-gray-400',
            },
            label: 'Gray',
          },
        ],
      },
    },
  ],
}

export default FormButton
