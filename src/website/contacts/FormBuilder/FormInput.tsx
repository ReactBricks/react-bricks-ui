import * as React from 'react'
import clsx from 'clsx'
import { types } from 'react-bricks/frontend'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import blockNames from '../../blockNames'

export interface FormInputProps {
  register: UseFormRegister<any>
  errors: FieldErrorsImpl<{
    [x: string]: any
  }>
  fieldName?: string
  label?: string
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

const FormInput: types.Brick<FormInputProps> = ({
  register,
  isRequired = true,
  fieldName = '',
  label,
  inputType,
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
      <>
        <span className="block text-gray-600 text-sm mb-1">
          {label}
          {isRequired && <span className="text-red-600 ml-[5px]">*</span>}
        </span>
        <input
          type={inputType}
          className={clsx(
            'w-full px-[15px] py-[10px] border rounded outline-none peer',
            errors[fieldName]
              ? 'border-red-500'
              : 'border-gray-300 focus:border-sky-500'
          )}
          {...register(fieldName?.replace(/\s/g, '').toLowerCase() || key, {
            required: isRequired,
            //@ts-ignore
            valueAsNumber: inputType === 'number',
            //@ts-ignore
            valueAsDate: inputType === 'date',
            //@ts-ignore
            pattern: strToRegex(pattern),
          })}
        />

        {errors[fieldName] && (
          <span className="block mt-1 text-xs text-red-500 font-bold">
            {errors[fieldName]?.type === 'required' && requiredError}
            {errors[fieldName]?.type === 'pattern' && patternError}
          </span>
        )}
      </>
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
    fieldName: 'inputField',
    isRequired: false,
    inputType: 'text',
    columns: 'two',
    label: 'Input Field Label',
    requiredError: '',
    pattern: '',
    patternError: '',
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
