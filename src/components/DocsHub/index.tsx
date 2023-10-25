/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import React, { useState } from 'react';

// External Components
import clsx from 'clsx';
import styled, { keyframes } from "styled-components";

// Internal Components
import { A, Button, Content, H1, H2, Image, ItemH, ItemV, Section, Span } from '@site/src/css/SharedStyling';
import Footer from '@site/src/segments/Footer';

// Import Assets
import ArrowUp from "@site/static/assets/docs/ArrowUpRight-pink.svg";
import { FiArrowUpRight } from 'react-icons/fi';

// Internal Configs
import { ITechDocItem, QuickstartItems, SdkItemsList, TechDocItems } from "@site/src/config/DocsHubList";
import GLOBALS, { device } from '@site/src/config/globals';
import { PageMeta } from "@site/src/config/pageMeta";
import "./styles.css";



function QuickstartList({ title, codeblock, Svg }: IQuickstartItem) {
  
  return (
    <PopularQuickiesCard>
      <PopularQuickiesHeader>
        <PopularQuickiesTitle>{`${title}`}</PopularQuickiesTitle>
      </PopularQuickiesHeader>
      
      <PopularQuickiesContent>
        <PopularQuickiesCodeBlock
          language="jsx"
          showLineNumbers={true}
        >
          {codeblock}
        </PopularQuickiesCodeBlock>
      </PopularQuickiesContent>
    </PopularQuickiesCard>
  );
}

