import clsx from 'clsx'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import { UseFormRegister } from 'react-hook-form'
import blockNames from 'website/blockNames'

interface Props {
  register?: UseFormRegister<any>
  fieldName?: string
  isRequired: boolean
  columns: 'one' | 'two'
}

const FormRadiobuttons: types.Brick<Props> = ({
  register,
  fieldName,
  isRequired,
  columns,
}) => {
  return (
    <div className={clsx('w-full', columns === 'two' && 'col-span-2')}>
      <Repeater
        propName="radiobuttons"
        itemProps={{
          fieldName,
          register,
          isRequired,
        }}
      />
    </div>
  )
}

FormRadiobuttons.schema = {
  name: blockNames.FormRadiobuttons,
  label: 'Form Radiobuttons',
  category: 'Tailblock Form',
  hideFromAddMenu: true,

  // Defaults when a new brick is added
  getDefaultProps: () => ({}),

  repeaterItems: [
    {
      name: 'radiobuttons',
      itemType: blockNames.FormSingleRadio,
      min: 1,
    },
  ],

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'columns',
      label: 'Columns',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ],
      },
    },
    {
      name: 'fieldName',
      type: types.SideEditPropType.Text,
      label: 'Field Name',
    },
    {
      name: 'isRequired',
      type: types.SideEditPropType.Boolean,
      label: 'Field required',
    },
    {
      name: 'requiredError',
      type: types.SideEditPropType.Text,
      label: 'Error required',
    },
  ],
}

export default FormRadiobuttons
