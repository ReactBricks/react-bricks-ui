import classNames from 'classnames'
import * as React from 'react'
import { types, Text, Plain } from 'react-bricks/frontend'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import blockNames from '../../blockNames'
import { useAdminContext } from 'react-bricks/frontend'
import { textColors } from '../../colors'
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
  columns: '1' | '2'
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
  const labelTextContent =
    typeof label === 'string' ? label : Plain.serialize(label)
  const { isAdmin } = useAdminContext()
  return (
    <div
      className={classNames(
        'col-span-2 px-2 py-1',
        columns === '1' && 'sm:col-span-1'
      )}
    >
      <div className="inline-flex items-center">
        <input
          id={fieldName}
          type="checkbox"
          className={classNames(
            'border-gray-300 focus:border-sky-300 focus:ring focus:ring-opacity-50 text-sm rounded-sm text-sky-500 focus:ring-offset-0',
            errors[fieldName]
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 dark:border-gray-500 focus:border-sky-500 dark:focus:border-white focus:ring-sky-200 dark:focus:ring-white/20'
          )}
          {...register(fieldName?.replace(/\s/g, '') || key, {
            required: isRequired,
          })}
        />
        <label
          htmlFor={isAdmin ? '' : fieldName}
          className={classNames(
            'ml-2',
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
                className={classNames(textColors.GRAY_800)}
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
      </div>
      {errors[fieldName] && (
        <div className="block mt-1 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === 'required' && requiredError}
        </div>
      )}
    </div>
  )
}

FormCheckbox.schema = {
  name: blockNames.FormCheckbox,
  label: 'Checkbox',
  category: 'contact',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    label: 'I accept the processing of my data',
    columns: '2',
    isRequired: true,
    fieldName: 'privacy',
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

export default FormCheckbox
