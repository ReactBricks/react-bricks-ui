import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { bgColors } from 'website/colors'
import Container, { Size } from 'website/layout/Container'
import Section, { Border } from 'website/layout/Section'
import { LayoutProp } from 'website/LayoutSideProps'
import blockNames from '../blockNames'

interface ImageCarouselProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  width?: Size
  fullScreen?: boolean
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

const ImageCarousel: types.Brick<ImageCarouselProps> = ({
  bg,
  borderTop,
  borderBottom,
  width,
  fullScreen,
}) => {
  const repeaterElement = Repeater({ propName: 'singleImage' })

  if (fullScreen) {
    return <Carousel repeaterElement={repeaterElement} />
  }
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container size={width}>
        <Carousel repeaterElement={repeaterElement} />
      </Container>
    </Section>
  )
}

ImageCarousel.schema = {
  name: blockNames.ImageCarousel,
  label: 'Image carousel',
  sideEditProps: [
    LayoutProp({
      colors: [
        bgColors.white,
        bgColors.light,
        bgColors.gray,
        bgColors.darkBlue,
      ],
    }),
    {
      name: 'fullScreen',
      type: types.SideEditPropType.Boolean,
      label: 'Full screen',
    },
  ],
  repeaterItems: [
    {
      name: 'singleImage',
      itemType: blockNames.SingleImage,
      itemLabel: 'Image',
      min: 1,
      max: 5,
    },
  ],
}

export default ImageCarousel
