import React from 'react'
import { types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import Container, { Padding, Size } from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import {
  backgroundColorsEditProps,
  containerSizeEditPropsWithFull,
  LayoutProps,
  sectionPaddingsEditProps,
} from '../../LayoutSideProps'
import { bgColors } from '../../colors'

interface HorizontalRuleProps extends LayoutProps {}

const HorizontalRule: types.Brick<HorizontalRuleProps> = ({
  backgroundColor,
  width,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <hr className="border-black/10" />
      </Container>
    </Section>
  )
}

HorizontalRule.schema = {
  name: blockNames.HorizontalRule,
  label: 'Horizontal Rule',
  category: 'separator',
  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    width: 'medium',
    paddingTop: '16',
    paddingBottom: '16',
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        backgroundColorsEditProps,
        containerSizeEditPropsWithFull,
        ...sectionPaddingsEditProps,
      ],
    },
  ],
}

export default HorizontalRule
