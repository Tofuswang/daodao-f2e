import React, { useEffect, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../../../shared/components/footer';
import PageContainer from '../../../../shared/containers/Page';
import Navigation from '../../../../shared/components/navigation';
import SiderBar from '../../../../components/home/RightSiderBar';
import About from '../../../../components/category/About';
import { SEARCH_TAGS, CATEGORY_ID } from '../../../../constants/category';
import SEO from '../../../../shared/components/seo';
import { loadNotionTable } from '../../../../redux/actions/category';

const BodyWrapper = styled.div`
  background-color: #f5f5f5;
`;

const SEOConfig = {
  title: '島島阿學 - 學習資源平台 - Daodao Online Learning Platform',
  description: '「島島阿學」盼能透過建立學習資源網絡，讓自主學習者能找到合適的成長方法，進而成為自己想成為的人，並從中培養共好精神。目前正積極打造「可共編的學習資源平台」。',
  keywords: '島島阿學',
  author: '島島阿學',
  copyright: '島島阿學',
  imgLink: 'https://resources.daoedu.tw/media/2020/08/1597934192-e1624a7b0d09ec164a2887ab2880f4c1.png',
  link: '/assets/images/preview.jpeg',
};

const LanglitPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, category } = useSelector((state) => state.category);
  const { query, route } = router;
  const isLoading = loading?.category;

  const onSearch = useCallback((name) => {
    const queryString = name ? `?tags=${name}` : '';
    router.push(`${route}${queryString}`);
  }, [query]);

  useEffect(() => {
    if (router.isReady) {
      dispatch(loadNotionTable(CATEGORY_ID.langlit, query));
    }
  }, [query]);

  return (
    <BodyWrapper>
      <Head>
        <SEO config={SEOConfig} />
      </Head>
      <Navigation />
      <PageContainer>
        <About
          tagList={SEARCH_TAGS.mathlog}
          cardList={category}
          isLoading={isLoading}
          length={category.length}
          onSearch={onSearch}
        />
        <SiderBar />
      </PageContainer>
      <Footer text="Tomorrow will be fine. 島島阿學 © 2021." />
    </BodyWrapper>
  );
};

export default LanglitPage;
