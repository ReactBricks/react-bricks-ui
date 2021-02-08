import React from 'react'
import { Plain, Text, types } from 'react-bricks'
import blockNames from '../blockNames'
import Container from '../layout/Container'

const Quote: types.Brick = () => {
  return (
    <Container className="mt-12">
      <Text
        propName="quote"
        placeholder="Type the quote here..."
        renderBlock={(props: any) => {
          return (
            <div className=" text-3xl font-light pl-7 border-l border-pink-500 text-gray-400">
              {props.children}
            </div>
          )
        }}
      />
    </Container>
  )
}

Quote.schema = {
  name: blockNames.Quote,
  label: 'Quote',
  getDefaultProps: () => ({
    quote: Plain.deserialize(
      `Sometimes life is going to hit you in the head with a ReactBrick. Don't lose faith. - Steve Jobs`
    ),
  }),
}

export default Quote