function TechDocItem({ title, srcref, alt, description, codeblock, link }: ITechDocItem) {
  const [content, setContent] = useState<number>(0);

  return (
    <TechDocCard>
    {/* <Link to={link} target='_blank'> */}
      <TechDocContent
        onClick={(e) => {e.preventDefault(); window.location.href = link}}
        hoverBackground="transparent"
      >
        <ItemV
          alignSelf="stretch"
          margin="0px 8%"
        >
          <ItemV
            padding="0px 0px 30px 0px"
            alignItems="flex-start"
          >
            <TechDocIcon>
              <Image
                src={require(`@site/static/assets/docs/docshub/${srcref}.webp`).default}
                srcSet={`${require(`@site/static/assets/docs/docshub/${srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/docs/docshub/${srcref}@3x.webp`).default} 3x`}
                alt={`${alt}`}
              />
            </TechDocIcon>
            <TechDocTitle>{title}</TechDocTitle>
          </ItemV>
          
          {codeblock &&
            <TechDocSwitcher
              gap="10px"
            >
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setContent(0);
                }}
                background={content == 0 ? 'var(--ifm-color-primary)' : 'var(--ifm-color-background)'}
                color={content == 0 ? 'var(--ifm-color-primary-inverse)' : 'var(--ifm-color-content)'}
              >
                Overview
              </Button>
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setContent(1);
                }}
                background={content == 1 ? 'var(--ifm-color-primary)' : 'var(--ifm-color-background)'}
                color={content == 1 ? 'var(--ifm-color-primary-inverse)' : 'var(--ifm-color-content)'}
              >
                API
              </Button>
            </TechDocSwitcher>
          }

          <ItemV
            alignItems="stretch"
          >
            {content == 0 &&
              <TechDocOverview>{description}</TechDocOverview>
            }
          </ItemV>
        </ItemV>

        {content == 1 && codeblock && 
          <TechDocCodeBlock
            language="jsx"
          >
            {codeblock}
          </TechDocCodeBlock>
        }
      </TechDocContent>
    </TechDocCard>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout title={PageMeta.DOCS.pageTitle} description={PageMeta.DOCS.pageDescription} showNavbar={false}>
      <Head>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://push.org/docs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Push | Documentation Hub" />
        <meta property="og:description" content="Explore our comprehensive cheat sheet, packed with quick references, tips, and key information to master the subject. Get a handy resource to boost your knowledge and productivity instantly." />
        <meta property="og:image" content="/assets/previews/docsfbpreview.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pushprotocol" />
        <meta name="twitter:title" content="Push | Documentation Hub" />
        <meta name="twitter:description" content="Explore our comprehensive cheat sheet, packed with quick references, tips, and key information to master the subject. Get a handy resource to boost your knowledge and productivity instantly." />
        <meta name="twitter:image" content="/assets/previews/docstwtpreview.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            "name": "Push Protocol",
            "description": "The Communication Protocol of Web3",
            "url": "https://push.org",
            "logo": "/assets/website/favicon.ico",
            "sameAs": [
              "https://twitter.com/pushprotocol",
              "https://www.linkedin.com/company/push-protocol/mycompany/"
            ]
          })}
        </script>
      </Head>

      {/* DOCS HERO SECTION */}
      <DocsHeroSection>
        <ItemV
          position="absolute"
          top="-100px"
          left="0"
          right="0"
          height="100px"
          background={GLOBALS.COLORS.BG_DARK}
        >
        </ItemV>
        <Content
          padding="0px"
        >
          <HeroHeader>
            <ItemV
              zIndex="1"
            >
              <H1>Push Documentation Hub</H1>
              <Span 
                color={GLOBALS.COLORS.FONT_LIGHT}
                padding="0 0 60px 0"
                textAlign="center"
              >
                Get started with building native web3 communition for your protocol!
              </Span>
              <Link
                className='hero__button'
                to="/docs/chat">
                <Span padding="0 10px 0 0" fontSize="18px">Get Started</Span>
                <FiArrowUpRight size={16} />
              </Link>
            </ItemV>
            
            <ItemV
              position="absolute"
              bottom="-25%"
              left="0"
              right="0"
              height="50%"
            >
              <PulseStatic />
              <Pulse>
                <Pulsate stagger={0}></Pulsate>
                <Pulsate stagger={1}></Pulsate>
                <Pulsate stagger={2}></Pulsate>
                <Pulsate stagger={3}></Pulsate>
                <Pulsate stagger={4}></Pulsate>
                <Pulsate stagger={5}></Pulsate>
                <Pulsate stagger={6}></Pulsate>
              </Pulse>
            </ItemV>
          </HeroHeader>
        </Content>
        
      
      </DocsHeroSection>

      {/* QUICKSTART SECTION */}
      <HomepageSection alignItems="flex-start">
        <FluidContent>
          <HomepageSubHeader>
            Popular Quickstart
          </HomepageSubHeader>

          <PopularQuickiesList>
            {QuickstartItems.map((item, idx) => {
              return (
                <PopularQuickiesCard key={idx}>
                  <PopularQuickiesHeader>
                    <PopularQuickiesTitle>{`${item.title}`}</PopularQuickiesTitle>
                  </PopularQuickiesHeader>
                  
                  <PopularQuickiesContent>
                    <PopularQuickiesCodeBlock
                      language="jsx"
                      showLineNumbers={true}
                    >
                      {item.codeblock}
                    </PopularQuickiesCodeBlock>
                  </PopularQuickiesContent>
                </PopularQuickiesCard>
              );
            })}
          </PopularQuickiesList>
        </FluidContent>
      </HomepageSection>


      {/* TECH DOCS SECTION */}
      <HomepageSection>
        <FluidContent>
          <HomepageSubHeader>
            Technical Documentation
          </HomepageSubHeader>
          <TechDocCardList>
            {TechDocItems.map((props, idx) => (
              <TechDocItem key={idx} {...props} />
            ))}
          </TechDocCardList>
        </FluidContent>
      </HomepageSection>
      
      {/* SDK SECTION */}
      <HomepageSection>
        <FluidContent>
          <ItemH justifyContent="flex-start">
            <HomepageSubHeader>
              Push SDK
            </HomepageSubHeader>
            <Link to='https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details' target='_blank'>
              <div className='hero_home_explore'>
                <p className='hero_home_explore_link'>
                  Explore SDK
                </p>
                <ArrowUp className='arrowUp-icon' />
              </div>
            </Link>
          </ItemH>
            
          
          <PushSdkCardList justifyContent="flex-start">
            {SdkItemsList.map((item, idx) => (
              <PushSdkCard>
                <PushSdkContent
                  href={item.link}
                  target="_blank"
                >
                  <div className='sdk-container-inner'>
                    <div className='sdk-title spacing-small'>
                      {item.title}
                    </div>
                    <div className='sdk-icon'>
                      <FiArrowUpRight size={24} />
                    </div>
                  </div>
                </PushSdkContent>
              </PushSdkCard>
            ))}
          </PushSdkCardList>
          
          {/* <div className='Faqs-main-container'>
            <div className='sub-container'>
              <span className="hero_home_Faq_header">
                Frequently Asked Questions
              </span>
              <Link to='https://push.org/faq' target='_blank'>
                <div className='hero_home_explore'>
                  <p className='hero_home_explore_link'>
                    Explore FAQs
                  </p>
                  <FiArrowUpRight className='arrowUp-icon' />
                </div>
              </Link>
            </div>
            <FAQ />

          </div> */}
        </FluidContent>
      </HomepageSection>

      <Footer />
    </Layout>
  );
}

