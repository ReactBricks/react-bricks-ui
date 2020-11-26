import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, Image, Plain, types } from 'react-bricks'

import { bgColors, textColors } from '../colors'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'
import blockNames from '../blockNames'

export interface BigFeatureProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  width?: Size
}

const BigFeature: types.Brick<BigFeatureProps> = ({
  bg = bgColors.white.value,
  borderTop = 'boxed',
  borderBottom = 'none',
  width = 'sm',
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container
        size={width}
        className={classNames(
          'py-12 flex flex-col sm:flex-row items-center text-center sm:text-left'
        )}
      >
        <div className="sm:mr-10 mb-4 sm:mb-0 w-32">
          <Image propName="image" alt="image" />
        </div>
        <div className="flex-1">
          <Text
            propName="title"
            renderBlock={(props: any) => (
              <div
                className={classNames(
                  'font-extrabold text-xl leading-6 mb-1',
                  textColors.gray900
                )}
                {...props.attributes}
              >
                {props.children}
              </div>
            )}
            placeholder="Title"
          />
          <RichText
            propName="text"
            renderBlock={(props: any) => (
              <span
                className={classNames('leading-6', textColors.gray700)}
                {...props.attributes}
              >
                {props.children}
              </span>
            )}
            placeholder="Text"
            allowedFeatures={[types.RichTextFeatures.Link]}
          />
        </div>
      </Container>
    </Section>
  )
}

BigFeature.schema = {
  name: blockNames.BigFeature,
  label: 'Feature callout',
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    borderTop: 'boxed',
    borderBottom: 'none',
    width: 'sm',
    title: Plain.deserialize('Code review, but for UI'),
    text: Plain.deserialize(
      'Chromatic generates a visual changeset for your pull requests. It compares components between your branch and the base branch so reviewers can easily find out what UI changed.'
    ),
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      props: [
        {
          name: 'bg',
          label: 'Background',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [bgColors.white, bgColors.light, bgColors.darkBlue],
          },
        },
        {
          name: 'borderTop',
          label: 'Border Top',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'full', label: 'Full-width' },
              { value: 'boxed', label: 'Boxed' },
            ],
          },
        },
        {
          name: 'borderBottom',
          label: 'Border Bottom',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'full', label: 'Full-width' },
              { value: 'boxed', label: 'Boxed' },
            ],
          },
        },
        {
          name: 'width',
          label: 'Width',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'sm', label: 'Small' },
              { value: 'md', label: 'Medium' },
            ],
          },
        },
      ],
    },
  ],
}

export default BigFeature
