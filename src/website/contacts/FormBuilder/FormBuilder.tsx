import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import { useForm } from 'react-hook-form'
import blockNames from '../../blockNames'
import { buttonColors } from '../../colors'
import {
  backgroundSideGroup,
  containerSizeEditProps,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'

export interface FormBuilderProps extends LayoutProps {
  buttonPosition: string
}

const FormBuilder: types.Brick<FormBuilderProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  buttonPosition,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (values: any) => console.log(values)

  return (
    <div>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto grid grid-cols-2 gap-4 py-6"
          >
            <Repeater
              propName="form-elements"
              itemProps={{ register, errors }}
            />
            <Repeater
              propName="form-buttons"
              renderWrapper={(items) => (
                <div
                  className={classNames(
                    'w-full flex space-x-6 col-span-2',
                    buttonPosition
                  )}
                >
                  {items}
                </div>
              )}
            />
          </form>
        </Container>
      </Section>
    </div>
  )
}

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
      itemLabel: 'Button',
      itemType: blockNames.Button,
      min: 1,
      max: 2,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Buttons',
      defaultOpen: true,
      props: [
        {
          name: 'buttonPosition',
          label: 'Buttons position',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'justify-start', label: 'Left' },
              { value: 'justify-center', label: 'Center' },
              { value: 'justify-end', label: 'Right' },
            ],
          },
        },
      ],
    },
    backgroundSideGroup,
    paddingBordersSideGroup,
  ],

  getDefaultProps: () => ({
    ...sectionDefaults,
    buttonPosition: 'justify-center',
    'form-elements': [
      {
        type: blockNames.FormInput,
        props: {
          fieldName: 'firstname',
          isRequired: false,
          inputType: 'text',
          columns: '1',
          label: 'First Name',
          requiredError: '',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormInput,
        props: {
          fieldName: 'lastname',
          isRequired: false,
          inputType: 'text',
          columns: '1',
          label: 'Last Name',
          requiredError: '',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormInput,
        props: {
          fieldName: 'email',
          isRequired: true,
          inputType: 'email',
          columns: '2',
          label: 'Email',
          requiredError: 'Email is required',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormTextArea,
        props: {
          fieldName: 'message',
          isRequired: false,
          columns: '2',
          label: 'Message',
          requiredError: '',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormCheckbox,
        props: {
          fieldName: 'privacy',
          isRequired: true,
          columns: '2',
          label: 'I accept the processing of my data',
          requiredError: 'Please, accept our privacy terms',
          pattern: '',
          patternError: '',
        },
      },
    ],
    'form-buttons': [
      {
        type: 'button',
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        text: 'Send',
        variant: 'solid',
      },
    ],
  }),
}

export default FormBuilder
