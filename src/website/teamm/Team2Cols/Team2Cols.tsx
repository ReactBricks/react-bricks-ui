import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'
import Container from 'website/shared/layout/Container'
import Section from 'website/shared/layout/Section'
import TitleSubtitle from 'website/shared/layout/TitleSubtitle'

interface Props {
  withTitle?: boolean
}

const Team2Cols: types.Brick<Props> = ({ withTitle = false }) => {
  return (
    <Section>
      <Container size="medium">
        {withTitle && <TitleSubtitle withPaddingBottom />}
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] lg:grid-cols-3 gap-8 mb-12">
          <Repeater propName="teamMembers" />
        </ul>
      </Container>
    </Section>
  )
}

Team2Cols.schema = {
  name: blockNames.Team2Cols,
  label: 'Team 2 Cols',
  category: 'team',
  repeaterItems: [{ name: 'teamMembers', itemType: blockNames.Team2ColsItem }],
  getDefaultProps: () => ({
    title: 'Meet our team',
    subtitle:
      'We are a group of passionate people with the mission to make content editing fun. For everybody.',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'withTitle',
      label: 'With title',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default Team2Cols