const DocsHeroSection = styled(Section)`
  background: ${GLOBALS.COLORS.BG_DARK};

  padding: ${`${GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.DESKTOP}`};
  padding-bottom: 0px;

  @media ${device.laptop} {
    padding: ${`${GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.TABLET}`};
    padding-bottom: 0px;
  }

  @media ${device.mobileM} {
    padding: ${`${GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE}`};
    padding-bottom: 0px;
  }
`;

const HeroHeader = styled(ItemV)`
  padding: 2rem 0 5.5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  & ${H1} {
    font-size: var(--ifm-h1-font-size);
  }
`;

const pulseStaticAnim = keyframes`
  100% { 
    opacity: 0.25;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
  }
`

const PulseStatic = styled.div`
  width: 40px;
  height: 40px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  animation: ${pulseStaticAnim} 5s ease-out forwards;
  z-index: 2;
`

const Pulse = styled.div`
  width: 40px;
  height: 40px;
  background: var(--ifm-color-primary-preferred);
  border-radius: 50%;
  position: relative;
`

const pulsateAnim = keyframes`
  100% { 
    opacity: 0;
    transform: scale(12);
  }
`

const Pulsate = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  opacity: 0.8;
  animation: ${pulsateAnim} 6s ease-out infinite;
  animation-delay: calc(1s * ${props => (props.stagger ? props.stagger : 1)});
`

const FluidContent = styled(Content)`
  align-self: center;
  width: 68%;
  max-width: initial;
  padding-top: 0px;
  padding-bottom: 0px;

  @media ${device.laptopL} {
    width: 100%;
    box-sizing: border-box;
  }
`

const TechDocIcon = styled(ItemV)`
  align-self: flex-start;
  & ${Image} {
    height: 44px;
    width: 44px;
    margin: 0 0 1rem 0;
  }
`;

const HomepageSection = styled(Section)`
  margin-top: 70px;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const HomepageSubHeader = styled(H2)`
  font-family: var(--ifm-font-family-base);
  font-weight: 600;
  font-size: 36px;
  align-items: start;
  margin-bottom: 30px;
  flex: 1;

  color: var(--ifm-color-primary-text);
`;

const PopularQuickiesList = styled(ItemH)`
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  position: relative;
`;

const PopularQuickiesCard = styled(ItemV)`
  margin: 0px;
  align-self: flex-start; 
  flex: 0 0 calc(50% - 21.33px);
  min-width: 280px;
  max-width: calc(50% - 21.33px);
  overflow: auto;
  width: 100%;

  /* WebKit browsers (Chrome, Safari) */
  *::-webkit-scrollbar {
      width: 6px;
  }
  
  *::-webkit-scrollbar-thumb {
      background: #CB3FAA;
      border-radius: 6px;
  }
  
  *::-webkit-scrollbar-track {
      background: #f1f1f1;
  }
  
  *::-webkit-scrollbar-button {
      display: none !important;
  }
  
  /* Firefox */
  * {
      scrollbar-color: #CB3FAA #f1f1f1;
      scrollbar-width: thin;
  }

  box-sizing: border-box;

  @media ${device.laptop} {
    flex: 1;
    max-width: initial;
  }
`;

const PopularQuickiesHeader = styled(ItemH)`
  align-items: center;
  font-size: 20px;
  background: #282a36;
  justify-content: flex-start;
  padding: 10px 20px 14px 80px;
  margin-bottom: -6px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  position: relative;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    height: 0.6em;
    width: 0.6em;
    margin: 0.3em;
    left: 0.5em;
    border-radius: 100%;
    background: #4a4a4a;
    box-shadow: 1em 0em #4a4a4a, 2em 0em #4a4a4a;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    background: rgba(255, 0, 0, 0.8);
    box-shadow: 1em 0em rgba(255, 255, 0, 0.8), 2em 0em rgba(0, 255, 0, 0.8);
  }
`;

