import React from 'react'
import { Text, Image, types, Plain } from 'react-bricks/frontend'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import blockNames from 'website/blockNames'
import { textColors } from 'website/colors'

interface Props {
  memberName?: any
  twitter?: string
  linkedin?: string
  github?: string
}

const Team2ColsItem: types.Brick<Props> = ({
  memberName,
  twitter,
  linkedin,
  github,
}) => {
  return (
    <li className="flex space-x-4">
      <Image
        alt={Plain.serialize(memberName)}
        propName="avatarImage"
        aspectRatio={1}
        imageClassName="rounded-full w-12 h-12 object-contain"
      />

      <div className="ml-3 dark:text-gray-200 min-w-[90px]">
        <Text
          renderBlock={(props) => (
            <div className={`font-bold ${textColors.GRAY_800}`}>
              {props.children}
            </div>
          )}
          placeholder="Name..."
          propName="memberName"
        />
        <Text
          renderBlock={(props) => (
            <div className={`${textColors.GRAY_600} mb-2`}>
              {props.children}
            </div>
          )}
          placeholder="Job title..."
          propName="memberJobTitle"
        />
        <div className="flex flex-row items-center space-x-2">
          {twitter && (
            <div>
              <a
                className="textColors.GRAY_600 hover:text-sky-600 transition-all ease-out duration-150 hover:-translate-y-0.5"
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
            </div>
          )}
          {linkedin && (
            <div>
              <a
                href={`https://linkedin.com/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
            </div>
          )}
          {github && (
            <div>
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

Team2ColsItem.schema = {
  name: blockNames.Team2ColsItem,
  label: 'Team2ColsItem',
  category: 'team',
  hideFromAddMenu: true,
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Thick as a brick',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
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
}

export default Team2ColsItem
