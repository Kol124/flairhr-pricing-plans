import * as React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Pricing } from "../interfaces";
import {
  HeadlineThree,
  HeadlineTwo,
  Button,
  Card,
  Features,
  FeaturesPlus,
} from "../components/common";
import DropDown from "./DropDown";

type Props = {
  data: Pricing;
};

const PricingCard = ({ data }: Props) => (
  <Card>
    <HeadlineThree>{data.name}</HeadlineThree>
    <DetailText>
      Understand the true pulse of your organization with regular Check-ins and
      guided 1-on-1s, and show meaningful appreciation when it matters most
      using High Fives.
    </DetailText>
    <Amount>
      <HeadlineTwo>{data.amount}</HeadlineTwo>
      <span>
        <Image src="/slash.svg" alt="slash" width={45} height={40} />
      </span>
      <div>
        <p>per month</p>
        <p>per employee</p>
      </div>
    </Amount>
    <Line>
      <Image src="/hr.svg" alt="line" width={370} height={2} />
    </Line>
    {/* Change list style if Card has more contains more than one tier services */}
    {data.featuresPlus.length > 0 ? (
      <FeaturesPlus>
        {data.features.map((item) => (
          <li>
            <p>{item}</p>
            <span>
              <Image src="/info.svg" alt="information" width={24} height={24} />
              <DropDown title={item} />
            </span>
          </li>
        ))}
      </FeaturesPlus>
    ) : (
      <Features>
        {data.features.map((item) => (
          <li>
            <span>
              <Image src="/check-grey.svg" alt="check" width={24} height={24} />
            </span>
            <p>{item}</p>
          </li>
        ))}
      </Features>
    )}

    {/* Check if second tier services are available */}
    {data.featuresPlus.length > 0 && (
      <>
        <div>
          <Image src="/plus.svg" alt="plus" width={10} height={10} />
        </div>
        <FeaturesPlus>
          {data.featuresPlus.map((item) => (
            <li>
              <p>{item}</p>
              <span>
                <Image
                  src="/info.svg"
                  alt="information"
                  width={24}
                  height={24}
                />
                <DropDown title={item} />
              </span>
            </li>
          ))}
        </FeaturesPlus>
      </>
    )}

    {/* Check if third tier services are available */}
    {data.featuresPlusPlus.length > 0 && (
      <>
        <div>
          <Image src="/plus.svg" alt="plus" width={10} height={10} />
        </div>
        <FeaturesPlus>
          {data.featuresPlusPlus.map((item) => (
            <li>
              <p>{item}</p>
              <span>
                <Image
                  src="/info.svg"
                  alt="information"
                  width={24}
                  height={24}
                />
                <DropDown title={item} />
              </span>
            </li>
          ))}
        </FeaturesPlus>
      </>
    )}
    <Button>select plan</Button>
  </Card>
);

const DetailText = styled.div`
  color: #7a7e92;
  line-height: 28px;
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  line-height: 0.5px;

  img {
    display: inline-block;
  }
`;

export default PricingCard;
