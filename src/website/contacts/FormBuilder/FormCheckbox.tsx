import clsx from 'clsx'
import * as React from 'react'
import { types } from 'react-bricks/frontend'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import blockNames from '../../blockNames'

export interface FormCheckboxProps {
  register: UseFormRegister<any>
  fieldName: string
  label: string
  isRequired: boolean
  key: string
  errors: FieldErrorsImpl<{
    [x: string]: any
  }>
  requiredError?: string
  columns: 'one' | 'two'
}

const FormCheckbox: types.Brick<FormCheckboxProps> = ({
  register,
  isRequired = true,
  fieldName,
  label,
  errors,
  requiredError,
  key,
  columns,
}) => {
  return (
    <div className={columns === 'two' ? 'col-span-2' : ''}>
      <label className="px-2 py-1 flex items-center">
        <input
          type="checkbox"
          className="rounded border-gray-300 accent-sky-500 shadow-sm focus:border-sky-300 focus:-0 focus:ring-offset-0"
          {...register(fieldName?.replace(/\s/g, '') || key, {
            required: isRequired,
          })}
        />
        <span className="ml-2 text-gray-600 dark:text-gray-50 font-medium">
          {label}
          {isRequired && <span className="text-red-600 ml-2">*</span>}
        </span>
      </label>
      <span className="block px-2 mt-2 text-xs text-red-500 font-bold">
        {errors[fieldName]?.type === 'required' && requiredError}
      </span>
    </div>
  )
}

FormCheckbox.schema = {
  name: blockNames.FormCheckbox,
  label: 'Form Checkbox',
  category: 'Tailblock Form',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    label: 'Checkbox Field',
    columns: 'two',
    isRequired: false,
    fieldName: 'checkboxField',
  }),

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
      name: 'label',
      type: types.SideEditPropType.Text,
      label: 'Label',
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

export default FormCheckbox
