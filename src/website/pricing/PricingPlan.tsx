import classNames from 'classnames'
import React from 'react'
import { types } from 'react-bricks/frontend'
import { RichText, Text, Link, Repeater } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import { pricingColors, PricingColorValue, textColors } from '../colors'
import { pricingColorsEditProps } from '../LayoutSideProps'

interface PricingPlanProps {
  pricingColor: PricingColorValue
  withPopularTag: boolean
  buttonLinkPath: string
}

const PricingPlan: types.Brick<PricingPlanProps> = ({
  pricingColor = pricingColors.CYAN.value,
  withPopularTag,
  buttonLinkPath,
}) => {
  return (
    <div
      className={classNames(
        'm-4 p-5 border border-t-4 rounded flex-1 min-w-[250px] max-w-[350px] text-center flex flex-col sm:w-[250px] md:w-[270px] lg:w-[300px]',
        pricingColor.mainDivClassName
      )}
    >
      <div className="h-6 self-center">
        {withPopularTag ? (
          <Text
            renderBlock={(props) => (
              <div
                className={classNames(
                  'px-2 pt-px pb-1 rounded-b text-xs font-bold uppercase text-white -mt-5',
                  pricingColor.popularTagClassName
                )}
              >
                {props.children}
              </div>
            )}
            placeholder="Tag"
            propName="popularTagText"
          />
        ) : null}
      </div>
      <div>
        <Text
          renderBlock={(props) => (
            <h2
              className={classNames(
                'text-2xl font-bold mb-4',
                pricingColor.planNameClassName
              )}
            >
              {props.children}
            </h2>
          )}
          placeholder="Plan name..."
          propName="planName"
        />

        <RichText
          renderBlock={(props) => (
            <p className={classNames('text-lg', textColors.GRAY_600)}>
              {props.children}
            </p>
          )}
          placeholder="Description..."
          propName="planDescription"
        />
      </div>
      <div className="text-center mb-4">
        <Text
          renderBlock={(props) => (
            <strong
              className={classNames(
                'block text-3xl font-bold pt-4 text-black',
                textColors.GRAY_900
              )}
            >
              {props.children}
            </strong>
          )}
          placeholder="Price"
          propName="planPrice"
        />

        <Text
          renderBlock={(props) => (
            <p className={classNames('mb-2', textColors.GRAY_500)}>
              {props.children}
            </p>
          )}
          placeholder="per user / per month..."
          propName="planConditions"
        />
      </div>
      <Link
        href={buttonLinkPath}
        className={classNames(
          'cursor-pointer block mb-8',
          'text-center text-lg py-2 px-3 sm:px-5 rounded hover:text-white font-medium border-2 hover:shadow-lg transition duration-200',
          pricingColor.buttonClassName
        )}
      >
        <Text
          renderBlock={(props) => <div>{props.children}</div>}
          placeholder="Action"
          propName="buttonText"
        />
      </Link>
      <div className="flex-1 flex flex-col ">
        <Text
          renderBlock={(props) => (
            <p
              className={classNames(
                'text-sm text-left mb-4',
                textColors.GRAY_500
              )}
            >
              {props.children}
            </p>
          )}
          placeholder="type a text"
          propName="featuresTitle"
        />

        <ul className={classNames('text-lg text-left', textColors.GRAY_700)}>
          <Repeater
            propName="features"
            itemProps={{ pricingColor }}
            renderItemWrapper={(items) => (
              <li className="flex items-center space-x-2 mb-2">{items}</li>
            )}
          />
        </ul>
      </div>
    </div>
  )
}

PricingPlan.schema = {
  name: blockNames.PricingPlan,
  label: 'Plan',
  category: 'pricing',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    popularTagText: 'Most popular',
    withPopularTag: false,
    pricingColor: pricingColors.CYAN.value,
    planName: 'Entry',
    planDescription: 'For startups and teams starting using React Bricks.',
    planPrice: '$ 99',
    planConditions: 'per app / month',
    buttonText: 'Get started',
    buttonLinkPath: '/',
    featuresTitle: 'Everything in Community, plus:',
    features: [
      {
        featureText: '5 users included',
      },
      {
        featureText: 'Up to 100 pages',
      },
      {
        featureText: 'Media library',
        withTag: true,
        tag: 'Soon',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'features',
      itemType: blockNames.PlanFeature,
      itemLabel: 'feature',
      min: 0,
      max: 15,
    },
  ],
  sideEditProps: [
    pricingColorsEditProps,
    {
      name: 'withPopularTag',
      label: 'Popular tag',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'buttonLinkPath',
      label: 'Button link',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default PricingPlan
