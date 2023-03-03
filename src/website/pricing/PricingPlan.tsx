import React from 'react'
import { types } from 'react-bricks/frontend'
import { Repeater } from 'react-bricks/frontend'
import Container from 'website/shared/components/Container'
import Section from './layout/Section'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from './layout/LayoutSideProps'
import blockNames from './layout/blockNames'

interface BusinessPlanBrickProps {
  bg?: { color: string; className: string }
  width?: Size
}

const BusinessPlanBrick: types.Brick<BusinessPlanBrickProps> = ({
  bg,
  width,
}) => {
  //2xl:flex-nowrap  at className line 26 to try
  return (
    <Section bg={bg}>
      <Container>
        <div className={`flex flex-wrap justify-center`}>
          <Repeater
            propName="plan-brick"
            renderItemWrapper={(items) => <div>{items}</div>}
          />
        </div>
      </Container>
    </Section>
  )
}

BusinessPlanBrick.schema = {
  name: blockNames.BusinessPlanBrick,
  label: 'business plan ',
  category: 'rb-ui website',
  getDefaultProps: () => ({}),
  repeaterItems: [
    {
      name: 'plan-brick',
      itemType: blockNames.PlanBrick,
      itemLabel: 'plan brick',
      min: 0,
      max: 6,
    },
  ],
  sideEditProps: [
    {
      groupName: 'layout',
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
  ],
}

export default BusinessPlanBrick
