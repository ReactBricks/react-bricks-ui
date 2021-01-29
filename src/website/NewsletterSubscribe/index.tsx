import * as React from 'react'
import jsonp from 'jsonp'
import { validate } from 'email-validator'
import classNames from 'classnames'

import { Text, Plain, types } from 'react-bricks'
import blockNames from '../blockNames'

enum NewsletterProvider {
  MailChimp = 'MAILCHIMP',
  ConvertKit = 'CONVERTKIT',
}

export interface NewsletterSubscribeProps {
  centered?: boolean
  provider: NewsletterProvider
  mailchimpUrl: string
  buttonText: string
  resultOkText: string
}

interface IStatus {
  status: string
  message: string
}

const NewsletterSubscribe: types.Brick<NewsletterSubscribeProps> = ({
  centered = false,
  provider,
  mailchimpUrl,
  buttonText,
  resultOkText = `Thank you, we'll keep in touch with you!`,
}) => {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<IStatus>({
    status: 'IDLE',
    message: '',
  })

  const sendData = (url: string) => {
    setStatus({ status: 'SENDING', message: '' })
    jsonp(url, { param: 'c', timeout: 3500 }, (err: any, data: any) => {
      if (err) {
        setStatus({
          status: 'ERROR',
          message: 'An error occurred. Please, try again.',
        })
      } else if (data.msg.includes('already subscribed')) {
        setStatus({ status: 'ERROR', message: 'You were already subscribed' })
      } else if (data.result !== 'success') {
        setStatus({
          status: 'ERROR',
          message: 'An error occurred. Please, try again.',
        })
      } else {
        setStatus({ status: 'SUCCESS', message: '' })
      }
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (provider !== NewsletterProvider.MailChimp) {
      setStatus({
        status: 'ERROR',
        message: 'Provider not implemented',
      })
      return
    }
    const isEmailValid = validate(email)

    if (!isEmailValid) {
      setStatus({
        status: 'ERROR',
        message: 'Please, enter a valid email address',
      })
      return
    }

    if (
      !mailchimpUrl ||
      mailchimpUrl.length < 10 ||
      mailchimpUrl.indexOf('post') === -1
    ) {
      setStatus({
        status: 'ERROR',
        message: 'Invalid Mailchimp URL',
      })
      return
    }

    const emailEncoded = encodeURIComponent(email)
    const endpoint = mailchimpUrl.replace(/\/post/g, '/post-json')
    const url = `${endpoint}?EMAIL=${emailEncoded}`
    sendData(url)
  }

  return (
    <section
      className="py-12"
      style={{ backgroundColor: '#deeffc', color: '#113d5f' }}
    >
      <div
        className={classNames('max-w-xl mx-auto flex flex-col', {
          'items-center': centered,
        })}
      >
        <Text
          renderBlock={(props: any) => (
            <h1 className="text-2xl mb-4 font-extrabold" {...props.attributes}>
              {props.children}
            </h1>
          )}
          placeholder="Type a title..."
          propName="title"
        />
        <Text
          renderBlock={(props: any) => (
            <p className="mb-2" {...props.attributes}>
              {props.children}
            </p>
          )}
          placeholder="Call to action..."
          propName="description"
        />
        <form className="flex" onSubmit={handleSubmit}>
          <input
            className="bg-white focus:outline-none border-t-2 border-l-2 border-b-2 border-transparent focus:border-azure-500 rounded-l-lg py-2 px-4 appearance-none leading-normal"
            type="text"
            placeholder="jane@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            type="submit"
            disabled={status.status === 'SENDING'}
            className="bg-azure-500 px-8 rounded-r-lg text-white font-bold py-2"
            // style={{ backgroundColor: '#2f9ff4' }}
          >
            {buttonText}
          </button>
        </form>
        {status.status === 'SUCCESS' && (
          <div className="text-xl mt-4">{resultOkText}</div>
        )}
        {status.status === 'ERROR' && (
          <div className="mt-4" style={{ color: '#c00' }}>
            {status.message}
          </div>
        )}
      </div>
    </section>
  )
}

NewsletterSubscribe.schema = {
  name: blockNames.NewsletterSubscribe,
  label: 'Newsletter Subscribe',
  getDefaultProps: () => ({
    title: Plain.deserialize('Want to receive updates from us?'),
    description: Plain.deserialize('Leave your e-mail'),
    provider: NewsletterProvider.MailChimp,
    buttonText: 'Keep me updated',
    resultOkText: `Thank you, we'll keep in touch with you!`,
  }),
  sideEditProps: [
    {
      name: 'centered',
      label: 'Centered',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'provider',
      label: 'Provider',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: NewsletterProvider.MailChimp, label: 'MailChimp' },
          { value: NewsletterProvider.ConvertKit, label: 'ConvertKit - TODO' },
        ],
      },
    },
    {
      name: 'mailchimpUrl',
      label: 'Mailchimp Form URL',
      type: types.SideEditPropType.Text,
      validate: value =>
        value && value.length > 10 && value.indexOf('https://') !== -1,
      //&& value.indexOf('list-manage.com/subscribe/post?') !== -1,
    },
    {
      name: 'buttonText',
      label: 'Button text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'resultOkText',
      label: 'Result OK text',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default NewsletterSubscribe
