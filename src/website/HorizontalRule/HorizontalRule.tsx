import React from 'react'
import { types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container, { Size } from 'website/layout/Container'
import Section from 'website/layout/Section'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from 'website/LayoutSideProps'

interface HorizontalRuleProps {
  width?: Size
  bg?: { color: string; className: string }
}

const HorizontalRule: types.Brick<HorizontalRuleProps> = ({ width, bg }) => {
  return (
    <Section bg={bg} className="py-4">
      <Container size={width}>
        <hr />
      </Container>
    </Section>
  )
}

HorizontalRule.schema = {
  name: blockNames.HorizontalRule,
  label: 'Horizontal Rule',
  category: 'rb-ui website',
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
  ],
}

export default HorizontalRule
