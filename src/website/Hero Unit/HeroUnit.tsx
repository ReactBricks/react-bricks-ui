import classNames from 'classnames'
import * as React from 'react'
import { Repeater, RichText, types } from 'react-bricks/frontend'
import {
  BackgroundColorsSideEditProps,
  HighlightTextSideEditProps,
} from 'website/LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors, gradients, highlightTextColors, textColors } from '../colors'
import Container from '../layout/Container'
import Section, { Border } from '../layout/Section'

export interface HeroUnitProps {
  bg?: { color: string; className: string }
  size?: 'medium' | 'large'
  textGradient?: keyof typeof gradients
  highlightTextColor: { color: string; className: string }
}

const HeroUnit: types.Brick<HeroUnitProps> = ({
  bg = bgColors.WHITE.value,
  textGradient = gradients.NONE.value,
  size = 'large',
  highlightTextColor = highlightTextColors.LIME.value,
}: HeroUnitProps) => {
  const titleColor = textColors.GRAY_800
  const textColor = textColors.GRAY_700
  const titleStyle =
    textGradient !== gradients.NONE.value
      ? { WebkitTextFillColor: 'transparent' }
      : {}

  return (
    <Section bg={bg}>
      <Container size="lg" className="py-12 xl:py-20">
        <div className="max-w-xl mx-auto px-5">
          <Repeater
            propName="badge"
            renderWrapper={(items) => <div className="mb-4">{items}</div>}
          />

          <div
            className={classNames(
              titleColor,
              gradients[textGradient].className,
              'text-3xl',
              { 'sm:text-5xl': size === 'large' },
              { 'sm:text-4xl': size === 'medium' }
            )}
            style={titleStyle}
          >
            <RichText
              renderBlock={(props) => (
                <h1
                  className={classNames(
                    'text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r',
                    titleColor
                  )}
                  style={{ lineHeight: 1.1 }}
                  {...props.attributes}
                >
                  {props.children}
                </h1>
              )}
              allowedFeatures={[types.RichTextFeatures.Highlight]}
              placeholder="Type a title..."
              propName="title"
              renderHighlight={({ children }) => (
                <span className={highlightTextColor.className}>{children}</span>
              )}
            />
          </div>

          <RichText
            renderBlock={(props) => (
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
            renderWrapper={(items) => (
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
  category: 'rb-ui website',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Hero%20Unit/HeroUnit.tsx',
  getDefaultProps: () => ({
    bg: bgColors.WHITE.value,
    size: 'large',
    textGradient: gradients.NONE.value,
    highlightTextColor: highlightTextColors.LIME.value,
    title: 'We develop beautiful web applications',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
    badge: [
      {
        text: 'high tech',
        color: highlightTextColors.SKY.value,
      },
    ],
    buttons: [
      {
        text: 'Get Started',
        href: '',
        isTargetBlank: false,
        variant: 'sky',
        type: 'solid',
      },
      {
        text: 'Learn more',
        href: '',
        isTargetBlank: false,
        variant: 'sky',
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
      defaultOpen: false,
      props: [BackgroundColorsSideEditProps],
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
              gradients.NONE,
              gradients.OCEAN,
              gradients.VIOLET,
              gradients.INDIGO_PINK,
              gradients.SUN,
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
        HighlightTextSideEditProps,
      ],
    },
  ],
}

export default HeroUnit
