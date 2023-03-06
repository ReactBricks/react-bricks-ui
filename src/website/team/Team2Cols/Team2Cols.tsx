import classNames from 'classnames'
import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'
import Container from 'website/shared/components/Container'
import Section from 'website/shared/components/Section'
import TitleSubtitle from 'website/shared/components/TitleSubtitle'
import { avatars } from 'website/shared/defaultImages'

interface Props {
  withTitle?: boolean
  bigCenteredTitle?: boolean
}

const Team2Cols: types.Brick<Props> = ({
  withTitle = false,
  bigCenteredTitle = false,
}) => {
  return (
    <Section>
      <Container size="small">
        {withTitle && (
          <TitleSubtitle
            className={classNames(bigCenteredTitle ? 'mb-12' : 'mb-8')}
            bigCentered={bigCenteredTitle}
          />
        )}
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] lg:grid-cols-2 gap-8 mb-12">
          <Repeater propName="members" />
        </ul>
      </Container>
    </Section>
  )
}

Team2Cols.schema = {
  name: blockNames.Team2Cols,
  label: 'Team 2 columns',
  category: 'team',
  repeaterItems: [{ name: 'members', itemType: blockNames.Team2ColsItem }],
  getDefaultProps: () => ({
    withTitle: true,
    bigCenteredTitle: false,
    title: 'Meet our team',
    subtitle:
      'We are a group of passionate people with the mission to make content editing fun. For everybody.',
    members: [
      {
        name: 'Alvin Payne',
        jobTitle: 'Frontend Developer',
        twitter: 'alvin_payne',
        linkedin: 'alvin_payne',
        avatarImage: avatars.AVATAR_MALE,
      },
      {
        name: 'Catherine White',
        jobTitle: 'Backend Developer',
        twitter: 'catherine_white',
        linkedin: 'catherine_white',
        github: 'catherine_white',
        avatarImage: avatars.AVATAR_FEMALE,
      },
    ],
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
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
}

export default Team2Cols
