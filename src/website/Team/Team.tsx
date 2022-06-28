import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import classNames from 'classnames'
import Container, { Size } from '../layout/Container'
import Section, { Border } from '../layout/Section'
import { bgColors } from '../colors'
import blockNames from '../blockNames'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from 'website/LayoutSideProps'

export interface TeamProps {
  bg?: { color: string; className: string }
  width?: Size
}

const Team: types.Brick<TeamProps> = ({
  bg = bgColors.white.value,
  width = 'lg',
}) => {
  return (
    <Section bg={bg}>
      <Container
        size={width}
        className={classNames(
          'py-12 flex flex-wrap justify-center items-center'
        )}
      >
        <div className="flex w-full mx-auto mt-10 flex-wrap justify-center mb-6 w- max-w-4xl">
          <Repeater propName="teamItem" />
        </div>
      </Container>
    </Section>
  )
}
Team.schema = {
  name: blockNames.Team,
  label: 'Team',
  category: 'rb-ui website',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Team/Team.tsx',

  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    borderTop: 'none',
    borderBottom: 'none',
    width: 'lg',
    teamItem: [
      {
        memberName: 'Matteo Frana',
        duty: 'Frontend Designer',
        picture: {
          src: 'https://images.reactbricks.com/original/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67-200.jpg 200w',
        },
        twitter: '',
        github: '',
        linkedin: '',
        role: 'Frontend Designer',
      },
      {
        memberName: 'Dario Ronzoni',
        role: 'Backend Designer',
        twitter: '',
        github: '',
        linkedin: '',
        picture: {
          src: 'https://images.reactbricks.com/original/a439e3bd-066d-4a04-84cf-3be233814f56.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/a439e3bd-066d-4a04-84cf-3be233814f56.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/a439e3bd-066d-4a04-84cf-3be233814f56-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/a439e3bd-066d-4a04-84cf-3be233814f56-200.jpg 200w',
        },
      },
      {
        memberName: 'Cecilia Panicali',
        role: 'Frontend Designer',
        twitter: '',
        github: '',
        linkedin: '',
        picture: {
          src: 'https://images.reactbricks.com/original/36a83dc9-58bd-419a-8c51-c78feeda3d6e.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/36a83dc9-58bd-419a-8c51-c78feeda3d6e.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/36a83dc9-58bd-419a-8c51-c78feeda3d6e-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/36a83dc9-58bd-419a-8c51-c78feeda3d6e-200.jpg 200w',
        },
      },
      {
        memberName: 'Roberta Ferrari',
        role: 'Marketing',
        twitter: '',
        github: '',
        linkedin: '',
        picture: {
          src: 'https://images.reactbricks.com/original/83791a26-9465-49da-b4ef-61b0425fbba0.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/83791a26-9465-49da-b4ef-61b0425fbba0.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/83791a26-9465-49da-b4ef-61b0425fbba0-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/83791a26-9465-49da-b4ef-61b0425fbba0-200.jpg 200w',
        },
      },
      {
        memberName: 'Matteo Frana',
        role: 'Frontend Designer',
        twitter: '',
        github: '',
        linkedin: '',
        picture: {
          src: 'https://images.reactbricks.com/original/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-200.jpg 200w',
        },
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'teamItem',
      itemType: blockNames.TeamItem,
      itemLabel: 'Member',
      min: 0,
      max: 5,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
  ],
}
export default Team
