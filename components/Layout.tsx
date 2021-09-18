import React, { ReactNode } from "react";
import styled from "styled-components";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  keywords?: string;
  description?: string;
};

const Layout = ({ children, keywords, description, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <Container>{children}</Container>
  </div>
);

const Container = styled.div`
  text-align: center;
  padding: 6.25rem 3rem;
  background-repeat: no-repeat;
  background: #fff url("./pricing-bg.png");

  @media (max-width: 480px) {
    padding: 6.25rem 1.5rem;
  }
`;

Layout.defaultProps = {
  title: "flair.hr",
  description: "flair.hr",
  keywords: "flair.hr, salesforce, HRMS, CRM,",
};

export default Layout;
