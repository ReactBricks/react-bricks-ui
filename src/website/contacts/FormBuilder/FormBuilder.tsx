import classNames from 'classnames'
import * as React from 'react'
import { Repeater, Text, types } from 'react-bricks/frontend'
import { useForm } from 'react-hook-form'
import { bgColors } from 'website/colors'
import blockNames from '../../blockNames'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import { backgroundColorsEditProps } from '../../LayoutSideProps'

export interface FormBuilderProps {
  backgroundColor?: { color: string; className: string }
}

const FormBuilder: types.Brick<FormBuilderProps> = ({ backgroundColor }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
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
      </Container>
    </Section>
  )
}
const onSubmit = (values: any) => console.log(values)

FormBuilder.schema = {
  name: blockNames.FormBuilder,
  label: 'Form',
  category: 'contact',

  repeaterItems: [
    {
      name: 'form-elements',
      positionLabel: 'Form elements',
      items: [
        { type: blockNames.FormInput },
        { type: blockNames.FormTextArea },
        { type: blockNames.FormCheckbox },
        { type: blockNames.FormSelect },
        { type: blockNames.FormRadiobuttons },
      ],
    },
    {
      name: 'form-buttons',
      itemLabel: 'Form Buttons',
      items: [{ type: blockNames.FormButton }],
    },
  ],

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
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

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: false,
      props: [backgroundColorsEditProps],
    },
  ],
}

export default FormBuilder
