import * as React from 'react'
import classNames from 'classnames'

import { RichText, Repeater, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'

import { bgColors, textColors } from '../colors'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'
import { LayoutProp } from '../LayoutSideProps'

export interface CallToActionProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  width?: Size
}

const CallToAction: types.Brick<CallToActionProps> = ({
  bg = bgColors.white.value,
  borderTop = 'boxed',
  borderBottom = 'none',
  width = 'sm',
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container
        size={width}
        className={classNames(
          'py-12 flex flex-col sm:flex-row items-center text-center sm:text-left'
        )}
      >
        <div className="flex-1 sm:pr-12 mb-4 sm:mb-0">
          <RichText
            propName="text"
            renderBlock={props => (
              <span
                className={classNames(
                  'font-extrabold text-xl sm:text-2xl leading-6 sm:leading-8',
                  textColors.gray800
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
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/CallToAction.tsx',

  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
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
    LayoutProp({ colors: [bgColors.white, bgColors.light, bgColors.gray] }),
  ],
}

export default CallToAction
