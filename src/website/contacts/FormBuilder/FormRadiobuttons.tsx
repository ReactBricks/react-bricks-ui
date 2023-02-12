import clsx from 'clsx'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import { UseFormRegister } from 'react-hook-form'
import blockNames from '../../blockNames'

export interface FormRadiobuttonsProps {
  register?: UseFormRegister<any>
  fieldName?: string
  fieldLabel?: string
  isRequired: boolean
  columns: 'one' | 'two'
}

const FormRadiobuttons: types.Brick<FormRadiobuttonsProps> = ({
  register,
  fieldName,
  fieldLabel,
  isRequired,
  columns,
}) => {
  return (
    <div
      className={clsx('w-full px-2 py-1', columns === 'two' && 'col-span-2')}
    >
      <span className="block text-gray-400 group-hover:text-indigo-600 font-medium uppercase tracking-widest text-sm peer-focus:text-indigo-700 mb-2">
        {fieldLabel}
      </span>
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
  getDefaultProps: () => ({
    columns: 'one',
    fieldName: 'radiobuttonsField',
    fieldLabel: 'Radiobuttons Label',
    radiobuttons: [
      {
        label: 'Label single radio',
        value: 'value',
      },
    ],
    isRequired: false,
  }),

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
      name: 'fieldLabel',
      type: types.SideEditPropType.Text,
      label: 'Field label',
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
