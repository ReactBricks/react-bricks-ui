import classNames from 'classnames'
import * as React from 'react'
import { Repeater, RichText, types } from 'react-bricks/frontend'
import { backgroundColorsEditProps } from 'website/LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors, textColors } from '../colors'
import Container from '../layout/Container'
import Section, { Border } from '../layout/Section'

export interface CallToActionProps {
  backgroundColor?: { color: string; className: string }
}

const CallToAction: types.Brick<CallToActionProps> = ({
  backgroundColor = bgColors.WHITE.value,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container
        size="small"
        className={classNames(
          'py-12 flex flex-col sm:flex-row items-center text-center sm:text-left'
        )}
      >
        <div className="flex-1 sm:pr-12 mb-4 sm:mb-0">
          <RichText
            propName="text"
            renderBlock={(props) => (
              <span
                className={classNames(
                  'font-extrabold text-xl sm:text-2xl leading-6 sm:leading-8',
                  textColors.GRAY_800
                )}
                {...props.attributes}
              >
                {props.children}
              </span>
            )}
            placeholder="Call to action text"
          />
        </div>
        <div>
          <Repeater propName="buttons" itemProps={{ padding: 'small' }} />
        </div>
      </Container>
    </Section>
  )
}

CallToAction.schema = {
  name: blockNames.CallToAction,
  label: 'Call to action',
  playgroundLinkLabel: 'View source code on Github',
  category: 'rb-ui website',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/CallToAction/CallToAction.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderTop: 'boxed',
    borderBottom: 'none',
    width: 'sm',
    text: 'React Bricks is great for developers and marketing.',
    buttons: [
      {
        text: 'Get started',
        variant: 'pink',
        type: 'solid',
        href: '',
        isTargetBlank: false,
        isBigButton: false,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 1,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [backgroundColorsEditProps],
    },
  ],
}

export default CallToAction
