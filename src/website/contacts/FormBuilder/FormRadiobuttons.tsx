import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types, Plain, Text } from 'react-bricks/frontend'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { textColors } from '../../colors'
import blockNames from '../../blockNames'

export interface FormRadiobuttonsProps {
  register?: UseFormRegister<any>
  fieldName: string
  label: string
  isRequired: boolean
  requiredError?: string
  columns: '1' | '2'
  errors: FieldErrorsImpl<{
    [x: string]: any
  }>
}

const FormRadiobuttons: types.Brick<FormRadiobuttonsProps> = ({
  register,
  fieldName,
  label,
  isRequired,
  requiredError,
  columns,
  errors,
}) => {
  const labelTextContent =
    typeof label === 'string' ? label : Plain.serialize(label)
  return (
    <div
      className={classNames(
        'w-full px-2 py-1 col-span-2',
        columns === '1' && 'sm:col-span-1'
      )}
    >
      <div
        className={classNames(
          'mb-1',
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
      </div>
      <Repeater
        propName="radiobuttons"
        itemProps={{
          fieldName,
          register,
          isRequired,
          errors,
        }}
      />
      {errors[fieldName] && (
        <div className="block mt-1 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === 'required' && requiredError}
        </div>
      )}
    </div>
  )
}

FormRadiobuttons.schema = {
  name: blockNames.FormRadiobuttons,
  label: 'Radio buttons',
  category: 'contact',
  hideFromAddMenu: true,

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    columns: '2',
    fieldName: 'color',
    label: 'Choose a color',
    radiobuttons: [
      {
        label: 'Blue',
        value: 'blue',
      },
      {
        label: 'Green',
        value: 'green',
      },
    ],
    isRequired: false,
  }),

  repeaterItems: [
    {
      name: 'radiobuttons',
      itemType: blockNames.FormSingleRadio,
      min: 1,
    },
  ],

  // Sidebar Edit controls for props
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

export default FormRadiobuttons
