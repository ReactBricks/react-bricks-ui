import { types } from 'react-bricks/frontend'
import {
  highlightTextColors,
  bgColors,
  highlightBgColors,
  buttonColors,
} from './colors'

export const backgroundColorsEditProps: types.ISideEditProp = {
  name: 'backgroundColor',
  label: 'Background',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      bgColors.WHITE,
      bgColors.LIGHT_GRAY,
      bgColors.GRAY,
      bgColors.ROSE,
      bgColors.ORANGE,
      bgColors.AMBER,
      bgColors.YELLOW,
      bgColors.LIME,
      bgColors.GREEN,
      bgColors.EMERALD,
      bgColors.TEAL,
      bgColors.CYAN,
      bgColors.SKY,
      bgColors.BLUE,
      bgColors.INDIGO,
      bgColors.VIOLET,
      bgColors.PURPLE,
      bgColors.FUCHSIA,
      bgColors.DARK_GRAY,
    ],
  },
}

export const backgroundImageEditProps: types.ISideEditProp = {
  name: 'backgroundImage',
  label: 'Background Image',
  type: types.SideEditPropType.Image,
  imageOptions: {
    aspectRatio: 1.8,
  },
}

export const sectionPaddingsEditProps: types.ISideEditProp[] = [
  {
    name: 'paddingTop',
    label: 'Padding Top',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Select,
      options: [
        { value: 'thick', label: 'Thick' },
        { value: 'medium', label: 'Medium' },
        { value: 'small', label: 'Small' },
        { value: 'thin', label: 'Thin' },
        { value: 'none', label: 'None' },
      ],
    },
  },
  {
    name: 'paddingBottom',
    label: 'Padding Bottom',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Select,
      options: [
        { value: 'thick', label: 'Thick' },
        { value: 'medium', label: 'Medium' },
        { value: 'small', label: 'Small' },
        { value: 'thin', label: 'Thin' },
        { value: 'none', label: 'None' },
      ],
    },
  },
]

export const sectionBordersEditProps: types.ISideEditProp[] = [
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
]

export const sectionDefaults = {
  backgroundColor: bgColors.WHITE,
  paddingTop: 'medium',
  paddingBottom: 'medium',
  borderTop: 'none',
  borderBottom: 'none',
}

export const containerSizeEditProps: types.ISideEditProp = {
  name: 'width',
  label: 'Width',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      { value: 'medium', label: 'Medium' },
      { value: 'small', label: 'Small' },
      { value: 'full', label: 'Full-width' },
    ],
  },
}

export const badgeColorsEditProps = {
  name: 'badgeColor',
  label: 'Badge Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      highlightTextColors.GRAY,
      highlightTextColors.RED,
      highlightTextColors.ORANGE,
      highlightTextColors.AMBER,
      highlightTextColors.YELLOW,
      highlightTextColors.LIME,
      highlightTextColors.GREEN,
      highlightTextColors.EMERALD,
      highlightTextColors.TEAL,
      highlightTextColors.CYAN,
      highlightTextColors.SKY,
      highlightTextColors.BLUE,
      highlightTextColors.INDIGO,
      highlightTextColors.VIOLET,
      highlightTextColors.PURPLE,
      highlightTextColors.FUCHSIA,
      highlightTextColors.PINK,
      highlightTextColors.ROSE,
    ],
  },
}

export const bulletColorsEditProps = {
  name: 'bulletColor',
  label: 'Bullet Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      highlightBgColors.GRAY,
      highlightBgColors.RED,
      highlightBgColors.ORANGE,
      highlightBgColors.AMBER,
      highlightBgColors.YELLOW,
      highlightBgColors.LIME,
      highlightBgColors.GREEN,
      highlightBgColors.EMERALD,
      highlightBgColors.TEAL,
      highlightBgColors.CYAN,
      highlightBgColors.SKY,
      highlightBgColors.BLUE,
      highlightBgColors.INDIGO,
      highlightBgColors.VIOLET,
      highlightBgColors.PURPLE,
      highlightBgColors.FUCHSIA,
      highlightBgColors.PINK,
      highlightBgColors.ROSE,
    ],
  },
}

export const buttonColorsEditProps = {
  name: 'buttonColor',
  label: 'Button Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      buttonColors.GRAY,
      buttonColors.RED,
      buttonColors.ORANGE,
      buttonColors.AMBER,
      buttonColors.YELLOW,
      buttonColors.LIME,
      buttonColors.GREEN,
      buttonColors.EMERALD,
      buttonColors.TEAL,
      buttonColors.CYAN,
      buttonColors.SKY,
      buttonColors.BLUE,
      buttonColors.INDIGO,
      buttonColors.VIOLET,
      buttonColors.PURPLE,
      buttonColors.FUCHSIA,
      buttonColors.PINK,
      buttonColors.ROSE,
    ],
  },
}

export const highlightTextEditProps = {
  name: 'highlightTextColor',
  label: 'Highlight Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      highlightTextColors.GRAY,
      highlightTextColors.RED,
      highlightTextColors.ORANGE,
      highlightTextColors.AMBER,
      highlightTextColors.YELLOW,
      highlightTextColors.LIME,
      highlightTextColors.GREEN,
      highlightTextColors.EMERALD,
      highlightTextColors.TEAL,
      highlightTextColors.CYAN,
      highlightTextColors.SKY,
      highlightTextColors.BLUE,
      highlightTextColors.INDIGO,
      highlightTextColors.VIOLET,
      highlightTextColors.PURPLE,
      highlightTextColors.FUCHSIA,
      highlightTextColors.PINK,
      highlightTextColors.ROSE,
    ],
  },
}
