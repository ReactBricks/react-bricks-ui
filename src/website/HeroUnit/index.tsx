import * as React from 'react'
import classNames from 'classnames'

import { RichText, Repeater, types } from 'react-bricks'
import blockNames from '../blockNames'

import { textColors, bgColors, GradientName, gradients } from '../colors'
import Section, { Border } from '../layout/Section'
import Container from '../layout/Container'

export interface HeroUnitProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  size?: 'medium' | 'large'
  textGradient?: GradientName
}

const HeroUnit: types.Brick<HeroUnitProps> = ({
  bg = bgColors.white.value,
  borderTop = 'none',
  borderBottom = 'none',
  textGradient = 'none',
  size = 'large',
}: HeroUnitProps) => {
  const titleColor = textColors.gray800
  const textColor = textColors.gray700
  const highlightColor = textColors.purple500
  const titleStyle =
    textGradient !== 'none' ? { WebkitTextFillColor: 'transparent' } : {}

  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container size="lg" className="py-12 xl:py-20">
        <div className="max-w-xl mx-auto px-5">
          <Repeater
            propName="badge"
            renderWrapper={items => <div className="mb-4">{items}</div>}
          />

          <div
            className={classNames(
              titleColor,
              gradients[textGradient],
              'text-3xl',
              { 'sm:text-5xl': size === 'large' },
              { 'sm:text-4xl': size === 'medium' }
            )}
            style={titleStyle}
          >
            <RichText
              renderBlock={(props: any) => (
                <h1
                  className={classNames(
                    'text-center font-black mb-4 bg-clip-text bg-gradient-to-r',
                    titleColor
                  )}
                  style={{ lineHeight: 1.1 }}
                  {...props.attributes}
                >
                  {props.children}
                </h1>
              )}
              placeholder="Type a title..."
              propName="title"
              allowedFeatures={[types.RichTextFeatures.Highlight]}
              renderHighlight={(props: any) => (
                <span className={highlightColor} {...props.attributes}>
                  {props.children}
                </span>
              )}
            />
          </div>

          <RichText
            renderBlock={(props: any) => (
              <p
                className={classNames(
                  'text-lg sm:text-xl text-center leading-7 sm:leading-8',
                  textColor
                )}
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
            placeholder="Type a text..."
            propName="text"
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Link,
            ]}
          />
          <Repeater
            propName="buttons"
            renderWrapper={items => (
              <div className="flex justify-center items-center flex-col sm:flex-row mt-6">
                {items}
              </div>
            )}
          />
        </div>
      </Container>
    </Section>
  )
}

HeroUnit.schema = {
  name: blockNames.HeroUnit,
  label: 'Hero Unit',
  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    size: 'large',
    textGradient: 'none',
    title: 'We develop beautiful web applications',
    text:
      "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
    badge: [
      {
        text: 'high tech',
        color: {
          color: '#90cdf4',
          className: 'text-blue-400 dark:text-blue-300',
        },
      },
    ],
    buttons: [
      {
        text: 'Get Started',
        href: '',
        isTargetBlank: false,
        variant: 'azure',
        type: 'solid',
      },
      {
        text: 'Learn more',
        href: '',
        isTargetBlank: false,
        variant: 'azure',
        type: 'outline',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'badge',
      itemType: blockNames.Badge,
      itemLabel: 'Badge',
      min: 0,
      max: 1,
    },
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      props: [
        {
          name: 'bg',
          label: 'Background',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              bgColors.white,
              bgColors.light,
              bgColors.gray,
              bgColors.lightBlue,
              bgColors.orange,
              bgColors.green,
              bgColors.darkBlue,
              bgColors.dark,
            ],
          },
        },
        {
          name: 'borderTop',
          label: 'Border Top',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'full', label: 'Full-width' },
              { value: 'boxed', label: 'Boxed' },
            ],
          },
        },
        {
          name: 'borderBottom',
          label: 'Border Bottom',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'full', label: 'Full-width' },
              { value: 'boxed', label: 'Boxed' },
            ],
          },
        },
      ],
    },
    {
      groupName: 'Title',
      defaultOpen: true,
      props: [
        {
          name: 'textGradient',
          label: 'Text gradient',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'ocean', label: 'Ocean' },
              { value: 'violet', label: 'Violet' },
              { value: 'sun', label: 'Sunset' },
            ],
          },
        },
        {
          name: 'size',
          label: 'Title size',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
            ],
          },
        },
      ],
    },
  ],
}

export default HeroUnit
