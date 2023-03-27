import classNames from 'classnames'
import React from 'react'
import { Repeater, types, Text } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import TitleSubtitle from '../../shared/components/TitleSubtitle'

export interface OfficesProps extends LayoutProps {
  withTitle: boolean
  bigCenteredTitle?: boolean
}

const Offices: types.Brick<OfficesProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  withTitle,
  bigCenteredTitle,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        size={width}
      >
        {withTitle && (
          <TitleSubtitle
            bigCentered={bigCenteredTitle}
            className={classNames(bigCenteredTitle ? 'mb-12' : 'mb-8')}
          />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Repeater propName="offices" />
        </div>
      </Container>
    </Section>
  )
}

Offices.schema = {
  name: blockNames.Offices,
  label: 'Offices',
  category: 'contact',
  playgroundLinkLabel: '',
  playgroundLinkUrl: '',
  getDefaultProps: () => ({
    ...sectionDefaults,
    withTitle: true,
    bigCenteredTitle: false,
    title: 'Our offices',
    subtitle:
      'We have offices in the US and in Europe. Call on us for a coffee ☕️',
    offices: [
      {
        city: 'San Francisco',
        address: '3319 Harrison Street\nSan Francisco, CA',
      },
      {
        city: 'New York',
        address: '2153 Shinn Street\nNew York, NY',
      },
      {
        city: 'Milan',
        address: 'Via Manzoni, 25\nMilan',
      },
      {
        city: 'London',
        address: '1272 Old House Drive\nLondon',
      },
    ],
  }),
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    {
      name: 'withTitle',
      label: 'With title',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'bigCenteredTitle',
      label: 'Big centered',
      type: types.SideEditPropType.Boolean,
      show: (props) => !!props.withTitle,
    },
  ],
  repeaterItems: [
    {
      name: 'offices',
      itemType: blockNames.Office,
    },
  ],
}
export default Offices
