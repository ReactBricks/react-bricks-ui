import classNames from 'classnames'
import React from 'react'
import { Repeater, types, Text, Link, Plain } from 'react-bricks/frontend'
import {
  FcAdvance,
  FcDepartment,
  FcPhone,
  FcVoicePresentation,
} from 'react-icons/fc'
import blockNames from '../../blockNames'
import { buttonColors, textColors } from '../../colors'
import {
  backgroundSideGroup,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import TitleSubtitle from '../../shared/components/TitleSubtitle'

export interface ContactsFormProps extends LayoutProps {
  phoneNumber: string
  email: string
}

const ContactsForm: types.Brick<ContactsFormProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  phoneNumber,
  email,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="pb-12 lg:pb-20 sm:text-left lg:px-8 px-5">
            <TitleSubtitle />
            <ul
              className={classNames(
                'mt-10 space-y-4 text-base leading-7 list-none',
                textColors.GRAY_600
              )}
            >
              <li className="flex gap-x-4">
                <FcDepartment size={'28px'} />
                <div>
                  <Text
                    propName="address"
                    placeholder="address..."
                    multiline={true}
                    renderBlock={(props) => (
                      <span
                        className="block min-w-[70px]"
                        {...props.attributes}
                      >
                        {props.children}
                      </span>
                    )}
                  />
                </div>
              </li>
              <li>
                <Link
                  className="flex gap-x-4"
                  href={`tel:${
                    typeof phoneNumber === 'string'
                      ? phoneNumber.replace(' ', '')
                      : Plain.serialize(phoneNumber).replace(/ /g, '')
                  }`}
                >
                  <FcPhone size={'28px'} />
                  <Text
                    propName="phoneNumber"
                    placeholder="Phone number"
                    renderBlock={({ children }) => <span>{children}</span>}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-x-4 text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
                  href={`mailto:${
                    typeof email === 'string' ? email : Plain.serialize(email)
                  }`}
                >
                  <FcVoicePresentation size={'28px'} />
                  <Text
                    propName="email"
                    placeholder="Email"
                    renderBlock={({ children }) => <span>{children}</span>}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:-mt-7">
            <Repeater propName="form" />
          </div>
        </div>
      </Container>
    </Section>
  )
}

ContactsForm.schema = {
  name: 'ContactsForm',
  label: 'Contacts with Form',
  category: 'contact',
  getDefaultProps: () => ({
    ...sectionDefaults,
    address: '4556 Brendan Ferry\nLos Angeles, CA 90210',
    phoneNumber: '+1 (555) 423-5786',
    email: 'hello@example.com',
    title: 'Contact us',
    subtitle:
      'Do you have a project in mind? We are happy to talk with you to understand your needs, prepare a quote for you and make it happen!',
    form: [
      {
        buttonPosition: 'justify-end',
        paddingTop: '0',
        paddingBottom: '0',
        width: 'full',
        'form-elements': [
          {
            type: blockNames.FormInput,
            props: {
              fieldName: 'firstname',
              isRequired: true,
              inputType: 'text',
              columns: '1',
              label: 'First name',
              requiredError: 'Please, fill in your first name',
              pattern: '',
              patternError: '',
            },
          },
          {
            type: blockNames.FormInput,
            props: {
              fieldName: 'lastname',
              isRequired: true,
              inputType: 'text',
              columns: '1',
              label: 'Last name',
              requiredError: 'Please, fill in your last name',
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
              requiredError: 'Please, fill in your email address',
              pattern: '',
              patternError: '',
            },
          },
          {
            type: blockNames.FormInput,
            props: {
              fieldName: 'company',
              isRequired: false,
              inputType: 'text',
              columns: '2',
              label: 'Company',
              requiredError: '',
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
      },
    ],
  }),
  sideEditProps: [backgroundSideGroup, paddingBordersSideGroup],
  repeaterItems: [
    {
      name: 'form',
      itemType: blockNames.FormBuilder,
      itemLabel: 'form',
      min: 1,
      max: 1,
    },
  ],
}

export default ContactsForm
