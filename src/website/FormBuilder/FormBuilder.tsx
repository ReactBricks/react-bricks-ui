import * as React from 'react'
import clsx from 'clsx'
import { Repeater, types } from 'react-bricks/frontend'
import { useForm } from 'react-hook-form'
import blockNames from 'website/blockNames'

interface Props {
  columns: 'one' | 'two'
}

const FormBuilder: types.Brick<Props> = ({ columns }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          'py-4 max-w-2xl mx-auto px-8',
          columns === 'one' ? '' : 'grid grid-cols-2 gap-2'
        )}
      >
        <Repeater propName="form-elements" itemProps={{ register, errors }} />
        <Repeater
          propName="form-buttons"
          renderWrapper={(items) => (
            <div className="w-full flex justify-center space-x-6 col-span-2">
              {items}
            </div>
          )}
        />
      </form>
    </>
  )
}
const onSubmit = (values: any) => console.log(values)

FormBuilder.schema = {
  name: blockNames.FormBuilder,
  label: 'Form Builder',
  category: 'rb-ui website',

  repeaterItems: [
    {
      name: 'form-elements',
      positionLabel: 'Form elements',
      items: [
        { type: blockNames.FormInput },
        { type: blockNames.FormTextArea },
        { type: blockNames.FormCheckbox },
        { type: blockNames.FormSelect },
        { type: blockNames.FormRadiobuttons, max: 1 },
      ],
    },
    {
      name: 'form-buttons',
      itemLabel: 'Form Buttons',
      items: [{ type: blockNames.FormButton }],
    },
  ],

  getDefaultProps: () => ({
    columns: 'two',
    'form-elements': [
      {
        fieldName: 'Test',
        isRequired: true,
        inputType: 'text',
      },
      {
        isRequired: false,
        fieldName: 'Textarea',
      },
      {
        isRequired: false,
        fieldName: 'Checkbox',
      },
      {
        isRequired: false,
        values: 'value : Label\ntest : Test',
        fieldName: 'Select',
      },
    ],
    'form-buttons': [
      {
        type: 'submit',
        color: {
          color: '#3b82f6',
          className: 'bg-blue-500',
        },
        buttonLabel: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Sumbit',
              },
            ],
          },
        ],
      },
    ],
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
  ],
}

export default FormBuilder
