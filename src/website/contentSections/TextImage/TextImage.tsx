import classNames from 'classnames'
import * as React from 'react'
import { Image, Link, Repeater, RichText, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import {
  bgColors,
  buttonColors,
  highlightBgColors,
  highlightTextColors,
  textColors,
} from '../../colors'
import Container, { Size, Padding } from '../../shared/layout/Container'
import Section, { Border } from '../../shared/layout/Section'
import {
  backgroundColorsEditProps,
  sectionBordersEditProps,
  sectionPaddingsEditProps,
} from '../../LayoutSideProps'
import { photos } from 'website/shared/defaultImages'

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
  borderTop,
  borderBottom,
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
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
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
            <div className="md:w-1/2 grid grid-cols-3 gap-6">
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
                    'md:h-[500px] md:max-w-none object-cover':
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
  previewIcon: (
    <svg viewBox="0 0 10 10">
      <circle cx={5} cy={5} r={4} fill="red"></circle>
    </svg>
  ),
  previewImageUrl:
    'https://images.reactbricks.com/original/2faa8447-7778-4b78-88f6-1d4290318fad.png',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/TextImage/TextImage.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderTop: 'none',
    borderBottom: 'none',
    title: 'Making content editing fun!',
    text: 'Our mission is making content editing fun, for everyone.',
    imageSource: photos.DESK_MAC,
    imageSide: 'right',
    bigImage: false,
    multiple: false,
    mobileImageTop: false,
    mobileIcon: false,
    hasShadow: false,
    isRounded: false,
    bulletListItems: [
      {
        bulletColor: highlightBgColors.PINK.value,
        text: 'Marketing',
      },
      {
        bulletColor: highlightBgColors.SKY.value,
        text: 'Developers',
      },
      {
        bulletColor: highlightBgColors.GREEN.value,
        text: 'Designers',
      },
      {
        bulletColor: highlightBgColors.AMBER.value,
        text: 'Enterprise',
      },
    ],
  }),
  sideEditProps: [
    {
      groupName: 'Background',
      defaultOpen: false,
      props: [backgroundColorsEditProps],
    },
    {
      groupName: 'Padding & Borders',
      defaultOpen: false,
      props: [...sectionPaddingsEditProps, ...sectionBordersEditProps],
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
  stories: [
    {
      id: 'orange-big-image',
      name: 'Orange big image',
      props: {
        backgroundColor: bgColors.ORANGE.value,
        borderTop: 'none',
        borderBottom: 'none',
        title: 'A CMS with a head and a heart',
        text: 'Headless should not mean boring and cold. React Bricks is fun for content editors and cool for developers.',
        imageSource: photos.STONE_SMILE,
        imageSide: 'right',
        bigImage: true,
        multiple: false,
        mobileImageTop: false,
        mobileIcon: false,
        hasShadow: true,
        isRounded: true,
        badge: [
          {
            id: '49fd2c97-52b7-4ac9-850d-8ac7d428ca66',
            type: 'badge',
            props: {
              text: 'Experience',
              badgeColor: highlightTextColors.FUCHSIA.value,
            },
          },
        ],
        buttons: [
          {
            id: '1b057cb1-d36b-47b3-93a8-83b6192645fd',
            type: 'button',
            props: {
              text: 'Learn more',
              href: 'https://reactbricks.com',
              isTargetBlank: true,
              isBigButton: false,
              buttonColor: buttonColors.CYAN.value,
              type: 'solid',
              padding: 'normal',
            },
          },
          {
            id: '18c2593a-b751-4daf-806f-846a1238c1f5',
            type: 'button',
            props: {
              text: 'Sign up',
              href: 'https://reactbricks.com/sign-up',
              isTargetBlank: true,
              isBigButton: false,
              buttonColor: buttonColors.CYAN.value,
              type: 'outline',
              padding: 'normal',
            },
          },
        ],
      },
    },
  ],
}

export default TextImage
