import React, { useMemo, useRef } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
// import { SWRConfig } from "swr";
import SEOConfig from "../shared/components/SEO";
import Banner from "../components/home/Banner";
import Guide from "../components/home/Guide";
import BannerVideo from "../components/home/BannerVideo";
// import logger from "../utils/logger";

const BodyWrapper = styled.div``;

const Home = () => {
  const router = useRouter();
  const guideRef = useRef(null);
  const SEOData = useMemo(
    () => ({
      title: "島島阿學 - 學習資源平台 - Daodao Online Learning Platform",
      description:
        "「島島阿學」盼能透過建立學習資源網絡，讓自主學習者能找到合適的成長方法，進而成為自己想成為的人，並從中培養共好精神。目前正積極打造「可共編的學習資源平台」。",
      keywords: "島島阿學",
      author: "島島阿學",
      copyright: "島島阿學",
      imgLink: "/preview.webp",
      link: `https://test-page.notion.dev.daoedu.tw${router.asPath}`,
    }),
    [router]
  );

  return (
    <BodyWrapper>
      <SEOConfig data={SEOData} />
      <BannerVideo />
      <Banner guideRef={guideRef} />
      <div ref={guideRef} />
      <Guide />
    </BodyWrapper>
  );
};

export default Home;
