import React from 'react'
import { types } from 'react-bricks/frontend'
import { RichText, Text, Link, Repeater } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'

interface PricingPlanProps {
  withPopularTag: boolean
  buttonLinkPath: string
  withSecondButton: boolean
  seconButtonLinkPath: string
}

const PricingPlan: types.Brick<PricingPlanProps> = ({
  withPopularTag,
  buttonLinkPath,
  withSecondButton,
  seconButtonLinkPath,
}) => {
  return (
    <div>
      <div className="m-4 p-5 border border-t-4 border-t-cyan-500 rounded flex-1 min-w-[250px] max-w-[350px] text-center flex flex-col sm:w-[250px] md:w-[270px] lg:w-[300px]">
        <div className="h-6 self-center">
          {withPopularTag ? (
            <Text
              renderBlock={(props) => (
                <div className="px-2 pt-px pb-1 rounded-b text-xs font-bold uppercase text-white bg-purple-600 -mt-5">
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
              <h2 className="text-2xl text-cyan-500 font-bold mb-4">
                {props.children}
              </h2>
            )}
            placeholder="Plan name..."
            propName="planName"
          />

          <RichText
            renderBlock={(props) => (
              <p className="text-lg text-gray-600">{props.children}</p>
            )}
            placeholder="Description..."
            propName="planDescription"
          />
        </div>
        <div className="text-center mb-4">
          <Text
            renderBlock={(props) => (
              <strong className="block text-3xl font-bold pt-4">
                {props.children}
              </strong>
            )}
            placeholder="Price"
            propName="planPrice"
          />

          <Text
            renderBlock={(props) => (
              <p className="text-gray-500 mb-2">{props.children}</p>
            )}
            placeholder="per user / per month..."
            propName="planConditions"
          />
        </div>
        <Link
          href={buttonLinkPath}
          className={`cursor-pointer block ${
            withSecondButton ? `mb-4` : `mb-8`
          } text-center text-lg py-2 px-3 sm:px-5 rounded text-cyan-600 hover:text-white font-medium border-2 border-cyan-500 hover:bg-cyan-500 hover:shadow-lg transition duration-200`}
        >
          <Text
            renderBlock={(props) => <div>{props.children}</div>}
            placeholder="Action"
            propName="buttonText"
          />
        </Link>
        {withSecondButton ? (
          <Link
            href={seconButtonLinkPath}
            className="cursor-pointer block mb-8 text-center text-sm py-1 px-3 sm:px-5 rounded text-white bg-purple-500 hover:bg-indigo-500 font-medium hover:shadow-lg transition duration-200"
          >
            <Text
              renderBlock={(props) => <div>{props.children}</div>}
              placeholder="Second action"
              propName="secondButtonText"
            />
          </Link>
        ) : null}
        <div className="flex-1 flex flex-col ">
          <Text
            renderBlock={(props) => (
              <p className="text-sm text-gray-500 text-left mb-4">
                {props.children}
              </p>
            )}
            placeholder="type a text"
            propName="featuresTitle"
          />

          <ul className="text-lg text-gray-700 text-left">
            <Repeater
              propName="features"
              renderItemWrapper={(items) => (
                <li className="flex items-center space-x-2 mb-2">{items}</li>
              )}
            />
          </ul>
        </div>
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
    planName: 'custom',
    planDescription: 'For startups and teams starting using React Bricks.',
    planPrice: '$ 99',
    planConditions: 'per app / month',
    buttonTextText: 'get started',
    buttonLinkPath: '',
    withSecondButton: false,
    featuresTitle: 'Everything in Community, plus:',
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
    {
      groupName: 'plan',
      props: [
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
        {
          name: 'withSecondButton',
          label: 'Second button?',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'seconButtonLinkPath',
          label: 'Second button link',
          type: types.SideEditPropType.Text,
          show: (props) => !!props.withSecondButton,
        },
      ],
    },
  ],
}

export default PricingPlan
