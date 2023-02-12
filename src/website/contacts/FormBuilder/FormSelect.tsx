import * as React from 'react'
import { types } from 'react-bricks/frontend'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'
import blockNames from '../../blockNames'

export interface FormSelectProps {
  register: UseFormRegister<any>
  fieldName?: string
  label: string
  values?: string
  isRequired: boolean
  key: string
  errors: FieldErrorsImpl<{
    [x: string]: any
  }>
  requiredError?: string
  columns: 'one' | 'two'
}

const FormSelect: types.Brick<FormSelectProps> = ({
  values,
  isRequired,
  register,
  fieldName = 'select',
  label,
  key,
  errors,
  requiredError,
  columns,
}) => {
  return (
    <label
      className={clsx(
        'px-2 py-1 group block',
        columns === 'two' && 'col-span-2'
      )}
    >
      <span className="block text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-300 font-medium uppercase tracking-widest text-sm peer-focus:text-sky-700">
        {label}
        {isRequired && <span className="text-red-600 ml-2">*</span>}
      </span>
      <select
        className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 ring-sky-500 focus:shadow-sky-200 dark:focus:shadow-sky-900 focus:shadow-lg"
        {...register(fieldName?.replace(/\s/g, '').toLowerCase() || key)}
      >
        {values?.split('\n').map((valuelabel, index) => {
          const [value, label] = valuelabel.trim().split(':')
          if (label) {
            return (
              <option key={index} value={value}>
                {label.trim()}
              </option>
            )
          }
          return (
            <option key={index} value={value}>
              {value}
            </option>
          )
        })}
      </select>
      {errors[fieldName] && (
        <span className="block mt-2 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === 'required' && requiredError}
        </span>
      )}
    </label>
  )
}

FormSelect.schema = {
  name: blockNames.FormSelect,
  label: 'Form Select',
  category: 'Tailblock Select',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    fieldName: 'selectField',
    label: 'Select Field Label',
    columns: 'two',
    values: 'value : Value',
    isRequired: false,
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
      name: 'values',
      label: 'Value : Label',
      type: types.SideEditPropType.Textarea,
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

export default FormSelect
