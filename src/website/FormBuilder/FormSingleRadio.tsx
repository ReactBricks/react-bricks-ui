import * as React from 'react'
import { types } from 'react-bricks/frontend'
import { UseFormRegister } from 'react-hook-form'
import blockNames from 'website/blockNames'

interface Props {
  register: UseFormRegister<any>
  fieldName?: string
  label: string
  value: string
  isRequired: boolean
  key: string
}

const FormSingleRadio: types.Brick<Props> = ({
  register,
  fieldName,
  label,
  value,
  isRequired,
  key,
}) => {
  return (
    <label className="col-span-1">
      <input
        {...register(fieldName?.replace(/\s/g, '').toLowerCase() || key)}
        type="radio"
        value={value}
      />
      <span className="ml-2">{label}</span>
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
    label: 'Label',
    value: 'ciao',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    { name: 'label', type: types.SideEditPropType.Text, label: 'Label' },
    { name: 'value', type: types.SideEditPropType.Text, label: 'Value' },
  ],
}

export default FormSingleRadio
