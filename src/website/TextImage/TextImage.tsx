import classNames from 'classnames'
import * as React from 'react'
import { Image, Link, Repeater, RichText, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import { bgColors, textColors } from '../colors'
import Container, { Size, Padding } from '../layout/Container'
import Section, { Border } from '../layout/Section'
import {
  backgroundColorsEditProps,
  sectionPaddingsEditProps,
} from '../LayoutSideProps'

export interface TextImageProps {
  backgroundColor: { color: string; className: string }
  paddingTop: Padding
  paddingBottom: Padding
  borderTop: Border
  borderBottom: Border
  multiple: boolean
  imageSide: 'left' | 'right'
  bigImage: boolean
  mobileImageTop: boolean
  mobileIcon: boolean
  hasShadow: boolean
  isRounded: boolean
}

const TextImage: types.Brick<TextImageProps> = ({
  backgroundColor,
  paddingTop,
  paddingBottom,
  multiple,
  imageSide,
  bigImage,
  mobileImageTop,
  mobileIcon,
  hasShadow,
  isRounded,
}) => {
  const titleColor = textColors.GRAY_900
  const textColor = textColors.GRAY_700

  return (
    <Section backgroundColor={backgroundColor}>
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div
          className={classNames(
            'flex sm:justify-between items-center',
            mobileImageTop ? 'flex-col-reverse' : 'flex-col',
            imageSide === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
          )}
        >
          <div
            className={classNames('w-full md:w-2/5 lg:pr-[5%] flex flex-col')}
          >
            <Repeater
              propName="badge"
              itemProps={{ textAlign: 'left' }}
              renderWrapper={(items) => (
                <div className="mb-4 flex justify-center md:justify-start">
                  {items}
                </div>
              )}
            />

            <RichText
              propName="title"
              renderBlock={(props) => (
                <h2
                  className={classNames(
                    'mt-0 mb-4 text-center md:text-left text-2xl leading-7 md:text-[32px] md:leading-tight font-black',
                    titleColor
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </h2>
              )}
              placeholder="Type a title..."
              allowedFeatures={[types.RichTextFeatures.Highlight]}
            />

            <RichText
              propName="text"
              renderBlock={(props) => (
                <p
                  className={classNames(
                    'leading-normal md:text-xl md:leading-8 mb-3 text-center md:text-left',
                    textColor
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </p>
              )}
              placeholder="Type a text..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Link,
              ]}
              renderLink={(props) => (
                <Link {...props} className="text-lg">
                  {props.children}
                </Link>
              )}
            />

            <Repeater
              propName="bulletListItems"
              itemProps={{
                className: 'text-lg',
              }}
              renderWrapper={(items) => (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-1">
                  {items}
                </div>
              )}
            />
            <Repeater
              propName="buttons"
              renderWrapper={(items) => (
                <div className="flex items-center space-x-4 mt-4">{items}</div>
              )}
            />
          </div>
          {multiple ? (
            <div className="md:w-1/2 grid grid-cols-3 gap-3">
              <Repeater propName="logos" />
            </div>
          ) : (
            <div
              className={classNames(
                mobileIcon ? 'w-24' : 'w-full',
                mobileImageTop ? 'mt-0 mb-10' : 'mt-10 mb-0',
                'md:w-1/2 md:mt-0 md:mb-0'
              )}
            >
              <Image
                propName="imageSource"
                alt="Image"
                imageClassName={classNames(
                  { 'rounded-lg': isRounded },
                  { 'shadow-2xl': hasShadow },
                  {
                    'md:h-[500px] md:max-w-none':
                      bigImage && imageSide === 'right',
                  }
                )}
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

TextImage.schema = {
  name: blockNames.TextImage,
  label: 'Text Image',
  category: 'content sections',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/TextImage/TextImage.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderTop: 'none',
    borderBottom: 'none',
    title: 'We built hundreds of apps',
    text: 'We create and host websites since 1997. We saw the Internet grow up as the standards evolved. We have built hundreds of successful web applications and we still have a lot of fun.',
    imageSource: {
      src: 'https://images.reactbricks.com/original/7a358d12-e668-46e4-ab81-b90431006182.png',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/7a358d12-e668-46e4-ab81-b90431006182.png',
      srcSet:
        'https://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-1600.png 1600w,\nhttps://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-1200.png 1200w,\nhttps://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-400.png 400w,\nhttps://images.reactbricks.com/src_set/7a358d12-e668-46e4-ab81-b90431006182-200.png 200w',
      alt: 'Dashboard',
      seoName: 'dashboard',
    },
    imageSide: 'right',
    bigImage: false,
    multiple: false,
    mobileImageTop: false,
    mobileIcon: false,
    hasShadow: false,
    isRounded: false,
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: false,
      props: [backgroundColorsEditProps, ...sectionPaddingsEditProps],
    },
    {
      groupName: 'Image',
      defaultOpen: false,
      props: [
        {
          name: 'multiple',
          label: 'Multiple logos',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'imageSide',
          label: 'Image side',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'left', label: 'Left' },
              { value: 'right', label: 'Right' },
            ],
          },
        },
        {
          name: 'bigImage',
          label: 'Big image (only right side)',
          type: types.SideEditPropType.Boolean,
          show: (props) => !props.multiple && props.imageSide === 'right',
        },
        {
          name: 'mobileImageTop',
          label: 'Image on top on mobile',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'mobileIcon',
          label: 'Show as icon on mobile',
          type: types.SideEditPropType.Boolean,
          show: (props) => !props.multiple,
        },
        {
          name: 'hasShadow',
          label: 'Image shadow',
          type: types.SideEditPropType.Boolean,
          show: (props) => !props.multiple,
        },
        {
          name: 'isRounded',
          label: 'Image rounded corners',
          type: types.SideEditPropType.Boolean,
          show: (props) => !props.multiple,
        },
      ],
    },
  ],
  repeaterItems: [
    {
      name: 'badge',
      itemType: blockNames.Badge,
      itemLabel: 'Badge',
      min: 0,
      max: 1,
    },
    {
      name: 'bulletListItems',
      itemType: blockNames.BulletListItem,
      itemLabel: 'Feature',
      min: 0,
      max: 4,
    },
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
    {
      name: 'logos',
      itemType: blockNames.TextImageLogo,
      itemLabel: 'Logo',
      min: 0,
      max: 9,
    },
  ],
}

export default TextImage
