import Image from "next/image";
import { GetStaticProps } from "next";
import styled from "styled-components";
import Layout from "../components/Layout";
import { pricingData } from "../utils/sample-data";
import PricingCard from "../components/PricingCard";
import { HeadlineTwo } from "../components/common";

import { Pricing } from "../interfaces";

type Props = {
  items: Pricing[];
};

const IndexPage = ({ items }: Props) => (
  <Layout title="Pricing | flair.hr">
    <HeadlineTwo>Base plans</HeadlineTwo>
    <Period>
      <p>Monthly</p>{" "}
      <span>
        <Image src="/slash-sm.svg" alt="slash" width={30} height={25} />
      </span>{" "}
      <p>Yearly</p>
    </Period>
    <CardContainer>
      {items.map((item) => (
        <PricingCard key={item.id} data={item} />
      ))}
    </CardContainer>
  </Layout>
);

const CardContainer = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 2.5rem auto;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Period = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;

  p {
    &:first-of-type {
      border-bottom: 1px solid #1f2643;
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const items: Pricing[] = pricingData;
  return { props: { items } };
};

export default IndexPage;
