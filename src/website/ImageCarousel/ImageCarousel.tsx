import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import Slider from 'react-slick'
import { bgColors } from 'website/colors'
import Container, { Size } from 'website/layout/Container'
import Section, { Border } from 'website/layout/Section'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from 'website/LayoutSideProps'
import blockNames from '../blockNames'
import Slick from './slick'

import SlickTheme from './slick-theme'
export interface ImageCarouselProps {
  bg?: { color: string; className: string }
  width?: Size
}
interface ArrowProps {
  onClick?: () => void
}
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-[calc(50%-10px)] right-6 cursor-pointer bg-pink-50 w-10 h-10 border border-pink-400 rounded-full z-10"
    >
      <MdArrowRight className="w-full h-full text-pink-400" />
    </button>
  )
}
const PreviousArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-[calc(50%-10px)] left-6 cursor-pointer bg-pink-50 w-10 h-10 border border-pink-400 rounded-full z-10"
    >
      <MdArrowLeft className="w-full h-full text-pink-400" />
    </button>
  )
}

const Carousel = ({ repeaterElement }: any) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    fade: true,
  }
  return (
    <>
      <SlickTheme />
      <Slick />
      <style>{`
      .slick-slide .p-2{
        height: 0px
      }
      .slick-current{
       z-index:1;
      }
      .slick-current .p-2{
        height: 100%;
      }
    `}</style>
      <Slider {...settings}>
        {/* @ts-ignore */}
        {repeaterElement?.props?.children?.map((child, index) => {
          return (
            <div key={index} className="h-96 p-0 overflow-hidden">
              {child}
            </div>
          )
        })}
      </Slider>
    </>
  )
}

const ImageCarousel: types.Brick<ImageCarouselProps> = ({ bg, width }) => {
  const repeaterElement = Repeater({ propName: 'singleImage' })

  if (width === 'full') {
    return (
      <div className="my-2">
        <Carousel repeaterElement={repeaterElement} />
      </div>
    )
  }
  return (
    <Section bg={bg}>
      <Container size={width}>
        <Carousel repeaterElement={repeaterElement} />
      </Container>
    </Section>
  )
}

ImageCarousel.schema = {
  name: blockNames.ImageCarousel,
  label: 'Image carousel',
  category: 'rb-ui website',
  getDefaultProps: () => ({
    singleImage: [
      {
        image: {
          src: 'https://images.reactbricks.com/original/8309ea05-d105-4f50-9d54-ba86ebddcfbe.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/8309ea05-d105-4f50-9d54-ba86ebddcfbe.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-2400.jpg 2400w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-1800.jpg 1800w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-1200.jpg 1200w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-600.jpg 600w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-300.jpg 300w',
          width: 3385,
          height: 1693,
          alt: 'altText',
          seoName: '',
        },
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'singleImage',
      itemType: blockNames.SingleImage,
      itemLabel: 'Image',
      min: 1,
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

export default ImageCarousel
