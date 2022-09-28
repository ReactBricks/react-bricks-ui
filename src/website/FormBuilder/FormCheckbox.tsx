import clsx from 'clsx'
import * as React from 'react'
import { types } from 'react-bricks/frontend'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

interface Props {
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

const FormCheckbox: types.Brick<Props> = ({
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
    <div>
      <label
        className={clsx(
          'px-2 py-1 flex items-center',
          columns === 'two' && 'col-span-2'
        )}
      >
        <input
          type="checkbox"
          className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
          {...register(fieldName?.replace(/\s/g, '') || key, {
            required: isRequired,
          })}
        />
        <span className="ml-2 text-gray-600 font-medium">
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
  name: 'form-checkbox',
  label: 'Form Checkbox',
  category: 'Tailblock Form',
  hideFromAddMenu: true,

  getDefaultProps: () => ({}),

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