const PopularQuickiesTitle = styled(Span)`
  color: #9aa3db;
  font-size: 16px;
  font-weight: bold;
`;

const PopularQuickiesContent = styled(ItemV)`
  border-top: 1px solid #3d3d3d;
  align-items: stretch;
  width: 100%;
`;

const PopularQuickiesCodeBlock = styled(CodeBlock)`
  margin: 0px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  overflow: hidden;
  width: inherit;
`;

const TechDocCardList = styled(ItemH)`
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
`

const TechDocCard = styled(ItemV)`
  margin: 0px;
  align-self: flex-start; 
  flex: 0 0 calc(33.33% - 21.33px);
  min-width: 280px;
  max-width: calc(33.33% - 21.33px);
  box-sizing: border-box;

  @media ${device.laptop} {
    flex: 1;
    max-width: initial;
  }
`;

const TechDocContent = styled(Button)`
  margin-top: 24px;
  position: relative;
  border-radius: 24px;
  padding: 40px 20px;
  border: 1px solid #d9d9d9;
  background: transparent;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  max-width: 100%;

  & svg path {
    stroke: var(--ifm-color-primary-text);
  }
  
  &:hover {
    border: 1px solid var(--ifm-color-primary-preferred);

    & ${Image} {
      filter: invert(36%) sepia(21%) saturate(4402%) hue-rotate(291deg) brightness(89%) contrast(94%);
    }
  }
`;

const TechDocTitle = styled(Span)`
  font-family: var(--ifm-font-family-base);
  font-size: 26px;
  color: var(--ifm-color-primary-text);
  margin-top: 0px;
  font-weight: bold;
  letter-spacing: -0.03em;
`;

const TechDocSwitcher = styled(ItemH)`
  position: absolute;
  top: 0;
  right: 0;
  padding: inherit;

  & ${Button} {
    padding: 4px 12px;
    font-size: 14px;
    font-weight: 600;
  }
`;
const TechDocOverview = styled(Span)`
  font-family: var(--ifm-font-family-base);
  font-weight: 400;
  font-size: 16px;
  color: var(--ifm-color-secondary-text);
  margin-top: -10px;
  letter-spacing: -0.02em;
  line-height: 150%;
`;

const TechDocCodeBlock = styled(CodeBlock)`
  font-size: 14px;
  margin: 0px 10px;
  align-self: stretch;
  text-align: initial;
  overflow: auto;
  max-width: 100%;

  /* WebKit browsers (Chrome, Safari) */
  *::-webkit-scrollbar {
      width: 6px;
  }
  
  *::-webkit-scrollbar-thumb {
      background: #CB3FAA;
      border-radius: 6px;
  }
  
  *::-webkit-scrollbar-track {
      background: #f1f1f1;
  }
  
  *::-webkit-scrollbar-button {
      display: none !important;
  }
  
  /* Firefox */
  * {
      scrollbar-color: #CB3FAA #f1f1f1;
      scrollbar-width: thin;
  }
`;

const PushSdkCardList = styled(ItemH)`
  gap: 32px;
  margin-top: 30px;
  margin-bottom: 70px;
  align-items: center;
`

const PushSdkCard = styled(ItemH)`
  align-self: flex-start; 
  flex: 0 0 calc(33.33% - 21.33px);
  min-width: 250px;
  max-width: calc(33.33% - 21.33px);

  @media ${device.laptop} {
    flex: 1;
    max-width: initial;
  }
`

const PushSdkContent = styled(A)`
  color: var(--ifm-color-primary-text);
  background: var(--ifm-color-primary-inverse);
  align-items: stretch;
  display: flex;
  justify-content: stretch;
  align-self: stretch;
  border: 1px solid #d9d9d9;
  width: 100%;
  padding: 24px;

  & svg {
    color: #d9d9d9;
  }

  &:after {
    background: transparent;
  }

  &:hover {
    border: 1px solid var(--ifm-color-primary-preferred);;

    & svg {
      color: var(--ifm-color-primary-preferred);;
    }
  }
`