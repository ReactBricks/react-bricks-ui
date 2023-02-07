import { types } from 'react-bricks/frontend'
import {
  highlightTextColors,
  bgColors,
  highlightBgColors,
  buttonColors,
} from './colors'

export const BackgroundColorsSideEditProps: types.ISideEditProp = {
  name: 'bg',
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

export const BackgroundImageEditProps: types.ISideEditProp = {
  name: 'backgroundImage',
  label: 'Background Image',
  type: types.SideEditPropType.Image,
  imageOptions: {
    aspectRatio: 1.8,
  },
}

export const ContainerSizeSideEditProps: types.ISideEditProp = {
  name: 'width',
  label: 'Width',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      { value: 'normal', label: 'Normal' },
      { value: 'small', label: 'Small' },
      { value: 'full', label: 'Full-width' },
    ],
  },
}

export const SectionPaddings: types.ISideEditProp[] = [
  {
    name: 'paddingTop',
    label: 'Padding Top',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Select,
      options: [
        { value: 'normal', label: 'Normal' },
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
        { value: 'normal', label: 'Normal' },
        { value: 'small', label: 'Small' },
        { value: 'thin', label: 'Thin' },
        { value: 'none', label: 'None' },
      ],
    },
  },
]

export const BadgeColorsSideEditProps = {
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

export const BulletColorsSideEditProps = {
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

export const ButtonColorsSideEditProps = {
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

export const HighlightTextSideEditProps = {
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
