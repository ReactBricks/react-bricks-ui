import * as React from 'react'
import { types, Plain, Text } from 'react-bricks/frontend'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import classNames from 'classnames'
import blockNames from '../../blockNames'
import { useAdminContext } from 'react-bricks/frontend'
import { textColors } from '../../colors'

export interface FormSelectProps {
  register: UseFormRegister<any>
  fieldName?: string
  label: string
  options?: string
  isRequired: boolean
  key: string
  errors: FieldErrorsImpl<{
    [x: string]: any
  }>
  requiredError?: string
  columns: '1' | '2'
}

const FormSelect: types.Brick<FormSelectProps> = ({
  options,
  isRequired,
  register,
  fieldName = 'select',
  label,
  key,
  errors,
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
              className={classNames(textColors.GRAY_600, ' mb-1 text-sm')}
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
      <select
        id={fieldName}
        className={classNames(
          'block w-full mt-1 px-4 py-2 bg-white dark:bg-gray-900 dark:text-white border border-gray-300 rounded outline-none focus:ring focus:ring-opacity-50',
          errors[fieldName]
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
            : 'border-gray-300 dark:border-gray-500 focus:border-sky-500 dark:focus:border-white focus:ring-sky-200 dark:focus:ring-white/20'
        )}
        {...register(fieldName?.replace(/\s/g, '').toLowerCase() || key, {
          required: isRequired,
        })}
      >
        {options?.split('\n').map((valuelabel, index) => {
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
    </div>
  )
}

FormSelect.schema = {
  name: blockNames.FormSelect,
  label: 'Select',
  category: 'contact',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    fieldName: 'select',
    label: 'Choose a fruit',
    columns: '2',
    options: 'orange: Orange\napple: Apple',
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
      name: 'options',
      label: 'Options',
      type: types.SideEditPropType.Textarea,
      helperText: 'Each line should have "value:label"',
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
  ],
}

export default FormSelect
