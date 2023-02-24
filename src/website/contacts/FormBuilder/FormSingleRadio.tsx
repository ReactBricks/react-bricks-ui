import * as React from 'react'
import { types } from 'react-bricks/frontend'
import { UseFormRegister } from 'react-hook-form'
import blockNames from '../../blockNames'

export interface FormSingleRadioProps {
  register: UseFormRegister<any>
  fieldName?: string
  label: string
  value: string
  isRequired: boolean
  key: string
}

const FormSingleRadio: types.Brick<FormSingleRadioProps> = ({
  register,
  fieldName,
  label,
  value,
  isRequired,
  key,
}) => {
  return (
    <label className="block">
      <input
        className="h-4 w-4 border-gray-300 text-sky-500 focus:ring-sky-500"
        {...register(fieldName?.replace(/\s/g, '').toLowerCase() || key)}
        type="radio"
        value={value}
      />
      <span className="ml-2 text-gray-800 dark:text-gray-50">{label}</span>
    </label>
  )
}

FormSingleRadio.schema = {
  name: blockNames.FormSingleRadio,
  label: 'Form Single Radio',
  category: 'Tailblock Form',
  hideFromAddMenu: true,
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    label: 'Label single radio',
    value: 'value',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    { name: 'label', type: types.SideEditPropType.Text, label: 'Label' },
    { name: 'value', type: types.SideEditPropType.Text, label: 'Value' },
  ],
}

export default FormSingleRadio
