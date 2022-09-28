import * as React from 'react'
import clsx from 'clsx'
import { types } from 'react-bricks/frontend'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import blockNames from 'website/blockNames'

interface Props {
  register: UseFormRegister<any>
  errors: FieldErrorsImpl<{
    [x: string]: any
  }>
  fieldName?: string
  label: string
  isRequired: boolean
  inputType: 'text' | 'number' | 'date'
  key: string
  pattern?: string
  patternError?: string
  requiredError?: string
  columns: 'one' | 'two'
}

const isRegex = (strRegex: string): boolean => {
  try {
    const testRegex = new RegExp(strRegex)
    return true
  } catch {
    return false
  }
}

const strToRegex = (strRegex: string | undefined): RegExp | undefined => {
  try {
    const testRegex = strRegex ? new RegExp(strRegex) : undefined
    return testRegex
  } catch {
    return undefined
  }
}

const FormInput: types.Brick<Props> = ({
  register,
  isRequired = true,
  fieldName = 'test',
  label = 'Label',
  inputType = 'text',
  key,
  pattern,
  errors,
  patternError,
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
      <span className="block text-gray-400 group-hover:text-indigo-600 font-medium uppercase tracking-widest text-sm peer-focus:text-indigo-700">
        {label}
        {isRequired && <span className="text-red-600 ml-2">*</span>}
      </span>
      <input
        type={inputType}
        className={clsx(
          'w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:shadow-indigo-200 focus:shadow-lg peer',
          errors[fieldName] ? 'ring-1 ring-red-400' : 'ring-indigo-500'
        )}
        {...register(fieldName?.replace(/\s/g, '').toLowerCase() || key, {
          required: isRequired,
          valueAsNumber: inputType === 'number',
          valueAsDate: inputType === 'date',
          pattern: strToRegex(pattern),
        })}
      />
      {errors[fieldName] && (
        <span className="block mt-2 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === 'required' && requiredError}
          {errors[fieldName]?.type === 'pattern' && patternError}
        </span>
      )}
    </label>
  )
}

FormInput.schema = {
  name: blockNames.FormInput,
  label: 'Form Input',
  category: 'Tailblock Form',
  hideFromAddMenu: true,
  // tags: [],

  getDefaultProps: () => ({
    fieldName: 'test',
    isRequired: true,
    inputType: 'text',
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
      name: 'lanel',
      type: types.SideEditPropType.Text,
      label: 'Label',
    },
    {
      name: 'inputType',
      type: types.SideEditPropType.Select,
      label: 'Input type',
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'text', label: 'Text' },
          { value: 'number', label: 'Number' },
          { value: 'date', label: 'Date' },
          { value: 'password', label: 'Password' },
        ],
      },
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
    {
      name: 'pattern',
      type: types.SideEditPropType.Text,
      label: 'Pattern',
      validate: (value: string) => isRegex(value) || 'Invalid RegEx',
    },
    {
      name: 'patternError',
      type: types.SideEditPropType.Text,
      label: 'Error pattern',
    },
  ],
}

export default FormInput
