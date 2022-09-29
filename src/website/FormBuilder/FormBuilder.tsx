import * as React from 'react'
import { Repeater, Text, types } from 'react-bricks/frontend'
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
      <Text
        propName="formTitle"
        placeholder="Type a Title..."
        renderBlock={({ children }) => (
          <div className="flex justify-center">
            <h1 className="text-2xl w-auto font-medium text-gray-900 dark:text-white">
              {children}
            </h1>
          </div>
        )}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-4 max-w-2xl mx-auto px-8 grid grid-cols-2 gap-4"
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
    formTitle: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Form Title',
          },
        ],
      },
    ],
    'form-elements': [
      {
        type: blockNames.FormInput,
        props: {
          fieldName: 'inputField',
          isRequired: false,
          inputType: 'text',
          columns: 'two',
          label: 'Input Field',
          requiredError: '',
          pattern: '',
          patternError: '',
        },
      },
    ],
  }),
}

export default FormBuilder
