import * as React from 'react'
import { Repeater, types } from 'react-bricks'

import classNames from 'classnames'
import blockNames from '../blockNames'
import { bgColors } from '../colors'
import Container, { Size } from '../layout/Container'
import Section, { Border } from '../layout/Section'

export interface FeaturesProps {
  bg?: { color: string; className: string }
  width?: Size
  borderTop?: Border
  borderBottom?: Border
}

const Features: types.Brick<FeaturesProps> = ({
  bg = bgColors.white.value,
  width = 'lg',
  borderTop = 'none',
  borderBottom = 'none',
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container
        size={width}
        className={classNames(
          'py-12 flex flex-wrap justify-center items-center'
        )}
      >
        <Repeater
          propName="feature-item"
          renderWrapper={items => <div>{items}</div>}
        />
      </Container>
    </Section>
  )
}
Features.schema = {
  name: blockNames.Features,
  label: 'Features',
  getDefaultProps: () => ({
    bg: bgColors.white,
    borderTop: 'none',
    borderBottom: 'none',
    width: 'lg',
    repeaterItems: [
      {
        name: 'feature-item',
        itemType: blockNames.FeatureItem,
        itemLabel: 'Feature',
        min: 0,
        max: 4,
      },
    ],
  }),
}
export default Features
