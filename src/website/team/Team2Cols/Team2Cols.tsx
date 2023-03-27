import classNames from 'classnames'
import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
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
import { avatars } from '../../shared/defaultImages'

interface Team2ColsProps extends LayoutProps {
  withTitle?: boolean
  bigCenteredTitle?: boolean
}

const Team2Cols: types.Brick<Team2ColsProps> = ({
  withTitle = false,
  bigCenteredTitle = false,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="small"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
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
    ...sectionDefaults,
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
        picture: avatars.AVATAR_MALE,
      },
      {
        name: 'Catherine White',
        jobTitle: 'Backend Developer',
        twitter: 'catherine_white',
        linkedin: 'catherine_white',
        github: 'catherine_white',
        picture: avatars.AVATAR_FEMALE,
      },
    ],
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      groupName: 'Team',
      defaultOpen: true,
      props: [
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
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
  ],
}

export default Team2Cols
