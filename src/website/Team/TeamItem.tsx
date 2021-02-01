import * as React from 'react'
import { Image, types, Text, Plain } from 'react-bricks'
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi'

import blockNames from '../blockNames'

export interface TeamItemProps {
  twitter?: string
  github?: string
  linkedin?: string
}

const TeamItem: types.Brick<TeamItemProps> = ({
  twitter,
  github,
  linkedin,
  ...rest
}) => {
  return (
    <div className="sm:w-1/3 w-1/2 mb-3" {...rest}>
      <Image
        propName="picture"
        alt="team-item"
        // containerClassName="w-12 h-12 lg:w-16 lg:h-16 mx-4 mb-8 bg-white rounded-full p-2 shadow-md flex justify-center items-center"
        // imageClassName="w-6 h-6 lg:w-10 lg:h-10"
        containerClassName="w-24 h-24 mb-6 p-2 flex justify-center items-center bg-white rounded-full shadow-xl mx-auto"
        imageClassName="w-24 h-24 rounded-full py-2"
      />
      <div className="text-center">
        <Text
          renderBlock={(props: any) => (
            <div className="text-sm font-bold">{props.children}</div>
          )}
          placeholder="Member name..."
          propName="memberName"
        />
        <Text
          renderBlock={(props: any) => (
            <div className="text-xs">{props.children}</div>
          )}
          placeholder="Duty"
          propName="duty"
        />
      </div>

      {(twitter || linkedin || github) && (
        <div className=" space-x-3 mt-2 ">
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </a>
          )}
          {linkedin && (
            <a
              href={`https://linkedin.com/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
          )}
          {github && (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

TeamItem.schema = {
  name: blockNames.TeamItem,
  label: 'Team Item',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    memberName: Plain.deserialize('Matteo Franaaaa'),
    duty: Plain.deserialize('Founder @ React Bricks'),
    twitter: '',
    github: '',
    linkedin: '',
    picture: {
      src:
        'https://images.reactbricks.com/original/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-200.jpg 200w',
    },
  }),
  sideEditProps: [
    {
      groupName: 'Social Media',
      props: [
        {
          name: 'twitter',
          label: 'Twitter UserName',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'linkedin',
          label: 'Linkedin UserName',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'github',
          label: 'Github UserName',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default TeamItem
