import clsx from 'clsx'
import * as React from 'react'
import { types } from 'react-bricks/frontend'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import blockNames from '../../blockNames'

export interface FormTextareaProps {
  register: UseFormRegister<any>
  isRequired: boolean
  fieldName?: string
  label: string
  key: string
  errors: FieldErrorsImpl<{
    [x: string]: any
  }>
  requiredError?: string
  columns: 'one' | 'two'
}

const FormTextarea: types.Brick<FormTextareaProps> = ({
  fieldName = 'text area',
  label,
  isRequired = true,
  key,
  register,
  errors,
  requiredError,
  columns,
}) => {
  return (
    <label
      className={clsx(
        'px-2 py-1 group block',
        columns === 'two' ? 'col-span-2' : ''
      )}
    >
      <span className="block text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-300 font-medium uppercase tracking-widest text-sm peer-focus:text-sky-700">
        {label} {isRequired && <span className="text-red-600">*</span>}
      </span>

      <textarea
        className={clsx(
          'w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:shadow-sky-200 dark:focus:shadow-sky-900 focus:shadow-lg peer',
          errors[fieldName] ? 'ring-1 ring-red-400' : 'ring-sky-500'
        )}
        {...register(fieldName.toLowerCase() || key, {
          required: isRequired,
        })}
      />

      {errors[fieldName] && (
        <span className="block mt-2 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === 'required' && requiredError}
        </span>
      )}
    </label>
  )
}

FormTextarea.schema = {
  name: blockNames.FormTextArea,
  label: 'Form Textarea',
  category: 'Tailblock Form',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    columns: 'two',
    fieldName: 'textareaField',
    label: 'Textarea Field',
    isRequired: false,
    requiredError: '',
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

export default FormTextarea
