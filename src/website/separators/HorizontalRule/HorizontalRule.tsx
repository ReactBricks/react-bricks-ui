import React from 'react'
import { types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import Container, { Padding, Size } from 'website/shared/components/Container'
import Section from 'website/shared/components/Section'
import {
  backgroundColorsEditProps,
  containerSizeEditPropsWithFull,
  sectionPaddingsEditProps,
} from 'website/LayoutSideProps'
import { bgColors } from 'website/colors'

interface HorizontalRuleProps {
  width?: Size
  backgroundColor?: { color: string; className: string }
  paddingTop: Padding
  paddingBottom: Padding
}

const HorizontalRule: types.Brick<HorizontalRuleProps> = ({
  width,
  backgroundColor,
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
    paddingTop: 'medium',
    paddingBottom: 'medium',
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
