import classNames from 'classnames'
import * as React from 'react'
import { Repeater, RichText, types } from 'react-bricks/frontend'
import {
  textGradientEditProps,
  highlightTextEditProps,
  sectionDefaults,
  LayoutProps,
  backgroundWithImageBgSideGroup,
  paddingBordersSideGroup,
} from '../../LayoutSideProps'
import blockNames from '../../blockNames'
import {
  buttonColors,
  gradients,
  highlightTextColors,
  textColors,
} from '../../colors'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'

export interface HeroUnitProps extends LayoutProps {
  size: 'medium' | 'large'
  textGradient: keyof typeof gradients
  highlightTextColor: { color: string; className: string }
}

const HeroUnit: types.Brick<HeroUnitProps> = ({
  backgroundColor,
  backgroundImage,
  backgroundImageDark,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  size = 'large',
  textGradient = gradients.NONE.value,
  highlightTextColor = highlightTextColors.LIME.value,
}: HeroUnitProps) => {
  const titleColor = textColors.GRAY_800
  const textColor = textColors.GRAY_700
  const titleStyle =
    textGradient !== gradients.NONE.value
      ? { WebkitTextFillColor: 'transparent' }
      : {}

  return (
    <Section
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundImageDark={backgroundImageDark}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div className="max-w-xl mx-auto px-5">
          <Repeater
            propName="badge"
            renderWrapper={(items) => <div className="mb-4">{items}</div>}
          />

          <div
            className={classNames(
              titleColor,
              gradients[textGradient]?.className
            )}
            style={titleStyle}
          >
            <RichText
              renderBlock={(props) => (
                <h1
                  className={classNames(
                    'text-[28px] leading-8 sm:text-[40px] sm:leading-tight text-center font-black mb-4 pb-1 bg-clip-text bg-gradient-to-r',
                    { 'lg:text-5xl lg:leading-snug': size === 'large' },
                    titleColor
                  )}
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
                  'text-base leading-6 sm:text-xl sm:leading-8 text-center',
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
              <div className="flex flex-row space-x-5 items-center justify-center mt-6">
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
  label: 'Centered Hero',
  category: 'hero sections',
  tags: ['hero unit', 'title'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Hero%20Unit/HeroUnit.tsx',
  getDefaultProps: () => ({
    ...sectionDefaults,
    size: 'large',
    paddingTop: '12',
    paddingBottom: '12',
    textGradient: gradients.NONE.value,
    highlightTextColor: highlightTextColors.LIME.value,
    title: 'We develop beautiful web applications',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
    badge: [
      {
        text: 'high tech',
        badgeColor: highlightTextColors.SKY.value,
      },
    ],
    buttons: [
      {
        text: 'Get Started',
        href: '',
        isTargetBlank: false,
        buttonColor: buttonColors.SKY.value,
        type: 'solid',
        padding: 'normal',
      },
      {
        text: 'Learn more',
        href: '',
        isTargetBlank: false,
        buttonColor: buttonColors.SKY.value,
        type: 'outline',
        padding: 'normal',
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
      groupName: 'Title',
      defaultOpen: true,
      props: [
        textGradientEditProps,
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
        highlightTextEditProps,
      ],
    },
    backgroundWithImageBgSideGroup,
    paddingBordersSideGroup,
  ],
}

export default HeroUnit
