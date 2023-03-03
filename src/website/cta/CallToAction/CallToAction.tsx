import classNames from 'classnames'
import * as React from 'react'
import { Repeater, Text, types } from 'react-bricks/frontend'
import {
  backgroundColorsEditProps,
  sectionBordersEditProps,
} from 'website/LayoutSideProps'
import blockNames from '../../blockNames'
import { bgColors, buttonColors, textColors } from '../../colors'
import Container from '../../shared/components/Container'
import Section, { Border } from '../../shared/components/Section'

export interface CallToActionProps {
  backgroundColor?: { color: string; className: string }
  borderTop: Border
  borderBottom: Border
}

const CallToAction: types.Brick<CallToActionProps> = ({
  backgroundColor = bgColors.WHITE.value,
  borderTop,
  borderBottom,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="small"
        paddingTop="small"
        paddingBottom="small"
        className={classNames(
          'flex flex-col sm:flex-row items-center text-center sm:text-left'
        )}
      >
        <div className="flex-1 sm:pr-14 mb-4 sm:mb-0">
          <Text
            propName="text"
            renderBlock={(props) => (
              <span
                className={classNames(
                  'font-black text-xl leading-6 sm:text-2xl sm:leading-7',
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
          <Repeater propName="buttons" />
        </div>
      </Container>
    </Section>
  )
}

CallToAction.schema = {
  name: blockNames.CallToAction,
  label: 'Call to action',
  playgroundLinkLabel: 'View source code on Github',
  category: 'call to action',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/CallToAction/CallToAction.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderTop: 'boxed',
    borderBottom: 'none',
    text: 'React Bricks is great for developers and marketing teams.',
    buttons: [
      {
        text: 'Discover more',
        type: 'solid',
        buttonColor: buttonColors.SKY.value,
        href: 'https://reactbricks.com',
        isTargetBlank: true,
        padding: 'normal',
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
      props: [backgroundColorsEditProps, ...sectionBordersEditProps],
    },
  ],
}

export default CallToAction
