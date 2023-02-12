import React from 'react'
import { types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import Container, { Size } from 'website/shared/layout/Container'
import Section from 'website/shared/layout/Section'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
} from 'website/LayoutSideProps'
import { bgColors } from 'website/colors'

interface HorizontalRuleProps {
  width?: Size
  backgroundColor?: { color: string; className: string }
}

const HorizontalRule: types.Brick<HorizontalRuleProps> = ({
  width,
  backgroundColor,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container size={width} paddingTop="none" paddingBottom="none">
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
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [backgroundColorsEditProps, containerSizeEditProps],
    },
  ],
}

export default HorizontalRule
