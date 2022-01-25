import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Features from 'sections/features';
import FaqOne from 'sections/faq-one';
import FaqTwo from 'sections/faq-two';
import Video from 'sections/video';
import Pricing from 'sections/pricing';
import Services from 'sections/services';
import ProductFeature from 'sections/product-feature';
import CustomerSupport from 'sections/customer-support';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            title="Get your free CNDD link"
            description="Now claim your candid store and share product recommendations seamlessly. Earn money when people buy from your store"
          />
          <Banner />
          <Features />
          {/* <FaqOne /> */}
          <ProductFeature />
          {/* <Services /> */}
          <Pricing />
          {/* <CustomerSupport />
          <Video /> */}
          <FaqTwo />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
