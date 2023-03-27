import classNames from 'classnames'
import * as React from 'react'
import { Repeater, RichText, types } from 'react-bricks/frontend'
import {
  backgroundWithImageBgSideGroup,
  highlightTextEditProps,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
  textGradientEditProps,
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
  textGradient: keyof typeof gradients
  highlightTextColor: { color: string; className: string }
}

const HeroUnit2: types.Brick<HeroUnitProps> = ({
  backgroundColor,
  backgroundImage,
  backgroundImageDark,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  textGradient,
  highlightTextColor,
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
        <div className="flex flex-col lg:flex-row items-start space-y-2 lg:space-x-14 lg:space-y-0">
          <div className="flex-1">
            <div className="lg:flex">
              <Repeater
                propName="badge"
                itemProps={{ textAlign: 'left' }}
                renderWrapper={(items) => <div className="mb-4">{items}</div>}
              />
            </div>

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
                      'text-[28px] leading-8 sm:text-[40px] sm:leading-tight lg:text-[44px] lg:leading-snug text-center lg:text-left font-black mb-4 bg-clip-text bg-gradient-to-r   ',
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
                  <span className={highlightTextColor.className}>
                    {children}
                  </span>
                )}
              />
            </div>
          </div>
          <div className="flex-1">
            <RichText
              renderBlock={(props) => (
                <p
                  className={classNames(
                    'text-center lg:text-left text-base leading-6 sm:text-xl sm:leading-8',
                    textColor
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </p>
              )}
              placeholder="Type a text..."
              propName="text"
              allowedFeatures={[types.RichTextFeatures.Bold]}
            />
            <Repeater
              propName="buttons"
              renderWrapper={(items) => (
                <div className="flex flex-row space-x-5 items-center justify-center lg:justify-start mt-6">
                  {items}
                </div>
              )}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

HeroUnit2.schema = {
  name: blockNames.HeroUnit2,
  label: 'Horizontal Hero',
  category: 'hero sections',
  tags: ['hero unit', 'horizontal hero', 'title'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Hero%20Unit/HeroUnit.tsx',
  getDefaultProps: () => ({
    ...sectionDefaults,
    paddingTop: '20',
    paddingBottom: '16',
    textGradient: gradients.NONE.value,
    highlightTextColor: highlightTextColors.LIME.value,
    title: 'We develop beautiful web applications',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
    buttons: [
      {
        text: 'Get Started now',
        href: '',
        isTargetBlank: false,
        buttonColor: buttonColors.SKY.value,
        type: 'solid',
        padding: 'normal',
      },
      {
        text: 'Watch demo',
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
      props: [textGradientEditProps, highlightTextEditProps],
    },
    backgroundWithImageBgSideGroup,
    paddingBordersSideGroup,
  ],
}

export default HeroUnit2
