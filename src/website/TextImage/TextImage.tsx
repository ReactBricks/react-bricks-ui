import classNames from 'classnames'
import * as React from 'react'
import { Image, Link, Repeater, RichText, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import { bgColors, textColors } from '../colors'
import Container, { Size } from '../layout/Container'
import Section, { Padding } from '../layout/Section'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
  SectionPaddings,
} from '../LayoutSideProps'

export interface TextImageProps {
  bg?: { color: string; className: string }
  paddingTop?: Padding
  paddingBottom?: Padding
  width?: Size
  heroTitle?: boolean
  mobileTextCenter?: boolean
  multiple?: boolean
  imageSide?: 'left' | 'right'
  bigImage?: boolean
  mobileImageTop?: boolean
  mobileIcon?: boolean
  hasShadow?: boolean
  isRounded?: boolean
  bulletsVariant?: { color: string; className: string }
}

const TextImage: types.Brick<TextImageProps> = ({
  bg = bgColors.WHITE.value,
  paddingTop = 'normal',
  paddingBottom = 'normal',
  heroTitle = false,
  mobileTextCenter = false,
  multiple = false,
  imageSide = 'right',
  bigImage = false,
  mobileImageTop = false,
  mobileIcon = false,
  hasShadow = false,
  isRounded = false,
  // bulletsVariant = bulletColors.pinkLight.value,
}) => {
  const titleColor = textColors.GRAY_900
  const textColor = textColors.GRAY_700

  return (
    <Section bg={bg} paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <Container
        className={classNames(
          'flex md:justify-between md:items-center',
          mobileTextCenter ? 'items-center' : 'items-start',
          mobileImageTop ? 'flex-col-reverse' : 'flex-col',
          imageSide === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
        )}
      >
        <div className={classNames('w-full md:w-2/5 lg:pr-[5%] flex flex-col')}>
          <Repeater
            propName="badge"
            itemProps={{ textAlign: 'left' }}
            renderWrapper={(items) => (
              <div
                className={classNames('mb-4 flex', {
                  'justify-center md:justify-start': mobileTextCenter,
                })}
              >
                {items}
              </div>
            )}
          />

          <RichText
            propName="title"
            renderBlock={(props) => (
              <h2
                className={classNames(
                  'mt-0 mb-4',
                  titleColor,
                  {
                    'text-center md:text-left': mobileTextCenter,
                  },
                  heroTitle
                    ? 'text-3xl sm:text-4xl font-black'
                    : 'text-2xl sm:text-3xl font-extrabold'
                )}
                style={{ lineHeight: 1.125 }}
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
                  'text-lg sm:text-xl mb-3 leading-relaxed',
                  textColor,
                  {
                    'text-center md:text-left': mobileTextCenter,
                  }
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
              <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-1">
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
      </Container>
    </Section>
  )
}

TextImage.schema = {
  name: blockNames.TextImage,
  label: 'Text Image',
  category: 'rb-ui website',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/TextImage/TextImage.tsx',

  getDefaultProps: () => ({
    bg: bgColors.WHITE.value,
    borderTop: 'none',
    borderBottom: 'none',
    title: 'We built hundreds of apps',
    heroTitle: false,
    mobileTextCenter: false,
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
      props: [BackgroundColorsSideEditProps, ...SectionPaddings],
    },
    {
      groupName: 'Text',
      defaultOpen: false,
      props: [
        {
          name: 'heroTitle',
          label: 'Hero-size Title',
          type: types.SideEditPropType.Boolean,
          shouldRefreshText: true,
        },
        {
          name: 'mobileTextCenter',
          label: 'Text centered on mobile',
          type: types.SideEditPropType.Boolean,
          shouldRefreshText: true,
        },
      ],
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
      max: 6,
    },
  ],
}

export default TextImage
