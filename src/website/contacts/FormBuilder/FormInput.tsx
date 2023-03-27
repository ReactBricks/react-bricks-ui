import * as React from 'react'
import classNames from 'classnames'
import { types, Plain, Text } from 'react-bricks/frontend'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import blockNames from '../../blockNames'
import { useAdminContext } from 'react-bricks/frontend'
import { textColors } from '../../colors'
export interface FormInputProps {
  register: UseFormRegister<any>
  errors: FieldErrorsImpl<{
    [x: string]: any
  }>
  fieldName?: string
  label?: any
  isRequired: boolean
  inputType: 'text' | 'number' | 'date' | 'email'
  key: string
  pattern?: string
  patternError?: string
  requiredError?: string
  columns: '1' | '1'
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
  const labelTextContent =
    typeof label === 'string' ? label : Plain.serialize(label)
  const { isAdmin } = useAdminContext()
  return (
    <div
      className={classNames(
        'px-2 py-1 group block col-span-2',
        columns === '1' && 'sm:col-span-1'
      )}
    >
      <label
        htmlFor={isAdmin ? '' : fieldName}
        className={classNames(
          isRequired
            ? labelTextContent === ''
              ? 'block w-full'
              : 'flex items-center space-x-1'
            : 'block w-full'
        )}
      >
        <Text
          propName="label"
          placeholder="label..."
          renderBlock={(props) => (
            <span
              className={classNames(textColors.GRAY_600, 'mb-1 text-sm')}
              {...props.attributes}
            >
              {props.children}
            </span>
          )}
        />

        {isRequired &&
          (labelTextContent === '' ? null : (
            <span className="text-red-600">*</span>
          ))}
      </label>

      <input
        id={fieldName}
        type={inputType}
        className={classNames(
          'w-full px-[15px] py-[10px] bg-white dark:bg-gray-900 dark:text-white border rounded outline-none focus:ring focus:ring-opacity-50',
          errors[fieldName]
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
            : 'border-gray-300 dark:border-gray-500 focus:border-sky-500 dark:focus:border-white focus:ring-sky-200 dark:focus:ring-white/20'
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
        <div className="block mt-1 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === 'required' && requiredError}
          {errors[fieldName]?.type === 'pattern' && patternError}
        </div>
      )}
    </div>
  )
}

FormInput.schema = {
  name: blockNames.FormInput,
  label: 'Input',
  category: 'contact',
  hideFromAddMenu: true,
  // tags: [],

  getDefaultProps: () => ({
    fieldName: 'firstname',
    isRequired: false,
    inputType: 'text',
    columns: '2',
    label: 'First Name',
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
          { value: '1', label: 'One' },
          { value: '2', label: 'Two' },
        ],
      },
    },
    {
      name: 'fieldName',
      type: types.SideEditPropType.Text,
      label: 'Field Name',
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
          { value: 'email', label: 'Email' },
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
      label: 'Required error message',
    },
    {
      name: 'pattern',
      type: types.SideEditPropType.Text,
      label: 'Pattern (RegEx)',
      validate: (value: string) => isRegex(value) || 'Invalid RegEx',
    },
    {
      name: 'patternError',
      type: types.SideEditPropType.Text,
      label: 'Pattern error message',
    },
  ],
}

export default FormInput
